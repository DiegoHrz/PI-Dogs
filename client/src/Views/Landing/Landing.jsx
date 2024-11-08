import React from "react";
import "./Landing.css";
import { Link } from "react-router-dom/cjs/react-router-dom";

const Landing = () => {
  return (
    <div className="landing-container">
      <div className="landing-title-container">
        <h1 className="landing-title">DOGFLIX</h1>
        <div className="base" ></div>
        <div>
          <Link to={"/home"} className="Link-tag">
            <div className="landing-button-container">
              <div className="landing-button">🐾</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
