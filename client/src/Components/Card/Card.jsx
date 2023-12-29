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
          </div>
          <div className="card-body">
            <h3>{info.name}</h3>

            <p>{info.temperament}</p>
          </div>
          <div className="card-footer">
            Weight: {info.weight}
            {info.min_weight && info.max_weight && (
              <span>
                {info.min_weight} - {info.max_weight}
              </span>
            )}{" "}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
