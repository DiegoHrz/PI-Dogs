import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

const Card = ({ info }) => {
  return (
    <div className="card-container">
      {console.log(info)}
      <Link to={`/details/${info.id}`} className="link-tag">
        <div className="card">
          <div className="card-header">
            <img src={info.image} alt={info.name} height="100px" />
            {typeof(info.id) === 'string' && <button className="delete-button">🗑️</button>}
          </div>
          <div className="card-body">
            <h3>{info.name}</h3>
            <div className="card-body-text">
              {info.Temperaments ? `${info.Temperaments.join(", ")}` : ""}
            </div>
          </div>
          <div className="card-footer">
            Weight: {info.min_weight} - {info.max_weight}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
