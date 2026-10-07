import { profile } from "../data/profile";

export default function DeveloperCore({ onClose, onOpen }) {
  return (
    <div className="core-overlay" role="dialog" aria-modal="true" aria-label="Developer Core">
      <section className="core-panel">
        <button className="core-close" onClick={onClose} aria-label="Close Developer Core">×</button>
        <p className="core-kicker">DEVELOPER CORE · ONLINE</p>
        <h2>SHAMAIL RASHA</h2>
        <p className="core-role">Software Developer · Java Full Stack · AI & IoT</p>
        <p className="core-copy">ECE graduate building across software, full-stack systems and intelligent IoT — with hands-on work in Java, React, Spring Boot, MySQL, Python and machine learning.</p>
        <div className="core-tags" aria-label="Core technologies">
          {['Java','React','Spring Boot','MySQL','Python','AI / IoT','REST APIs'].map(x => <span key={x}>{x}</span>)}
        </div>
        <div className="core-stats">
          <div><strong>8.7</strong><span>CGPA</span></div>
          <div><strong>80+</strong><span>LeetCode</span></div>
          <div><strong>2025</strong><span>Published Research</span></div>
          <div><strong>5</strong><span>World Districts</span></div>
        </div>
        <div className="core-actions">
          <button onClick={() => onOpen('projects')}>VIEW PROJECTS</button>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LINKEDIN</a>
          <a href={profile.github} target="_blank" rel="noreferrer">GITHUB</a>
          <a href={`mailto:${profile.email}`}>CONTACT</a>
          {profile.resume && <a href={profile.resume} target="_blank" rel="noreferrer">RESUME</a>}
        </div>
        <p className="core-foot">You reached the center by exploring the full portfolio. Fast Travel remains available anytime.</p>
      </section>
    </div>
  );
}
