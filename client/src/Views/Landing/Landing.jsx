import React from "react";
import styles from "./Landing.css";
import { Link } from "react-router-dom/cjs/react-router-dom";

const Landing = () => {
  return (
    <div className="landing-container">
      <div className="landing-title-container">
        <h1 className="landing-title">DOGFLIX</h1>
      </div>
      <div>
        <Link to={"/home"}>
          <div className="landing-button-container">
            <button className="landing-button">🐾</button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
