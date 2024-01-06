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
      console.log(response.data); // Datos de la respuesta si es necesario
      // Aquí puedes realizar acciones adicionales si la eliminación fue exitosa
    } catch (error) {
      console.error(error.message); // Manejo de errores
      // Aquí puedes mostrar mensajes de error o realizar acciones adicionales en caso de error
    }
  };

  return (
    <div className="card-container">
      {console.log(info)}
      <div className="card">
        <Link to={`/details/${info.id}`} className="link-tag">
          <div className="card-header">
            <img src={info.image} alt={info.name} height="100px" />
          </div>
        </Link>
        <div className="card-body">
          <div className="card-body-title">
            <Link to={`/details/${info.id}`} className="link-tag">
              <div>
                <h3>{info.name}</h3>
              </div>
            </Link>
            <div>
              {typeof info.id === "string" && (
                <button className="del-button" onClick={handleDeleteDog}>
                  🗑️
                </button>
              )}
            </div>
          </div>
          <Link to={`/details/${info.id}`} className="link-tag">
            <div className="card-body-text">
              {info.Temperaments ? `${info.Temperaments.join(", ")}` : ""}
            </div>
          </Link>
        </div>
        <Link to={`/details/${info.id}`} className="link-tag">
          <div className="card-footer">
            Weight: {info.min_weight} - {info.max_weight}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Card;
