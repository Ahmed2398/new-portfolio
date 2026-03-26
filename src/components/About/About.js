import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Aboutcard from "./AboutCard";
import AnimatedIllustration from "./AnimatedIllustration";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container fluid>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "10px",
              paddingBottom: "20px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "15px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "40px", paddingBottom: "20px" }}
            className="about-img"
          >
            <AnimatedIllustration />
          </Col>
        </Row>

        <Github />
      </Container>
    </Container>
  );
}

export default About;
