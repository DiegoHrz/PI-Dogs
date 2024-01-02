import React, { useEffect } from "react";
import Cards from "../../Components/Cards/Cards";
import { useDispatch, useSelector } from "react-redux";
import {
  getDogs,
  page,
  getTemperaments,
  dogsSortFilter,
} from "../../Redux/Action/action";
import { Link } from "react-router-dom/cjs/react-router-dom";
import "./Home.css";

import Searchbar from "../../Components/Searchbar/Searchbar";

const Home = () => {
  const allTemperaments = useSelector((state) => state.temperaments);
  console.log(allTemperaments);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDogs());
  }, []);

  useEffect(() => {
    dispatch(getTemperaments());
  }, []);

  const paginado = (event) => {
    dispatch(page(event.target.name));
    console.log(event.target.name);
  };

  const orderAndFilter = (event) => {
    dispatch(dogsSortFilter(event.target.name));
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
              <button className="button-create">
                Crea tu <span className="home-button-perro">🐕</span>{" "}
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="home-body-container">
        <div className="home-body-title-container">
          <h2>TUS PERROS FAVORITOS</h2>
        </div>
        <div className="home-body-logic-container">
          <div className="ordenamientos-logic-container">
            <div>Ordenamientos</div>
            <div>
              <div>
                <label htmlFor=""></label>
                <button
                  className="home-button-logic"
                  name="AZ"
                  onClick={orderAndFilter}
                >
                  AZ↑
                </button>
                <button
                  className="home-button-logic"
                  name="ZA"
                  onClick={orderAndFilter}
                >
                  ZA↓
                </button>
              </div>
              <div>
                <label htmlFor=""></label>
                <button
                  className="home-button-logic"
                  name="KG↑"
                  onClick={orderAndFilter}
                >
                  KG+
                </button>
                <button
                  className="home-button-logic"
                  name="KG↓"
                  onClick={orderAndFilter}
                >
                  KG-
                </button>
              </div>
            </div>
          </div>

          <div className="ordenamientos-logic-container">
            <div>Filtrados</div>
            <div>
              <div>
                <label htmlFor=""></label>
                <button
                  className="home-button-logic"
                  name="API"
                  onClick={orderAndFilter}
                >
                  API
                </button>
                <button
                  className="home-button-logic"
                  name="DB"
                  onClick={orderAndFilter}
                >
                  DB
                </button>
              </div>
            </div>
          </div>

          <div className="ordenamientos-logic-container">
            <div>Reset</div>
            <div>
              <div>
                <label htmlFor=""></label>
                <button className="home-button-logic reset-button" name="reset" onClick={""}>
                  ♻
                </button>
              </div>
            </div>
          </div>

          <div className="ordenamientos-logic-container">
            <div>Filtra por Temperamento </div>
            <div>
              <div>
                <label htmlFor=""></label>
                <select name="temperaments" className="home-button-logic" id="">
                  <option value="Selecciona" hidden>
                    Selecciona
                  </option>
                  {allTemperaments.map((tem) => (
                    <option key={tem} value={tem}>
                      {tem}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div>
            <Searchbar />
          </div>
        </div>

        {/* //PAGINADO */}
        <div>
          <label htmlFor="">Paginado </label>
          <button className="home-button-logic" name="prev" onClick={paginado}>
            ᐗ
          </button>
          <button className="home-button-logic" name="next" onClick={paginado}>
            ᐓ
          </button>
        </div>

        <Cards />
      </div>
    </div>
  );
};

export default Home;
