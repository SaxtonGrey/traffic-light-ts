import { Component } from "react";
import "./index.css";

const lightColors = ["red", "green", "yellow"];

class ClassTrafficLight extends Component {
  state = {
    lightIndex: 0,
  };

  handleLightClick = () => {
    this.setState((prevState) => ({
      lightIndex: (prevState.lightIndex + 1) % lightColors.length,
    }));
  };

  render() {
    const currentColor = lightColors[this.state.lightIndex];

    return (
      <div className="traffic-light-box">
        <h2>Class Traffic Light</h2>
        <div className="traffic-light">
          <div
            className={`circle ${currentColor === "red" ? "red" : "black"}`}
          ></div>
          <div
            className={`circle ${
              currentColor === "yellow" ? "yellow" : "black"
            }`}
          ></div>
          <div
            className={`circle ${currentColor === "green" ? "green" : "black"}`}
          ></div>
        </div>
        <button className="next-state-button" onClick={this.handleLightClick}>
          Next State
        </button>
      </div>
    );
  }
}

export default ClassTrafficLight;
