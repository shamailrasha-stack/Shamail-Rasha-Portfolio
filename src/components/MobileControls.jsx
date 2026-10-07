import { useEffect, useState } from "react";

const sendMove = (control, active) => {
  window.dispatchEvent(new CustomEvent("portfolio:mobileControl", {
    detail: { control, active },
  }));
};

function HoldButton({ control, label, className = "" }) {
  const stop = (event) => {
    event.preventDefault();
    sendMove(control, false);
  };

  const start = (event) => {
    event.preventDefault();
    sendMove(control, true);
  };

  return (
    <button
      type="button"
      className={`mobile-control-button ${className}`}
      aria-label={`Move ${control}`}
      onPointerDown={start}
      onPointerUp={stop}
      onPointerCancel={stop}
      onPointerLeave={stop}
      onContextMenu={(event) => event.preventDefault()}
    >
      {label}
    </button>
  );
}

export default function MobileControls() {
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(pointer: coarse), (max-width: 900px)");
    const sync = () => setIsTouch(query.matches);
    sync();
    query.addEventListener?.("change", sync);
    return () => query.removeEventListener?.("change", sync);
  }, []);

  useEffect(() => () => {
    ["up", "down", "left", "right"].forEach((control) => sendMove(control, false));
  }, []);

  if (!isTouch) return null;

  return (
    <div className="mobile-game-controls" aria-label="Touch game controls">
      <div className="mobile-dpad">
        <HoldButton control="up" label="▲" className="dpad-up" />
        <HoldButton control="left" label="◀" className="dpad-left" />
        <div className="dpad-center" aria-hidden="true">✦</div>
        <HoldButton control="right" label="▶" className="dpad-right" />
        <HoldButton control="down" label="▼" className="dpad-down" />
      </div>

      <button
        type="button"
        className="mobile-interact-button"
        onPointerDown={(event) => {
          event.preventDefault();
          window.dispatchEvent(new CustomEvent("portfolio:mobileInteract"));
        }}
      >
        <strong>E</strong>
        <span>INTERACT</span>
      </button>
    </div>
  );
}
