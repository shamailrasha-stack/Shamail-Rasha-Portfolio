import { experienceData } from "../data/experience";
import "./ExperiencePanel.css";

function ExperiencePanel({ onClose }) {
  return (
    <div className="experience-overlay">
      <div className="experience-screen">

        <div className="experience-header">

          <div>
            <p className="experience-status">
              ● CAREER SYSTEM ONLINE
            </p>

            <h1>
              {experienceData.title}
            </h1>

            <p className="experience-intro">
              {experienceData.introduction}
            </p>
          </div>

          <button
            className="experience-close"
            onClick={onClose}
          >
            ✕
          </button>

        </div>

        <div className="experience-divider"></div>

        <div className="timeline">

          {experienceData.timeline.map(
            (item, index) => (
              <div
                className="timeline-item"
                key={item.id}
              >

                <div className="timeline-marker">
                  <span>
                    {String(index + 1).padStart(
                      2,
                      "0"
                    )}
                  </span>
                </div>

                <div className="timeline-content">

                  <p className="timeline-year">
                    {item.year}
                  </p>

                  <h2>
                    {item.title}
                  </h2>

                  <h3>
                    {item.organization}
                  </h3>

                  <p className="timeline-description">
                    {item.description}
                  </p>

                  <div className="experience-skills">
                    {item.skills.map(
                      (skill) => (
                        <span key={skill}>
                          {skill}
                        </span>
                      )
                    )}
                  </div>

                </div>

              </div>
            )
          )}

        </div>

        <div className="internship-section">

          <p className="section-label">
            INTERNSHIP PROJECT
          </p>

          <h2>
            {experienceData.internshipProject.name}
          </h2>

          <p>
            {experienceData.internshipProject.description}
          </p>

          <div className="experience-skills">
            {experienceData.internshipProject.technologies.map(
              (technology) => (
                <span key={technology}>
                  {technology}
                </span>
              )
            )}
          </div>

        </div>

        <div className="experience-footer">
          QUEST LOG • DEVELOPER JOURNEY • SHAMAIL RASHA
        </div>

      </div>
    </div>
  );
}

export default ExperiencePanel;