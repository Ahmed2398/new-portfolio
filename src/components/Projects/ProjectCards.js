import React from "react";
import Card from "react-bootstrap/Card";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <div className="project-img-container">
        <Card.Img variant="top" src={props.imgPath} alt="card-img" className="project-img" />
        <div className="project-img-overlay"></div>
      </div>
      <Card.Body className="project-card-body">
        {/* Technology Badges */}
        {props.techStack && props.techStack.length > 0 && (
          <div className="tech-badges">
            {props.techStack.map((tech, index) => (
              <span key={index} className="tech-badge">{tech}</span>
            ))}
          </div>
        )}

        <Card.Title className="project-title">{props.title}</Card.Title>

        <Card.Text className="project-description">
          {props.description}
        </Card.Text>

        <div className="project-btns">
          {/* Demo Button - Primary */}
          {!props.isBlog && props.demoLink && (
            <a
              href={props.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-demo"
            >
              <CgWebsite className="btn-icon" />
              <span>Live</span>
            </a>
          )}

          {/* GitHub Button - Secondary */}
          {props.ghLink && (
            <a
              href={props.ghLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-github"
            >
              <BsGithub className="btn-icon" />
              <span>{props.isBlog ? "Blog" : "GitHub"}</span>
            </a>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
