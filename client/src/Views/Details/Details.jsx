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
    return ()=>{
      dispatch(clearDetails())
    }

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
          <img src={details.image && details.image.url} alt={details.id} />
          <img src={details.image } alt={details.id} />
        </div>

        <div>

        </div>

        <div>
          <p>{details.weight && details.weight.metric}</p>
        </div>

        <div>
          <p>{details.temperament}</p>
        </div>

        <div>
          <p>{details.life_span}</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
