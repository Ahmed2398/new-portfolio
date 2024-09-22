import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a passionate and dedicated software engineer with extensive experience in both frontend and backend
              development. My expertise spans across various technologies and platforms, allowing me to build robust,
              dynamic, and visually appealing websites and applications.
              <br/>
              <br/>
              As a frontend developer, I specialize in creating engaging, responsive user interfaces using modern
              frameworks and libraries such as <b className="purple"> React, Angular, and Vue, along with jQuery and
              Bootstrap.</b> My proficiency in <b className="purple"> HTML, CSS, and JavaScript</b> ensures that I can
              bring any design to life with
              precision and creativity.

              On the backend, I am skilled in server-side languages and frameworks such as <b
                className="purple"> Node.js, Express.js,PHP, Laravel and Cake Php.</b>
              I have a strong command of managing databases like <b className="purple"> MySQL, MongoDB, and
              PostgreSQL,</b>
              and I excel at creating
              and consuming<b className="purple"> RESTful APIs</b> to ensure seamless communication between the frontend
              and
              backend of
              applications.

              In addition to my full-stack capabilities,
              <br/>
              <br/>
              I am also an experienced WordPress developer. I have a solid
              foundation in creating functional and visually appealing websites using WordPress. My experience includes
              customizing themes, developing plugins, and optimizing websites for performance and SEO, enabling me to
              deliver tailored solutions that meet clients' needs.

              My commitment to continuous learning and staying updated with the latest industry trends ensures that I
              can always provide the best solutions and maintain a high standard of quality in my work.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Ahmed2398"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ahmed-ashraf-a9b62918b/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
