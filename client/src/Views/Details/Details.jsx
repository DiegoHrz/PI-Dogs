import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import { clearDetails, getDogsById } from "../../Redux/Action/action";

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

  console.log(details);
  return (
    <div>
      <div>
        <h1>Details:</h1>
      </div>
      <div>
        <div>
          <p>ID: {details.id} </p>
        </div>

        <div>
          <h2>{details.name}</h2>
        </div>

        <div>
          <img src={details.image} alt={details.id} />
        </div>
        <div>
          <p>
            {details.min_height} - {details.max_height}
          </p>
        </div>
        <div>
          <p>
            {details.min_weight} - {details.max_weight}
          </p>
        </div>

        <div>
          <p>{`${details.Temperaments},`}</p>
        </div>

        <div>
          <p>{details.lifespan}</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
