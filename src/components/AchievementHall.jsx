import { achievements } from "../data/achievements";
import "./AchievementHall.css";

export default function AchievementHall({ onClose }) {
  return (
    <div className="achievement-overlay" role="dialog" aria-modal="true" aria-label="Achievement Hall">
      <section className="achievement-hall">
        <header className="achievement-hall-header">
          <div>
            <p className="achievement-hall-status">✦ HALL OF MILESTONES • OPEN</p>
            <h1>ACHIEVEMENT HALL</h1>
            <p>Recognition • Leadership • Community • Research</p>
          </div>
          <button onClick={onClose} aria-label="Close Achievement Hall">×</button>
        </header>
        <div className="achievement-hall-line" />
        <div className="trophy-grid">
          {achievements.map((item, index) => (
            <article className="trophy-card" key={item.title}>
              <div className="trophy-number">MILESTONE {String(index + 1).padStart(2, "0")}</div>
              <div className="trophy-icon" aria-hidden="true">{item.icon}</div>
              <div>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                {item.link && <a href={item.link} target="_blank" rel="noreferrer">{item.linkLabel}</a>}
              </div>
            </article>
          ))}
        </div>
        <footer>ACHIEVEMENT ARCHIVE • SHAMAIL RASHA</footer>
      </section>
    </div>
  );
}
