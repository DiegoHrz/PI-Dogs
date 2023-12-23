import Card from "../Card/Card";
import "./Cards.css";

import React from "react";
import { useSelector } from "react-redux";

const Cards = () => {
  const dogs = useSelector((state) => state.dogs);

  return (
    <div className="cards-container">
      {dogs.map((dog, index) => (
        <Card key={index} info={dog} />
      ))}
    </div>
  );
};

export default Cards;
