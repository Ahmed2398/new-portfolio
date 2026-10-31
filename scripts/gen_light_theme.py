"""Generate light-theme overrides from the site's dark CSS.

Usage (from the project root): python3 scripts/gen_light_theme.py src src/theme-light.css

For every rule that sets a colour, emit the same rule prefixed with
html[data-theme="light"] and a light-mode colour:
  * dark / low-saturation surfaces  -> lightness inverted (navy -> pale slate)
  * light text                      -> dark text
  * bright accent text              -> darker accent for contrast
  * white text on gradient buttons  -> kept white
Code panels (editor, terminal, motto, illustration, preloader) stay dark.
"""
import colorsys
import os
import re
import sys

src_dir, out_path = sys.argv[1], sys.argv[2]

FILES = [
    "style.css",
    "responsive.css",
    "components/Navbar.css",
    "components/Footer.css",
    "components/Home/Hero.css",
    "components/Home/Home2.css",
    "components/Home/AIShowcase.css",
    "components/Home/Experience.css",
    "components/About/About.css",
    "components/Projects/Projects.css",
    "components/Services/Services.css",
    "components/Journey/Journey.css",
    "components/Contact/Contact.css",
    "components/Chatbot/Chatbot.css",
    "components/WelcomeAudio.css",
    "components/NotFound/NotFound.css",
]

# Rules whose selectors match these stay dark on purpose
KEEP_DARK = re.compile(
    r"\.hc\b|\.hc-|\.nf-terminal|\.motto-code|\.workspace|\.ws-|\.pl-|\.preloader|\.tk-|"
    r"#preloader|\.code-|\.preview-|\.ai-tool-mark|\.cb-launcher|\.nav-cv|\.ft-top|"
    r"\.cb-avatar-bot|\.brand-mark|\.quick-link-btn|\.ct-channel-icon|\.cb-msg\.user"
)

COLOR_PROPS = {
    "color", "background", "background-color", "background-image", "border", "border-color",
    "border-top", "border-bottom", "border-left", "border-right", "border-top-color",
    "border-bottom-color", "border-left-color", "border-right-color", "box-shadow", "outline",
}

HEX = re.compile(r"#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})\b")
RGBA = re.compile(r"rgba?\(\s*(\d+)\s*,?\s*(\d+)\s*,?\s*(\d+)\s*(?:[,/]\s*([\d.]+%?))?\s*\)")
GRADIENT_ACCENT = re.compile(r"linear-gradient\([^;]*(#3b82f6|#8b5cf6|#2563eb|#10b981|#25d366|#0a66c2)", re.I)


def to_rgb(token):
    m = HEX.fullmatch(token)
    if m:
        h = m.group(1)
        if len(h) == 3:
            h = "".join(c * 2 for c in h)
        return int(h[0:2], 16), int(h[2:4], 16), int(h[4:6], 16), None
    m = RGBA.fullmatch(token)
    if m:
        a = m.group(4)
        if a and a.endswith("%"):
            a = str(float(a[:-1]) / 100)
        return int(m.group(1)), int(m.group(2)), int(m.group(3)), a
    return None


def fmt(r, g, b, a):
    r, g, b = (max(0, min(255, round(v))) for v in (r, g, b))
    if a is None:
        return "#{:02x}{:02x}{:02x}".format(r, g, b)
    return "rgba({}, {}, {}, {})".format(r, g, b, a)


def convert(token, prop, rule_has_accent_bg):
    parsed = to_rgb(token)
    if not parsed:
        return token
    r, g, b, a = parsed
    h, l, s = colorsys.rgb_to_hls(r / 255, g / 255, b / 255)

    if prop == "box-shadow":
        # dark drop shadows -> soft slate shadows; coloured glows stay
        if l < 0.2:
            alpha = float(a) if a is not None else 1.0
            return fmt(15, 23, 42, round(min(alpha * 0.35, 0.18), 3))
        return token

    if prop == "color":
        if l > 0.95 and s < 0.1:  # white text
            return token if rule_has_accent_bg else "#0f172a"
        if s < 0.5 or l < 0.3:  # slate text -> invert lightness
            nl = max(0.08, min(0.5, 1 - l))
        elif l > 0.55:  # bright accent text -> darker accent
            nl = 0.42
        else:
            return token
        nr, ng, nb = colorsys.hls_to_rgb(h, nl, s)
        return fmt(nr * 255, ng * 255, nb * 255, a)

    # backgrounds and borders
    if l < 0.32 or (s < 0.5 and l < 0.75):
        nl = 1 - l
        nl = max(nl, 0.9) if l < 0.2 else nl
        ns = s * 0.6
        nr, ng, nb = colorsys.hls_to_rgb(h, nl, ns)
        na = a
        if a is not None and prop.startswith("background"):
            # translucent dark cards become clearly visible white cards
            na = str(round(min(1.0, float(a) + 0.35), 2))
        return fmt(nr * 255, ng * 255, nb * 255, na)
    return token


