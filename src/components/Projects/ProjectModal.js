import React from "react";
import { Modal, Button } from "react-bootstrap";
import { FaTimes } from "react-icons/fa";

function ProjectModal({ show, handleClose, title, fullDescription, techStack }) {
  return (
    <Modal 
      show={show} 
      onHide={handleClose} 
      centered
      className="project-modal"
      size="lg"
    >
      <Modal.Header className="project-modal-header">
        <Modal.Title className="project-modal-title">{title}</Modal.Title>
        <Button 
          variant="link" 
          onClick={handleClose} 
          className="project-modal-close"
        >
          <FaTimes />
        </Button>
      </Modal.Header>
      <Modal.Body className="project-modal-body">
        {/* Technology Badges */}
        {techStack && techStack.length > 0 && (
          <div className="tech-badges mb-3">
            {techStack.map((tech, index) => (
              <span key={index} className="tech-badge">{tech}</span>
            ))}
          </div>
        )}
        
        {/* Full Description */}
        <div className="project-full-description">
          {fullDescription ? (
            fullDescription.split('\n').map((paragraph, index) => (
              <p key={index} className="description-paragraph">
                {paragraph}
              </p>
            ))
          ) : (
            <p className="description-paragraph">No detailed description available.</p>
          )}
        </div>
      </Modal.Body>
      <Modal.Footer className="project-modal-footer">
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ProjectModal;
