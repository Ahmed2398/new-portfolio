import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { projectsData } from "./ProjectsData";

function Projects() {
  const [selectedFilter, setSelectedFilter] = useState("All");

  // Define filter categories
  const filters = ["All", "React.js", "Vue.js", "Next.js", "React Native", "Node.js", "Laravel", "FinTech", "Healthcare", "E-commerce"];

  // Filter projects based on selected filter
  const filteredProjects = selectedFilter === "All" 
    ? projectsData 
    : projectsData.filter(project => 
        project.techStack.includes(selectedFilter) || project.category === selectedFilter
      );

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

        {/* Filter Buttons */}
        <div className="project-filters">
          {filters.map((filter, index) => (
            <button
              key={index}
              className={`filter-btn ${selectedFilter === filter ? 'active' : ''}`}
              onClick={() => setSelectedFilter(filter)}
            >
              {filter}
            </button>
          ))}
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
