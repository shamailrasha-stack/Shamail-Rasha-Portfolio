import { useEffect, useState } from "react";
import "./App.css";
import Game from "./game/Game";
import ProjectModal from "./components/ProjectModal";
import AIObservatory from "./components/AIObservatory";
import ExperiencePanel from "./components/ExperiencePanel";
import LibraryPanel from "./components/LibraryPanel";
import QuickView from "./components/QuickView";
import QuickDock from "./components/QuickDock";
import DeveloperCore from "./components/DeveloperCore";
import AchievementHall from "./components/AchievementHall";

function App() {
  const [started, setStarted] = useState(false);
  const [quickView, setQuickView] = useState(false);
  const [panel, setPanel] = useState(null);

  const openPanel = (name) => { setQuickView(false); setPanel(name); };
  const closePanel = () => setPanel(null);

  useEffect(() => {
    const handlers = {
      "portfolio:openProjectLab": () => openPanel("projects"),
      "portfolio:openAIObservatory": () => openPanel("ai"),
      "portfolio:openExperience": () => openPanel("experience"),
      "portfolio:openLibrary": () => openPanel("library"),
      "portfolio:openAchievementHall": () => openPanel("achievements"),
      "portfolio:openDeveloperCore": () => openPanel("core"),
    };
    Object.entries(handlers).forEach(([event, fn]) => window.addEventListener(event, fn));
    return () => Object.entries(handlers).forEach(([event, fn]) => window.removeEventListener(event, fn));
  }, []);

  useEffect(() => {
    const esc = (e) => {
      if (e.key === "Escape") {
        if (panel) closePanel();
        else if (quickView) setQuickView(false);
      }
    };
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [panel, quickView]);

  const enter = (quick = false) => { setStarted(true); setQuickView(quick); };

  if (!started) return (
    <main className="game-start">
      <div className="game-content">
        <p className="eyebrow">A DEVELOPER PORTFOLIO ADVENTURE</p>
        <h1>SHAMAIL RASHA</h1>
        <h2>THE DEVELOPER QUEST</h2>
        <p className="intro">Explore my world, discover my projects, and uncover my journey from electronics to software development.</p>
        <div className="start-actions">
          <button className="start-button primary" onClick={() => enter(false)}>▶ START ADVENTURE <small>Explore the interactive world</small></button>
          <button className="start-button secondary" onClick={() => enter(true)}>⚡ QUICK VIEW <small>Jump straight to my work</small></button>
        </div>
        <p className="controls">WASD / ARROW KEYS · MOVE &nbsp; | &nbsp; E · INTERACT &nbsp; | &nbsp; ESC · CLOSE</p>
      </div>
    </main>
  );

  return <div className="portfolio-world">
    <Game />
    <QuickDock onQuickView={() => setQuickView(true)} onProjects={() => openPanel("projects")} />
    {quickView && <QuickView onClose={() => setQuickView(false)} onOpen={openPanel}/>} 
    {panel === "projects" && <ProjectModal onClose={closePanel}/>} 
    {panel === "ai" && <AIObservatory onClose={closePanel}/>} 
    {panel === "experience" && <ExperiencePanel onClose={closePanel}/>} 
    {panel === "library" && <LibraryPanel onClose={closePanel}/>} 
    {panel === "achievements" && <AchievementHall onClose={closePanel}/>} 
    {panel === "core" && <DeveloperCore onClose={closePanel} onOpen={openPanel}/>} 
  </div>;
}
export default App;
