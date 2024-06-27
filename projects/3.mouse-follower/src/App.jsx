import { useEffect, useState } from "react";
import "./App.css";

function MouseFollower() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [enabled, setEnabled] = useState(false);

  // Desactivar el cursor
  useEffect(() => {
    if (enabled) {
      document.body.style.cursor = "none";
    }

    return () => {
      document.body.style.cursor = "auto";
    };
  }, [enabled]);

  // Seguimiento del mouse
  useEffect(() => {
    function handleMouseMove(event) {
      console.log("mouse move", { x: event.clientX, y: event.clientY });
      setPosition({ x: event.clientX, y: event.clientY });
    }

    if (enabled) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [enabled]);

  return (
    <div>
      {enabled && (
        <div
          style={{
            position: "absolute",
            backgroundColor: "rgba(139, 216, 255, 0.5)",
            border: "0px solid #fff",
            borderRadius: "50%",
            opacity: 0.8,
            pointerEvents: "none",
            left: -25,
            top: -25,
            width: 50,
            height: 50,
            transform: `translate(${position.x}px, ${position.y}px)`,
          }}
        ></div>
      )}
      <h1>Mouse Follower</h1>
      <p>
        X: {position.x} Y: {position.y}
      </p>
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? "Desactivar" : "Activar"}
      </button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <MouseFollower />
    </div>
  );
}

export default App;
