import Card from "../Card/Card";
import "./Cards.css";

import React from "react";
import { useSelector } from "react-redux";

const Cards = () => {
  const dogs = useSelector((state) => state.dogs);
  return (
    <div className="cards-container">

      <div className="cards-container-card">
        {dogs.map((dog, index) => (
          <Card key={index} info={dog} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
