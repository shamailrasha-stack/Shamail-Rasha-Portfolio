import { motion } from "framer-motion";
import { FolderKanban, BrainCircuit, BriefcaseBusiness, GraduationCap, Trophy, X } from "lucide-react";

const sections = [
  { key: "projects", title: "PROJECT LAB", note: "Full-stack & Java projects", Icon: FolderKanban },
  { key: "ai", title: "AI OBSERVATORY", note: "AI, ML, IoT & research", Icon: BrainCircuit },
  { key: "experience", title: "EXPERIENCE", note: "Internship & developer journey", Icon: BriefcaseBusiness },
  { key: "library", title: "LIBRARY", note: "Skills, education & certifications", Icon: GraduationCap },
  { key: "achievements", title: "ACHIEVEMENT HALL", note: "Awards, leadership & research", Icon: Trophy },
  { key: "core", title: "DEVELOPER CORE", note: "30-second profile & contact", Icon: BrainCircuit },
];

export default function QuickView({ onClose, onOpen }) {
  return (
    <div className="quick-view-overlay" role="dialog" aria-modal="true" aria-label="Quick portfolio view">
      <motion.div className="quick-view-panel" initial={{ opacity: 0, scale: .96, y: 16 }} animate={{ opacity: 1, scale: 1, y: 0 }}>
        <div className="quick-view-head">
          <div><span>FAST TRAVEL</span><h2>Choose a destination</h2><p>No walking required. Jump straight to what you want to see.</p></div>
          <button className="icon-button" onClick={onClose} aria-label="Close quick view"><X size={19}/></button>
        </div>
        <div className="quick-view-grid">
          {sections.map(({ key, title, note, Icon }) => (
            <button key={key} onClick={() => onOpen(key)} className="quick-view-card">
              <Icon size={25} aria-hidden="true"/><span><strong>{title}</strong><small>{note}</small></span><b>→</b>
            </button>
          ))}
        </div>
        <p className="quick-view-foot">TIP · You can return to the world and explore these locations physically at any time.</p>
      </motion.div>
    </div>
  );
}
