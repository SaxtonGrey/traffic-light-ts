import { useState } from "react";
import "./index.css";

const lightColors = ["red", "green", "yellow"];

export const FunctionalTrafficLight = () => {
  const [lightIndex, setLightIndex] = useState(0);
  const currentColor = lightColors[lightIndex];

  const handleLightClick = () => {
    setLightIndex((prevIndex) => (prevIndex + 1) % lightColors.length);
  };

  return (
    <div className="traffic-light-box">
      <h2>Functional Traffic Light</h2>
      <div className="traffic-light">
        <div
          className={`circle ${currentColor === "red" ? "red" : "black"}`}
        ></div>
        <div
          className={`circle  ${
            currentColor === "yellow" ? "yellow" : "black"
          }`}
        ></div>
        <div
          className={`circle  ${currentColor === "green" ? "green" : "black"}`}
        ></div>
      </div>
      <button className="next-state-button" onClick={handleLightClick}>
        Next State
      </button>
    </div>
  );
};
