import React, { useState, useMemo } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsArrowRight, BsBoxArrowUpRight, BsSearch } from "react-icons/bs";
import ProjectCard from "./ProjectCards";
import ProjectModal from "./ProjectModal";
import ProjectImage from "./ProjectImage";
import Particle from "../Particle";
import { projectsData } from "./ProjectsData";
import "./Projects.css";

const ALL = "All";

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState(ALL);
  const [query, setQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);

  const featured = useMemo(() => projectsData.filter((p) => p.featured), []);

  const categories = useMemo(() => {
    const counts = projectsData.reduce((acc, p) => {
      acc[p.category] = (acc[p.category] || 0) + 1;
      return acc;
    }, {});
    return [{ name: ALL, count: projectsData.length }, ...Object.entries(counts).map(([name, count]) => ({ name, count }))];
  }, []);

  const filteredProjects = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projectsData.filter((project) => {
      const inCategory = selectedCategory === ALL || project.category === selectedCategory;
      const matchesQuery =
        !q ||
        project.title.toLowerCase().includes(q) ||
        project.techStack.some((tech) => tech.toLowerCase().includes(q));
      return inCategory && matchesQuery;
    });
  }, [selectedCategory, query]);

  const resetFilters = () => {
    setSelectedCategory(ALL);
    setQuery("");
  };

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container fluid className="pp">
        {/* Page header */}
        <header className="pp-header">
          <span className="pp-eyebrow">Selected work</span>
          <h1 className="pp-title">
            Products I've helped <span className="purple">ship</span>
          </h1>
          <p className="pp-subtitle">
            FinTech, RegTech, HR, healthcare and e-commerce platforms — from real-time trading dashboards to
            schema-driven builders and design systems.
          </p>
          <dl className="pp-stats">
            <div>
              <dt>{projectsData.length}</dt>
              <dd>Projects</dd>
            </div>
            <div>
              <dt>5+</dt>
              <dd>Years</dd>
            </div>
            <div>
              <dt>{categories.length - 1}</dt>
              <dd>Categories</dd>
            </div>
          </dl>
        </header>

        {/* Featured */}
        <section className="pp-featured" aria-labelledby="pp-featured-heading">
          <h2 id="pp-featured-heading" className="pp-section-title">
            Featured projects
          </h2>
          <div className="pp-featured-list">
            {featured.map((project, index) => (
              <article key={project.id} className={`pp-feature ${index % 2 ? "reverse" : ""}`}>
                <button
                  type="button"
                  className="pp-feature-media"
                  onClick={() => setSelectedProject(project)}
                  aria-label={`Open ${project.title} details`}
                >
                  <ProjectImage src={project.imgPath} title={project.title} />
                </button>
                <div className="pp-feature-body">
                  <span className="pp-eyebrow">
                    {String(index + 1).padStart(2, "0")} · {project.category}
                  </span>
                  <h3 className="pp-feature-title">{project.title}</h3>
                  {project.role && <p className="pp-role">{project.role}</p>}
                  <p className="pp-feature-desc">{project.description}</p>
                  {project.features && (
                    <ul className="pp-feature-highlights">
                      {project.features.slice(0, 4).map((feature) => (
                        <li key={feature.title}>{feature.title}</li>
                      ))}
                      {project.features.length > 4 && (
                        <li className="more">+{project.features.length - 4} more modules</li>
                      )}
                    </ul>
                  )}
                  <div className="pp-tags">
                    {project.techStack.slice(0, 5).map((tech) => (
                      <span key={tech} className="pp-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="pp-card-actions">
                    <button type="button" className="pp-primary-btn" onClick={() => setSelectedProject(project)}>
                      Read case study <BsArrowRight />
                    </button>
                    {project.demoLink && (
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="pp-live-btn">
                        Live site <BsBoxArrowUpRight />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* All projects */}
        <section className="pp-all" aria-labelledby="pp-all-heading">
          <div className="pp-all-head">
            <h2 id="pp-all-heading" className="pp-section-title">
              All projects
            </h2>
            <span className="pp-count">
              Showing <strong>{filteredProjects.length}</strong> of {projectsData.length}
            </span>
          </div>

          <div className="pp-toolbar">
            <div className="pp-filters" role="tablist" aria-label="Filter by category">
              {categories.map(({ name, count }) => (
                <button
                  key={name}
                  type="button"
                  role="tab"
                  aria-selected={selectedCategory === name}
                  className={`pp-filter ${selectedCategory === name ? "active" : ""}`}
                  onClick={() => setSelectedCategory(name)}
                >
                  {name}
                  <span className="pp-filter-count">{count}</span>
                </button>
              ))}
            </div>

            <label className="pp-search">
              <BsSearch aria-hidden="true" />
              <input
                type="search"
                placeholder="Search by name or tech…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label="Search projects"
              />
            </label>
          </div>

          {filteredProjects.length ? (
            <div className="pp-grid">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} onOpen={() => setSelectedProject(project)} />
              ))}
            </div>
          ) : (
            <div className="pp-empty">
              <p>No projects match “{query}”.</p>
              <button type="button" className="pp-link-btn" onClick={resetFilters}>
                Clear filters
              </button>
            </div>
          )}
        </section>

        {/* Call to action */}
        <section className="pp-cta">
          <div>
            <h2>Have a product that needs solid engineering?</h2>
            <p>I'm open to senior and lead software engineering roles and selected freelance projects.</p>
          </div>
          <div className="pp-cta-actions">
            <Link to="/contact" className="pp-primary-btn">
              Let's talk <BsArrowRight />
            </Link>
            <Link to="/resume" className="pp-live-btn">
              View resume
            </Link>
          </div>
        </section>

        <ProjectModal
          show={Boolean(selectedProject)}
          handleClose={() => setSelectedProject(null)}
          project={selectedProject}
        />
      </Container>
    </Container>
  );
}

export default Projects;
