import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiOutlineDownload,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import pdf from "../Assets/Ahmed Ashraf_fullstack.pdf";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <h1 className="logo-text-animated">
            <span className="logo-tag">&lt;</span>
            <span className="logo-name">Ahmed</span>
            <span className="logo-subtitle"> Ashraf</span>
            <span className="logo-tag">/&gt;</span>
          </h1>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/contact"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> Contact Me
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="download-cv-btn">
              <Button
                variant="primary"
                href={pdf}
                download="Ahmed_Ashraf_CV.pdf"
                className="cv-download-button"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineDownload style={{ marginBottom: "2px" }} />
                &nbsp;Download CV
              </Button>
            </Nav.Item>

            {/*<Nav.Item>*/}
            {/*  <Nav.Link*/}
            {/*    href="https://soumyajitblogs.vercel.app/"*/}
            {/*    target="_blank"*/}
            {/*    rel="noreferrer"*/}
            {/*  >*/}
            {/*    <ImBlog style={{ marginBottom: "2px" }} /> Blogs*/}
            {/*  </Nav.Link>*/}
            {/*</Nav.Item>*/}

            {/*<Nav.Item className="fork-btn">*/}
            {/*  <Button*/}
            {/*    href="https://github.com/soumyajit4419/Portfolio"*/}
            {/*    target="_blank"*/}
            {/*    className="fork-btn-inner"*/}
            {/*  >*/}
            {/*    <CgGitFork style={{ fontSize: "1.2em" }} />{" "}*/}
            {/*    <AiFillStar style={{ fontSize: "1.1em" }} />*/}
            {/*  </Button>*/}
            {/*</Nav.Item>*/}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
