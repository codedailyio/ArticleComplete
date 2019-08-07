import React, { useState, useEffect } from "react";
import "./app.css";
import { CheckMark, Close } from "./icons";

function App() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setProgress(window.scrollY / (3000 - window.innerHeight));
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [progress]);

  const position = Math.max(1 - progress, 0);
  const complete = position === 0;
  const notMoved = position === 1;

  return (
    <div
      className="App"
      style={{
        height: "3000px",
        background: "linear-gradient(to bottom, #1e5799 0%,#7db9e8 100%)",
      }}
    >
      <div
        style={{
          position: "fixed",
          top: "30px",
          right: "30px",
        }}
      >
        <div
          style={{
            backgroundColor: complete ? "tomato" : "#FFF",
            position: "relative",
            width: "100px",
            height: "100px",
            borderRadius: "50px",
            transition: "all .3s ease",
          }}
        >
          {complete ? <CheckMark /> : <Close />}
          {!notMoved && (
            <svg
              viewBox="0 0 50 50"
              width="100px"
              height="100px"
              style={{
                position: "absolute",
                left: 0,
                top: 0,
              }}
            >
              <circle
                cx={25}
                cy={25}
                r={22}
                stroke="tomato"
                fill="transparent"
                strokeWidth="5"
                style={{ strokeDasharray: "137.4", strokeDashoffset: 137.4 * position }}
              />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
