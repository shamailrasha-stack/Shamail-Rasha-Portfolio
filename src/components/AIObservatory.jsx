import { useState } from "react";
import { aiProjects } from "../data/aiProjects";
import "./AIObservatory.css";

function AIObservatory({ onClose }) {
  const [selectedProject, setSelectedProject] =
    useState(null);

  return (
    <div className="observatory-overlay">
      <div className="observatory-screen">

        <div className="observatory-header">
          <div>
            <p className="observatory-status">
              ● OBSERVATORY ONLINE
            </p>

            <h1>AI OBSERVATORY</h1>

            <p className="observatory-subtitle">
              Artificial Intelligence • IoT • Embedded Systems
            </p>
          </div>

          <button
            className="observatory-close"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        <div className="observatory-divider"></div>

        {!selectedProject ? (
          <>
            <div className="observatory-intro">
              <div className="observatory-orbit">
                <div className="orbit-ring ring-one"></div>
                <div className="orbit-ring ring-two"></div>
                <div className="orbit-core">
                  AI
                </div>
              </div>

              <div className="observatory-text">
                <p className="section-label">
                  DISCOVERIES
                </p>

                <h2>
                  Welcome to the Observatory
                </h2>

                <p>
                  Explore my work combining artificial
                  intelligence, machine learning, IoT,
                  and embedded systems.
                </p>
              </div>
            </div>

            <div className="ai-project-grid">
              {aiProjects.map((project) => (
                <button
                  key={project.id}
                  className="ai-project-card"
                  onClick={() =>
                    setSelectedProject(project)
                  }
                >
                  <div className="ai-card-icon">
                    {project.id === "indoor-air"
                      ? "🌬️"
                      : "🦯"}
                  </div>

                  <div className="ai-card-content">
                    <p className="ai-card-type">
                      {project.type}
                    </p>

                    <h3>
                      {project.name}
                    </h3>

                    <p>
                      {project.description}
                    </p>

                    <span>
                      EXAMINE DISCOVERY →
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </>
        ) : (
          <div className="ai-detail">

            <button
              className="back-button"
              onClick={() =>
                setSelectedProject(null)
              }
            >
              ← BACK TO DISCOVERIES
            </button>

            <div className="ai-detail-header">

              <div className="detail-icon">
                {selectedProject.id === "indoor-air"
                  ? "🌬️"
                  : "🦯"}
              </div>

              <div>
                <p className="observatory-status">
                  DISCOVERY FOUND
                </p>

                <h2>
                  {selectedProject.name}
                </h2>

                <p>
                  {selectedProject.type}
                </p>
              </div>

            </div>

            <div className="ai-detail-grid">

              <div className="detail-panel">
                <p className="section-label">
                  OVERVIEW
                </p>

                <p>
                  {selectedProject.description}
                </p>
              </div>

              <div className="detail-panel">
                <p className="section-label">
                  FEATURES
                </p>

                <ul>
                  {selectedProject.features.map(
                    (feature) => (
                      <li key={feature}>
                        {feature}
                      </li>
                    )
                  )}
                </ul>
              </div>

              <div className="detail-panel">
                <p className="section-label">
                  TECHNOLOGY
                </p>

                <div className="tech-list">
                  {selectedProject.tech.map(
                    (technology) => (
                      <span key={technology}>
                        {technology}
                      </span>
                    )
                  )}
                </div>
              </div>

              <div className="detail-panel">
                <p className="section-label">
                  RESEARCH
                </p>

                <p>
                  {selectedProject.research}
                </p>

                {selectedProject.doi && (
                  <p className="doi">
                    DOI:{" "}
                    {selectedProject.doi}
                  </p>
                )}
              </div>

            </div>
          </div>
        )}

        <div className="observatory-footer">
          AI RESEARCH ARCHIVE • SHAMAIL RASHA
        </div>

      </div>
    </div>
  );
}

export default AIObservatory;