import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
import "./Navbar.css";
import salida from "./salida-de-emergencia.png";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-title-container">
        <Link to={"/home"} className='navbar-link'>
          <h1 className="navbar-title">DOGFLIX</h1>
        </Link>
      </div>
      <div className="navbar-searchbar-container">
        <Link to={"/"} className='text-decoration'>
          <div className="navbar-Link-container">
            <div>
              <img src={salida} />
            </div>
            <div>
              <p>Landing</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
