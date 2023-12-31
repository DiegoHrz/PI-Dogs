import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import { clearDetails, getDogsById } from "../../Redux/Action/action";
import "./Details.css";

const Details = () => {
  const dispatch = useDispatch();

  //retornarme dentro de params el id que yo le paso en la ruta
  const params = useParams();
  console.log(params);

  const details = useSelector((state) => state.details);

  useEffect(() => {
    dispatch(getDogsById(params.id));
    return () => {
      dispatch(clearDetails());
    };
  }, []);

  console.log(details.name);
  return (
    <div className="details-container">
      <div>
        <h1>Details:</h1>
      </div>
      <div>
        <div>
          <p>ID: {details.id} </p>
        </div>

        <div>
          <h2>Breed's Name: {details.name}</h2>
        </div>

        <div>
          <img src={details.image} alt={details.id} />
        </div>
        <div>
          <p>
            Range of Height: {details.min_height} - {details.max_height}
          </p>
        </div>
        <div>
          <p>
            Range of Weights: {details.min_weight} - {details.max_weight}
          </p>
        </div>

        <div>
          <p>
            Temperaments:{" "}
            {details.Temperaments && details.Temperaments.join(" , ")}
          </p>
        </div>
        <div>
          <p>
            Breed group: {details.breed_group ? details.breed_group : "none"}
          </p>
        </div>
        <div>
          <p>Bred for: {details.bred_for ? details.bred_for : "none"}</p>
        </div>
        <div>
          <p>Lifespan: {details.lifespan} years</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
