import React, { useState } from "react";
import { searchDog } from "../../Redux/Action/action";
import { useDispatch } from "react-redux";

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
        Busca tu perro <input id="search-bar" type="text" onChange={handleChange} />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Searchbar;
