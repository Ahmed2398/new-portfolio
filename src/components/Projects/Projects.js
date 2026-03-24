import React, { useState, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { projectsData } from "./ProjectsData";

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter projects based on selected category
  const filteredProjects = useMemo(() => {
    return selectedCategory === "All" 
      ? projectsData 
      : projectsData.filter(project => project.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
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
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
