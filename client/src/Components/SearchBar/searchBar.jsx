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
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Searchbar;