def convert_value(value, prop, rule_has_accent_bg):
    def repl(m):
        return convert(m.group(0), prop, rule_has_accent_bg)
    out = RGBA.sub(repl, value)
    out = HEX.sub(repl, out)
    return out


def prefix_selector(sel):
    sel = sel.strip()
    if sel.startswith(":root") or sel == "html":
        return 'html[data-theme="light"]' + sel[len(":root"):] if sel.startswith(":root") else 'html[data-theme="light"]'
    if sel.startswith("html"):
        return 'html[data-theme="light"]' + sel[4:]
    return 'html[data-theme="light"] ' + sel


def parse_blocks(css):
    """Yield (media, selector, body) for plain rules, descending one level into @media."""
    css = re.sub(r"/\*[\s\S]*?\*/", "", css)
    i, n = 0, len(css)
    while i < n:
        j = css.find("{", i)
        if j == -1:
            break
        head = css[i:j].strip()
        depth, k = 1, j + 1
        while k < n and depth:
            if css[k] == "{":
                depth += 1
            elif css[k] == "}":
                depth -= 1
            k += 1
        body = css[j + 1:k - 1]
        if head.startswith("@media"):
            for _, sel, b in parse_blocks(body):
                yield head, sel, b
        elif not head.startswith("@"):
            yield None, head, body
        i = k


def is_accent_value(value):
    """Gradient with brand colours, or any saturated mid-tone colour (e.g. #2563eb)."""
    if GRADIENT_ACCENT.search(value):
        return True
    for m in list(RGBA.finditer(value)) + list(HEX.finditer(value)):
        parsed = to_rgb(m.group(0))
        if not parsed:
            continue
        r, g, b, a = parsed
        if a is not None and float(a) < 0.6:
            continue
        h, l, s = colorsys.rgb_to_hls(r / 255, g / 255, b / 255)
        if s > 0.5 and 0.3 < l < 0.7:
            return True
    return False


STATE = re.compile(r":(hover|focus|active|focus-visible|focus-within)\b")


def base_selectors(selector):
    return {STATE.sub("", s).strip() for s in selector.split(",")}


def process(css):
    # Pass 1: selectors whose own background is an accent colour (buttons, badges)
    accent_bases = set()
    for _, selector, body in parse_blocks(css):
        for d in body.split(";"):
            if ":" in d and d.split(":", 1)[0].strip().lower().startswith("background") and is_accent_value(d):
                accent_bases |= base_selectors(selector)

    rules = []
    for media, selector, body in parse_blocks(css):
        if KEEP_DARK.search(selector):
            continue
        decls = [d.strip() for d in body.split(";") if ":" in d]
        has_accent_bg = any(
            d.split(":", 1)[0].strip().startswith("background") and is_accent_value(d) for d in decls
        ) or bool(base_selectors(selector) & accent_bases)
        out = []
        for d in decls:
            prop, value = d.split(":", 1)
            prop = prop.strip().lower()
            if prop not in COLOR_PROPS:
                continue
            if prop.startswith("background") and is_accent_value(value):
                # keep accent backgrounds (buttons, badges, active pills), re-stated at
                # light-theme specificity so broader light rules can't override them
                out.append("  {}: {}".format(prop, value.strip()))
                continue
            new = convert_value(value, prop, has_accent_bg)
            if new != value:
                out.append("  {}: {}".format(prop, new.strip()))
            elif prop == "color" and has_accent_bg:
                # Re-state white text on accent buttons at light-theme specificity,
                # so broader light rules (e.g. ".footer a") can't override it
                out.append("  {}: {}".format(prop, value.strip()))
        if out:
            sels = ",\n".join(prefix_selector(s) for s in selector.split(","))
            rules.append((media, sels + " {\n" + ";\n".join(out) + ";\n}"))
    return rules


chunks = [
    "/* AUTO-GENERATED light theme — regenerate with scripts/gen_light_theme.py, then\n"
    "   hand-tune in theme-light-fixes.css (loaded after this file). */\n"
]
for rel in FILES:
    with open(os.path.join(src_dir, rel)) as fh:
        rules = process(fh.read())
    if not rules:
        continue
    chunks.append("\n/* ---- from {} ---- */".format(rel))
    for media, rule in rules:
        chunks.append("{} {{\n{}\n}}".format(media, rule) if media else rule)

with open(out_path, "w") as fh:
    fh.write("\n\n".join(chunks) + "\n")
print("rules written:", sum(c.count("{") for c in chunks))
