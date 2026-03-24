import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ContactForm from "./ContactForm";
import Particle from "../Particle";

function Contact() {
  return (
    <Container fluid className="contact-page">
      <Particle />
      <Container>
        <Row className="contact-intro-section">
          <Col md={12} className="contact-intro">
            <h1 className="project-heading">
              Let's Work <strong className="purple">Together</strong>
            </h1>
            <p className="contact-intro-text">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. 
              Whether you need a <strong>Full Stack Developer</strong> for your next big idea, or just want to say hello, 
              feel free to reach out!
            </p>
            <p className="contact-intro-subtext">
              I specialize in building <strong className="purple">scalable web applications</strong>, 
              <strong className="purple"> SaaS platforms</strong>, and 
              <strong className="purple"> FinTech solutions</strong>. 
              Let's turn your ideas into reality.
            </p>
          </Col>
        </Row>

        <ContactForm />
      </Container>
    </Container>
  );
}

export default Contact;
