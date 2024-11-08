import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Card.css";

const Card = ({ info }) => {
  const handleDeleteDog = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:3001/dogs/${info.id}`
      );
      console.log(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="card-container">
      <div className="card">
        <Link to={`/details/${info.id}`} className="link-tag">
          <div className="card-header">
            <img src={info.image} alt={info.name} height="100px" />
          </div>
          <div className="card-body">
            <div className="card-body-title">
              <div>
                <h3>{info.name}</h3>
              </div>
              <div>
                {typeof info.id === "string" && (
                  //que este boton no se efectue el Link para no irme a la pagina details
                  <button
                    className="del-button"
                    onClick={(e) => {
                      e.stopPropagation(); // Evitar que el clic se propague al contenedor del enlace
                      handleDeleteDog();
                    }}
                  >
                    🗑️
                  </button>
                )}
              </div>
            </div>
            <div className="card-body-text">
              {info.Temperaments ? `${info.Temperaments.join(", ")}` : ""}
            </div>
          </div>
          <div className="card-footer">
            Weight: {info.min_weight} - {info.max_weight}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Card;
