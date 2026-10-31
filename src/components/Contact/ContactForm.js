import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import { useLang } from "../../i18n/LanguageContext";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const { t } = useLang();
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [searchParams] = useSearchParams();
  const requestedService = searchParams.get("service");

  // Pre-fill the subject when arriving from a service card (/contact?service=...)
  useEffect(() => {
    if (requestedService) {
      setFormData((prev) => ({ ...prev, subject: `Inquiry: ${requestedService}` }));
    }
  }, [requestedService]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isSubmitting) return;
    // Bots fill the hidden honeypot — skip sending
    if (event.target.botcheck && event.target.botcheck.checked) return;
    setIsSubmitting(true);
    setStatus("");

    const formDataToSend = new FormData(event.target);
    formDataToSend.append("access_key", "998dce56-ab55-427a-8b2e-e9e275fc92f8");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend
      });

      const data = await response.json();

      if (data.success) {
        setStatus(t("✓ Message sent successfully! I'll get back to you soon.", "✓ الرسالة اتبعتت! هرد عليك قريب."));
        event.target.reset();
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
      } else {
        console.log("Form error:", data);
        setStatus(t("✗ Failed to send message. Please try again or email me directly.", "✗ الرسالة مااتبعتتش. جرب تاني أو ابعتلي إيميل مباشرة."));
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus(t("✗ Failed to send message. Please try again or email me directly at ahmedashraf2398@gmail.com", "✗ الرسالة مااتبعتتش. جرب تاني أو ابعتلي على ahmedashraf2398@gmail.com"));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container fluid className="contact-section" id="contact">
      <Container fluid>
        <Row>
          <Col md={12} className="contact-header">
            <h1 className="contact-heading-gradient">
              {t("Get In ", "خلينا ")}
              <span className="gradient-text">{t("Touch", "نتكلم")}</span>
            </h1>
            <p className="contact-description">
              {t(
                "I'm always interested in hearing about new projects and opportunities. Feel free to reach out if you'd like to discuss how we can work together.",
                "دايماً مهتم أسمع عن مشاريع وفرص جديدة. ابعتلي لو حابب نتكلم إزاي نشتغل مع بعض."
              )}
            </p>
          </Col>
        </Row>

        <Row className="contact-content">
          <Col md={6} className="contact-info">
            <div className="info-item glass-card">
              <div className="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div className="info-content">
                <h3>{t("Email", "الإيميل")}</h3>
                <p>ahmedashraf2398@gmail.com</p>
              </div>
            </div>

            <div className="info-item glass-card">
              <div className="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div className="info-content">
                <h3>{t("Phone", "التليفون")}</h3>
                <p>+20 1147266169</p>
              </div>
            </div>

            <div className="info-item glass-card">
              <div className="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div className="info-content">
                <h3>{t("Location", "المكان")}</h3>
                <p>{t("Cairo, Egypt", "القاهرة، مصر")}</p>
              </div>
            </div>

            <div className="info-item glass-card">
              <div className="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <div className="info-content">
                <h3>{t("Timezone", "التوقيت")}</h3>
                <p>GMT+2 (EET)</p>
              </div>
            </div>

            <div className="info-item glass-card availability-card">
              <div className="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
              </div>
              <div className="info-content">
                <h3>{t("Availability", "الإتاحة")}</h3>
                <p className="availability-status">
                  <span className="status-dot"></span>
                  {t("Open to opportunities", "متاح لفرص جديدة")}
                </p>
                <div className="social-links-inline">
                  <a href="https://github.com/Ahmed2398" target="_blank" rel="noreferrer" className="social-link-mini">
                    <AiFillGithub />
                  </a>
                  <a href="https://www.linkedin.com/in/ahmed-ashraf-a9b62918b/" target="_blank" rel="noreferrer" className="social-link-mini">
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </div>
          </Col>

          <Col md={6} className="contact-form">
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  name="name"
                  maxLength={80}
                  placeholder={t("Your Name", "اسمك")}
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control
                  type="email"
                  name="email"
                  maxLength={254}
                  placeholder={t("Your Email", "إيميلك")}
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  name="subject"
                  maxLength={150}
                  placeholder={t("Subject", "الموضوع")}
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control
                  as="textarea"
                  name="message"
                  maxLength={3000}
                  rows={5}
                  placeholder={t("Your Message", "رسالتك")}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </Form.Group>

              {/* Honeypot field for spam protection - must be hidden */}
              <input 
                type="checkbox" 
                name="botcheck" 
                style={{ display: 'none' }} 
                tabIndex="-1"
                autoComplete="off"
              />

              <Button 
                variant="primary" 
                type="submit" 
                className="submit-btn-modern"
                disabled={isSubmitting}
              >
                <span>{isSubmitting ? t("Sending...", "بيتبعت...") : t("Send Message", "ابعت الرسالة")}</span>
                {!isSubmitting && <BsArrowRight className="btn-arrow" />}
              </Button>

              {status && (
                <div className={`status-message ${status.includes('✓') ? 'success' : 'error'}`}>
                  {status}
                </div>
              )}
            </Form>
          </Col>
        </Row>

      </Container>
    </Container>
  );
}

export default ContactForm;
