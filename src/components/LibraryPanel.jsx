import { libraryData } from "../data/library";
import "./LibraryPanel.css";

function LibraryPanel({ onClose }) {
  return (
    <div className="library-overlay">
      <div className="library-screen">

        <div className="library-header">
          <div>
            <p className="library-status">
              ● KNOWLEDGE ARCHIVE ONLINE
            </p>

            <h1>THE LIBRARY</h1>

            <p className="library-subtitle">
              Education • Skills • Certifications • Achievements
            </p>
          </div>

          <button
            className="library-close"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        <div className="library-divider"></div>

        {/* EDUCATION */}

        <section className="library-section">

          <p className="library-label">
            EDUCATION
          </p>

          <div className="education-card">

            <div className="education-icon">
              🎓
            </div>

            <div className="education-content">

              <p className="education-period">
                {libraryData.education.year}
              </p>

              <h2>
                {libraryData.education.degree}
              </h2>

              <h3>
                {libraryData.education.institution}
              </h3>

              <p>
                {libraryData.education.university}
              </p>

              <p>
                📍 {libraryData.education.location}
              </p>

              <div className="cgpa-badge">
                CGPA&nbsp;&nbsp;
                {libraryData.education.cgpa}
              </div>

            </div>

          </div>

        </section>

        {/* SKILLS */}

        <section className="library-section">

          <p className="library-label">
            SKILL ARCHIVE
          </p>

          <div className="skills-grid">

            <SkillGroup
              title="PROGRAMMING"
              skills={libraryData.skills.programming}
            />

            <SkillGroup
              title="FRONTEND"
              skills={libraryData.skills.frontend}
            />

            <SkillGroup
              title="BACKEND"
              skills={libraryData.skills.backend}
            />

            <SkillGroup
              title="DATABASE"
              skills={libraryData.skills.database}
            />

            <SkillGroup
              title="OTHER"
              skills={libraryData.skills.other}
            />

          </div>

        </section>

        {/* CERTIFICATIONS */}

        <section className="library-section">

          <p className="library-label">
            CERTIFICATION ARCHIVE
          </p>

          <div className="certificate-grid">

            {libraryData.certifications.map(
              (certificate, index) => (
                <div
                  className="certificate-card"
                  key={`${certificate.name}-${index}`}
                >

                  <div className="certificate-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div>
                    <h3>
                      {certificate.name}
                    </h3>

                    <p>
                      {certificate.issuer}
                    </p>

                    <span>
                      {certificate.year}
                    </span>
                  </div>

                </div>
              )
            )}

          </div>

        </section>

        {/* ACHIEVEMENTS */}

        <section className="library-section">

          <p className="library-label">
            ACHIEVEMENT ARCHIVE
          </p>

          <div className="achievement-list">

            {libraryData.achievements.map(
              (achievement, index) => (
                <div
                  className="achievement-item"
                  key={`${achievement}-${index}`}
                >

                  <span className="achievement-icon">
                    ◈
                  </span>

                  <span>
                    {achievement}
                  </span>

                </div>
              )
            )}

          </div>

        </section>

        <div className="library-footer">
          KNOWLEDGE ARCHIVE • SHAMAIL RASHA
        </div>

      </div>
    </div>
  );
}

function SkillGroup({ title, skills }) {
  return (
    <div className="skill-group">

      <p>
        {title}
      </p>

      <div className="skill-list">

        {skills.map((skill) => (
          <span key={skill}>
            {skill}
          </span>
        ))}

      </div>

    </div>
  );
}

export default LibraryPanel;