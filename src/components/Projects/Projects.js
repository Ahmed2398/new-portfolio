import React, { useState, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import ProjectModal from "./ProjectModal";
import Particle from "../Particle";
import { projectsData } from "./ProjectsData";

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [modalShow, setModalShow] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Filter projects based on selected category
  const filteredProjects = useMemo(() => {
    return selectedCategory === "All" 
      ? projectsData 
      : projectsData.filter(project => project.category === selectedCategory);
  }, [selectedCategory]);

  // Handle opening modal with project details
  const handleReadMore = (project) => {
    setSelectedProject(project);
    setModalShow(true);
  };

  // Handle closing modal
  const handleCloseModal = () => {
    setModalShow(false);
    setSelectedProject(null);
  };

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container fluid>
        
        {/* Hire Me Section - Redesigned */}
        <div className="hire-me-redesigned">
          <div className="hire-me-header">
            <div className="hire-me-badge">
              <span className="badge-icon">🚀</span>
              <span className="badge-text">Available for Projects</span>
            </div>
            <h2 className="hire-me-title">
              Building <span className="purple">Scalable Solutions</span> for Your Business
            </h2>
            <p className="hire-me-subtitle">
              Full-Stack Engineer | 4+ Years | 20+ Production Systems
            </p>
          </div>

          <div className="hire-me-grid">
            <div className="hire-me-card expertise-card">
              <div className="card-icon">⚡</div>
              <h3>High-Performance Engineering</h3>
              <p>Building fast, scalable applications with optimized architecture and real-time capabilities</p>
            </div>

            <div className="hire-me-card stack-card">
              <div className="card-icon">🛠️</div>
              <h3>Full-Stack Expertise</h3>
              <p>React, Vue, Node.js, Laravel, WordPress - End-to-end development from database to UI</p>
            </div>

            <div className="hire-me-card impact-card">
              <div className="card-icon">💎</div>
              <h3>Business-Driven Results</h3>
              <p>Focused on delivering solutions that drive growth, efficiency, and measurable business impact</p>
            </div>
          </div>

          <div className="hire-me-cta">
            <div className="cta-stats">
              <div className="stat-item">
                <span className="stat-number">20+</span>
                <span className="stat-label">Production Systems</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">4+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">15+</span>
                <span className="stat-label">Technologies</span>
              </div>
            </div>
            
            <div className="cta-buttons">
              <a href="/contact" className="cta-btn primary">
                <span className="btn-icon">🚀</span>
                Start Your Project
              </a>
              <a href="/contact" className="cta-btn secondary">
                <span className="btn-icon">💬</span>
                Let's Talk
              </a>
            </div>
          </div>
        </div>

        <h1 className="project-heading">
          My Professional <strong className="purple">Portfolio</strong>
        </h1>
        <p style={{ color: "white" }}>
          Explore a selection of my most impactful and innovative projects.
        </p>

        {/* Category Filters */}
        <div className="modern-filters-container">
          <div className="filter-group">
            <div className="filter-label">
              <span className="filter-icon">📁</span>
              <h3>Category</h3>
            </div>
            <div className="filter-buttons">
              {["All", "Full Stack", "Frontend", "WordPress"].map((category) => (
                <button
                  key={category}
                  className={`modern-filter-btn ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="results-count">
            <span>Showing <strong>{filteredProjects.length}</strong> {filteredProjects.length === 1 ? 'project' : 'projects'}</span>
          </div>
        </div>

        {/* Projects Grid */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {filteredProjects.map((project) => (
            <Col key={project.id} md={4} className="project-card">
              <ProjectCard
                imgPath={project.imgPath}
                isBlog={false}
                title={project.title}
                description={project.description}
                techStack={project.techStack}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
                onReadMore={() => handleReadMore(project)}
              />
            </Col>
          ))}
        </Row>

        {/* Project Modal */}
        {selectedProject && (
          <ProjectModal
            show={modalShow}
            handleClose={handleCloseModal}
            title={selectedProject.title}
            fullDescription={selectedProject.fullDescription}
            techStack={selectedProject.techStack}
          />
        )}
      </Container>
    </Container>
  );
}

export default Projects;
