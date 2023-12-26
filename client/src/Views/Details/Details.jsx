import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import { getDogsById } from "../../Redux/Action/action";

const Details = () => {
  const dispatch = useDispatch();

  //retornarme dentro de params el id que yo le paso en la ruta
  const params = useParams();
  console.log(params)

  const details = useSelector((state) => state.details);

  
  useEffect(() => {
    dispatch(getDogsById(params.id));
  }, [dispatch, params.id]);
  
  console.log(details);
  return (
    <div>
      <div>
        <h1>Details</h1>
      </div>
      <div>
        <h2>Name: </h2>
        <div>
        <p>Name: </p>

        </div>

      </div>
    </div>
  );
};

export default Details;
