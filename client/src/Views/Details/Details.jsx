import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import { clearDetails, getDogsById } from "../../Redux/Action/action";
import "./Details.css";

const Details = () => {
  const dispatch = useDispatch();


  const params = useParams();

  const details = useSelector((state) => state.details);

  useEffect(() => {
    dispatch(getDogsById(params.id));
    return () => {
      dispatch(clearDetails());
    };
  }, [params.id]);

  return (
    <div className="details-container">
      <div className="details-title">
        <h1>Details:</h1>
      </div>
      <div className="details-body">
        <div className="details-image-container">
          <img src={details.image} alt={details.id} className="details-image" />
        </div>
        <div className="details-card-container">
          <div>
            <p>ID: {details.id} </p>
          </div>

          <div>
            <h2>Breed's Name: {details.name}</h2>
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
          <p>
            Lifespan: {typeof details.lifespan === 'string' && details.lifespan.includes('years') ? details.lifespan : `${details.lifespan} years`} 
          </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
