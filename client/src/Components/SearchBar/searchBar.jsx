import React, { useState } from "react";
import { searchDog } from "../../Redux/Action/action";
import { useDispatch } from "react-redux";
import './Searchbar.css'

const Searchbar = () => {
  const dispatch = useDispatch();

  const [dog, setDog] = useState("");

  const handleChange = (e) => {
    setDog(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchDog(dog));
    document.getElementById("search-bar").value = "";
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        Busca tu Perro{" "}
        <input id="search-bar" type="text" onChange={handleChange} className="searchbar-input" placeholder="  Por Raza" />
        <input type="submit" value="🔎" className="searchbar-button"/>
      </form>
    </div>
  );
};

export default Searchbar;
