"""Render the social share image (public/og-image.png, 1200x630).

Usage (from the project root): python3 scripts/make_og_image.py
"""
from PIL import Image, ImageDraw, ImageFilter, ImageFont

W, H = 1200, 630
BOLD = "/usr/share/fonts/truetype/noto/NotoSans-Bold.ttf"
REG = "/usr/share/fonts/truetype/noto/NotoSans-Regular.ttf"


def font(path, size):
    return ImageFont.truetype(path, size)


def lerp(a, b, t):
    return tuple(round(a[i] + (b[i] - a[i]) * t) for i in range(3))


# ---- background: navy gradient + faint grid + glows ----
img = Image.new("RGB", (W, H))
top, bottom = (17, 28, 54), (7, 13, 26)
px = img.load()
for y in range(H):
    c = lerp(top, bottom, y / H)
    for x in range(W):
        px[x, y] = c

grid = Image.new("RGBA", (W, H), (0, 0, 0, 0))
g = ImageDraw.Draw(grid)
for x in range(0, W, 48):
    g.line([(x, 0), (x, H)], fill=(96, 165, 250, 14))
for y in range(0, H, 48):
    g.line([(0, y), (W, y)], fill=(96, 165, 250, 14))
img.paste(grid, (0, 0), grid)

glow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
gl = ImageDraw.Draw(glow)
gl.ellipse([780, -160, 1320, 380], fill=(59, 130, 246, 70))
gl.ellipse([-200, 380, 300, 820], fill=(139, 92, 246, 55))
glow = glow.filter(ImageFilter.GaussianBlur(90))
img.paste(glow, (0, 0), glow)

d = ImageDraw.Draw(img)

# ---- logo mark: gradient badge with interlocking AA ----
bx, by, bs = 80, 78, 112
badge = Image.new("RGBA", (bs, bs))
bp = badge.load()
for y in range(bs):
    for x in range(bs):
        bp[x, y] = lerp((59, 130, 246), (139, 92, 246), (x + y) / (2 * bs)) + (255,)
mask = Image.new("L", (bs, bs), 0)
ImageDraw.Draw(mask).rounded_rectangle([0, 0, bs - 1, bs - 1], radius=30, fill=255)
img.paste(badge, (bx, by), mask)
s = bs / 48
lw = round(3.6 * s)


def pt(x, y):
    return (bx + x * s, by + y * s)


d.line([pt(9, 36), pt(19, 13), pt(29, 36)], fill=(255, 255, 255), width=lw, joint="curve")
d.line([pt(19, 36), pt(29, 13), pt(39, 36)], fill=(170, 185, 245), width=lw, joint="curve")
d.line([pt(13.5, 28), pt(34.5, 28)], fill=(103, 232, 249), width=lw)

# ---- availability pill ----
pill_font = font(BOLD, 22)
pill_text = "Available for new projects & roles"
tw = d.textlength(pill_text, font=pill_font)
px0, py0 = 80, 232
d.rounded_rectangle([px0, py0, px0 + tw + 64, py0 + 46], radius=23, fill=(6, 78, 59), outline=(16, 185, 129), width=2)
d.ellipse([px0 + 20, py0 + 17, px0 + 32, py0 + 29], fill=(16, 185, 129))
d.text((px0 + 44, py0 + 8), pill_text, font=pill_font, fill=(110, 231, 183))

# ---- name, title, pitch ----
d.text((80, 300), "Ahmed Ashraf", font=font(BOLD, 86), fill=(255, 255, 255))
d.text((84, 408), "Senior Software Engineer", font=font(BOLD, 40), fill=(147, 197, 253))
d.text(
    (84, 468),
    "Scalable web platforms for FinTech, RegTech & SaaS",
    font=font(REG, 30),
    fill=(148, 163, 184),
)

# ---- tech tags ----
x = 84
tag_font = font(BOLD, 22)
for tag in ["React", "Next.js", "Node.js", "Laravel", "AI-assisted"]:
    w = d.textlength(tag, font=tag_font) + 32
    d.rounded_rectangle([x, 540, x + w, 582], radius=21, fill=(30, 41, 59), outline=(59, 130, 246), width=2)
    d.text((x + 16, 546), tag, font=tag_font, fill=(191, 219, 254))
    x += w + 12

# ---- right side: small brand line ----
d.text((W - 300, 96), "5+ years · 26 projects", font=font(BOLD, 24), fill=(203, 213, 225))
d.text((W - 300, 130), "KSA · UAE · Kuwait · Egypt", font=font(REG, 22), fill=(148, 163, 184))

img.save("public/og-image.png", optimize=True)
print("saved public/og-image.png")
