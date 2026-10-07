import { profile } from "../data/profile";

function Icon({ type }) {
  const common = {
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };

  const icons = {
    map: <svg {...common}><path d="M3 6.5 8 4l8 3 5-2.5v13L16 20l-8-3-5 2.5z"/><path d="M8 4v13M16 7v13"/></svg>,
    projects: <svg {...common}><path d="M3 7h7l2 2h9v10H3z"/><path d="M3 7V5h7l2 2"/></svg>,
    github: <svg {...common}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.5 5.5 0 0 0 19.3 4a5.1 5.1 0 0 0-.1-3.5S18 0 15 2a13.4 13.4 0 0 0-7 0C5 .1 3.8.5 3.8.5A5.1 5.1 0 0 0 3.7 4a5.5 5.5 0 0 0-1.5 3.8c0 5.4 3.5 6.6 6.8 7A4.8 4.8 0 0 0 8 18v4"/><path d="M8 19c-3 .9-3-1.5-4-2"/></svg>,
    linkedin: <svg {...common}><rect x="3" y="9" width="4" height="11"/><path d="M5 4.5v.01"/><path d="M11 20V9h4v2c1-2 6-3 6 3v6h-4v-5c0-3-2-3-2-3-2 0-2 2-2 3v5z"/></svg>,
    leetcode: <svg {...common}><path d="m13 4-6 6a4 4 0 0 0 0 6l3 3a4 4 0 0 0 6 0l2-2"/><path d="m9 8 4-4"/><path d="M9 14h10"/></svg>,
    email: <svg {...common}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>,
    resume: <svg {...common}><path d="M6 2h9l4 4v16H6z"/><path d="M14 2v5h5"/><path d="M9 12h6M9 16h6"/></svg>,
  };

  return icons[type] || null;
}

export default function QuickDock({ onQuickView, onProjects }) {
  const items = [
    { label: "Fast Travel", icon: "map", action: onQuickView },
    { label: "Projects", icon: "projects", action: onProjects },
    { label: "GitHub", icon: "github", href: profile.github },
    { label: "LinkedIn", icon: "linkedin", href: profile.linkedin },
    { label: "LeetCode", icon: "leetcode", href: profile.leetcode },
    { label: "Email", icon: "email", href: `mailto:${profile.email}` },
    ...(profile.resume ? [{ label: "Resume", icon: "resume", href: profile.resume }] : []),
  ];

  return (
    <nav className="quick-dock" aria-label="Quick portfolio navigation">
      {items.map(({ label, icon, href, action }) => {
        if (href) {
          const isEmail = href.startsWith("mailto:");
          return (
            <a key={label} className="dock-button" href={href} target={isEmail ? undefined : "_blank"} rel={isEmail ? undefined : "noreferrer"} aria-label={label} title={label} data-tip={label}>
              <Icon type={icon} />
            </a>
          );
        }
        return (
          <button key={label} type="button" className="dock-button" onClick={action} aria-label={label} title={label} data-tip={label}>
            <Icon type={icon} />
          </button>
        );
      })}
    </nav>
  );
}
