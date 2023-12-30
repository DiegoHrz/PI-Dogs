import React from "react";
import Cards from "../../Components/Cards/Cards";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { dogsAlphabeticSortAZ, getDogs, page } from "../../Redux/Action/action";
import { Link } from "react-router-dom/cjs/react-router-dom";
import "./Home.css";

import Searchbar from "../../Components/Searchbar/Searchbar";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDogs());
  }, []);

  const paginado = (event) => {
    dispatch(page(event.target.name));
    console.log(event.target.name);
  };

  const orderAZ = (event) => {
    dispatch(dogsAlphabeticSortAZ(event.target.name));
  };

  return (
    <div className="home-container">
      <div className="home-header-container">
        <div className="home-header-container-no-image">
          <p className="home-h1"> El Mejor Amigo del Hombre</p>
          <div className="home-p-container">
            <p>
              ¡Bienvenido a DogFlix! Descubre razas con temperamentos, alturas y
              pesos. Nuestra herramienta de búsqueda y filtrado te encantará.
              ¡Explora ahora!
            </p>
          </div>
          <div className="home-Link-container">
            <Link to={"/create"}>
              <button className="buttom-create">Crea tu <span className="home-button-perro">🐕</span> </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="home-body-container">
        <div className="home-body-title-container">
          <h2>TUS PERROS FAVORITOS</h2>
        </div>
        <div className="home-body-logic-container">
          <div>
            <label htmlFor="">Ordenamientos </label>
            <button className="home-button-logic" name="AZ" onClick={orderAZ}>
              AZ↑
            </button>
            <button className="home-button-logic" name="ZA" onClick={orderAZ}>
              ZA↓
            </button>
          </div>
          <div>
            <label htmlFor="">Paginado </label>
            <button className="home-button-logic" name="prev" onClick={paginado}>
              ᐗ
            </button>
            <button className="home-button-logic" name="next" onClick={paginado}>
              ᐓ
            </button>
          </div>
          <div>
            <Searchbar />
          </div>
        </div>
        <Cards />
      </div>
    </div>
  );
};

export default Home;
