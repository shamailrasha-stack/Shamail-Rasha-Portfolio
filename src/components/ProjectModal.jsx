import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data/projects";
import "./ProjectModal.css";

function ProjectModal({ onClose }) {
  const [selectedProject, setSelectedProject] =
    useState(null);

  return (
    <div className="project-overlay">

      {/* ============================
          LAB WINDOW
      ============================ */}

      <motion.div
        className="project-modal"
        initial={{
          opacity: 0,
          scale: 0.8,
          y: 40,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        transition={{
          duration: 0.35,
          ease: "easeOut",
        }}
      >

        {/* ============================
            TOP BAR
        ============================ */}

        <div className="lab-topbar">

          <div className="lab-status">
            <span className="status-dot"></span>

            SYSTEM ONLINE
          </div>

          <div className="lab-id">
            LAB-001
          </div>

          <button
            className="close-project"
            onClick={onClose}
          >
            ✕
          </button>

        </div>

        <AnimatePresence mode="wait">

          {/* =================================
              PROJECT LIST
          ================================= */}

          {!selectedProject ? (

            <motion.div
              key="project-list"
              className="project-selection"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                x: -30,
              }}
            >

              <div className="lab-heading">

                <p className="lab-label">
                  PROJECT ARCHIVE
                </p>

                <h2>
                  Choose a project
                </h2>

                <p className="lab-description">
                  Explore the systems I've built
                  throughout my developer journey.
                </p>

              </div>

              <div className="project-grid">

                {projects.map(
                  (project, index) => (

                    <motion.button
                      key={project.id}
                      className="project-card"
                      onClick={() =>
                        setSelectedProject(
                          project
                        )
                      }
                      initial={{
                        opacity: 0,
                        y: 20,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay:
                          index * 0.08,
                      }}
                      whileHover={{
                        y: -8,
                        scale: 1.02,
                      }}
                      whileTap={{
                        scale: 0.98,
                      }}
                    >

                      {/* PROJECT ICON */}

                      <div className="project-icon">
                        ◈
                      </div>

                      <span className="project-type">
                        {project.type}
                      </span>

                      <h3>
                        {project.name}
                      </h3>

                      <p>
                        {project.description}
                      </p>

                      <span className="inspect">
                        OPEN FILE →
                      </span>

                    </motion.button>

                  )
                )}

              </div>

              <div className="lab-footer">
                <span>
                  PROJECTS DISCOVERED:{" "}
                  {projects.length}
                </span>

                <span>
                  SELECT A FILE TO CONTINUE
                </span>
              </div>

            </motion.div>

          ) : (

            /* =================================
               PROJECT DETAILS
            ================================= */

            <motion.div
              key="project-detail"
              className="project-detail"
              initial={{
                opacity: 0,
                x: 40,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: -40,
              }}
            >

              {/* BACK */}

              <button
                className="back-button"
                onClick={() =>
                  setSelectedProject(null)
                }
              >
                ← PROJECT ARCHIVE
              </button>

              {/* HEADER */}

              <div className="project-detail-header">

                <div className="project-detail-icon">
                  ◈
                </div>

                <div>

                  <p className="lab-label">
                    PROJECT FILE
                  </p>

                  <h2>
                    {selectedProject.name}
                  </h2>

                  <span className="project-type">
                    {selectedProject.type}
                  </span>

                </div>

              </div>

              {/* DESCRIPTION */}

              <div className="project-section">

                <h4>
                  ABOUT THE PROJECT
                </h4>

                <p className="project-detail-description">
                  {selectedProject.description}
                </p>

              </div>

              {/* FEATURES */}

              <div className="project-section">

                <h4>
                  SYSTEM FEATURES
                </h4>

                <ul className="feature-list">

                  {selectedProject.features.map(
                    (feature) => (

                      <li key={feature}>
                        {feature}
                      </li>

                    )
                  )}

                </ul>

              </div>

              {/* TECHNOLOGY */}

              <div className="project-section">

                <h4>
                  TECHNOLOGY STACK
                </h4>

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

              {/* BUILD STORY */}

              {selectedProject.whyBuilt && (
                <div className="project-section">
                  <h4>WHY I BUILT IT</h4>
                  <p className="project-detail-description">
                    {selectedProject.whyBuilt}
                  </p>
                </div>
              )}

              {selectedProject.architecture?.length > 0 && (
                <div className="project-section">
                  <h4>SYSTEM FLOW</h4>
                  <div className="tech-list">
                    {selectedProject.architecture.map((step, index) => (
                      <span key={step}>
                        {String(index + 1).padStart(2, "0")} · {step}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {selectedProject.learned && (
                <div className="project-section">
                  <h4>WHAT I LEARNED</h4>
                  <p className="project-detail-description">
                    {selectedProject.learned}
                  </p>
                </div>
              )}

              {/* LINKS */}

              <div className="project-links">

                {selectedProject.github && (

                  <a
                    href={
                      selectedProject.github
                    }
                    target="_blank"
                    rel="noreferrer"
                  >
                    ◈ VIEW GITHUB
                  </a>

                )}

                {selectedProject.live && (

                  <a
                    href={
                      selectedProject.live
                    }
                    target="_blank"
                    rel="noreferrer"
                  >
                    ↗ OPEN LIVE DEMO
                  </a>

                )}

              </div>

            </motion.div>

          )}

        </AnimatePresence>

      </motion.div>

    </div>
  );
}

export default ProjectModal;