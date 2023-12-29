import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import "./Create.css";
import { createDogs, getTemperaments } from "../../Redux/Action/action";
import { useDispatch, useSelector } from "react-redux";

const Create = () => {
  
  const history = useHistory();
  const dispatch = useDispatch();

  const allTemperaments = useSelector((state) => state.temperaments);

  useEffect(() => {
    //componentWillUnmount
    //componentDidMount
    dispatch(getTemperaments());
  }, []);

  //el setState es la funcion que nos permite modificar el estado
  //dentro del useState se setea el estado inicial del estado state
  const [state, setState] = useState({
    name: "",
    min_height: "",
    max_height: "",
    min_weight: "",
    max_weight: "",
    lifespan: "",
    image: "",
    temperaments: [],
  });

  const [errors, setErrors] = useState({
    name: "*campo requerido*",
    min_height: "*campo requerido*",
    max_height: "*campo requerido*",
    min_weight: "*campo requerido*",
    max_weight: "*campo requerido*",
    lifespan: "*campo requerido*",
    image: "",
    temperaments: "*selección requerida*",
  });

  const validadora = (state, names) => {
    switch (names) {
      case "name":
        if (state.name === "")
          setErrors({ ...errors, name: "*campo requerido*" });
        else if (state.name.length > 20)
          setErrors({ ...errors, name: "*Máximo 20 caracteres*" });
        else setErrors({ ...errors, name: "" });
        break;

      case "min_height":
        if (state.min_height === "")
          setErrors({ ...errors, min_height: "*campo requerido*" });
        else if (isNaN(+state.min_height))
          setErrors({ ...errors, min_height: "*Tiene que ser numero*" });
        else if (state.min_height < 0.3)
          setErrors({ ...errors, min_height: "*Min 0.3 metros*" });
        else setErrors({ ...errors, min_height: "" });
        break;

      case "max_height":
        if (state.max_height === "")
          setErrors({ ...errors, max_height: "*campo requerido*" });
        else if (isNaN(+state.max_height))
          setErrors({ ...errors, max_height: "*Tiene que ser numero*" });
        else if (state.max_height > 20)
          setErrors({ ...errors, max_height: "*Max 20 metros*" });
        else setErrors({ ...errors, max_height: "" });
        break;

      case "min_weight":
        if (state.min_weight === "")
          setErrors({ ...errors, min_weight: "*campo requerido*" });
        else if (isNaN(+state.min_weight))
          setErrors({ ...errors, min_weight: "*Tiene que ser numero*" });
        else if (state.min_weight < 1)
          setErrors({ ...errors, min_weight: "*Min 1 kg*" });
        else setErrors({ ...errors, min_weight: "" });
        break;

      case "max_weight":
        if (state.max_weight === "")
          setErrors({ ...errors, max_weight: "*campo requerido*" });
        else if (isNaN(+state.max_weight))
          setErrors({ ...errors, max_weight: "*Tiene que ser numero*" });
        else if (state.max_weight > 100)
          setErrors({ ...errors, max_weight: "*Max 100 kg*" });
        else setErrors({ ...errors, max_weight: "" });
        break;

      case "lifespan":
        if (state.lifespan === "")
          setErrors({ ...errors, lifespan: "*campo requerido*" });
        else if (isNaN(+state.lifespan))
          setErrors({ ...errors, lifespan: "*Tiene que ser numero*" });
        else if (state.lifespan < 1)
          setErrors({ ...errors, lifespan: "*Min 1 year*" });
        else setErrors({ ...errors, lifespan: "" });
        break;

      case "temperaments":
        if (state.temperaments.length === 0) {
          setErrors({ ...errors, temperaments: "*seleccion requerida*" });
        } else setErrors({ ...errors, temperaments: "" });
    }
  };

  const desactivadora = () => {
    let aux = true;
    for (let error in errors) {
      if (errors[error] === "") aux = false;
      else {
        aux = true;
        break;
      }
    }
    return aux;
  };

  //se encarga de modificar el estado actual
  const handleChange = (event) => {
    //recibe un evento que contenga la info del input que estamos modificando y cual es la info q debo modificar

    if (event.target.name === "temperaments") {
      setState({
        ...state,
        temperaments: [...state.temperaments, event.target.value],
      });
    } else {
      setState({
        ...state,
        [event.target.name]: event.target.value,
      });
    }

    validadora(
      {
        ...state,
        [event.target.name]: event.target.value,
      },
      event.target.name
    );

    //al setState se le pasa el nuevo objeto que va a ser el nuevo estado
    //este nuevo estado recibira una copia del estado anterior (...state) para que el nuevo objeto que creo no pise el estado anterior
    //Además le concateno la posicion del event.target.name y le doy el valor e.target.value
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createDogs(state));
    history.push("/home");
  };

  return (
    <>
      <div>
        <h2>
          CREA TU PROPIA RAZA DE <span className="title">PERRO</span>
        </h2>
      </div>
      <div className="form-container">
        {console.log(state)}
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="">Nombre:</label>
          {errors.name && <span className="errorSpan">{errors.name}</span>}
          <input onChange={handleChange} type="text" name="name" id="" />
          <label htmlFor="">Altura:</label>
          <p>Min:</p>
          {errors.min_height && (
            <span className="errorSpan">{errors.min_height}</span>
          )}
          <input onChange={handleChange} type="text" name="min_height" id="" />
          <p>Max:</p>
          {errors.max_height && (
            <span className="errorSpan">{errors.max_height}</span>
          )}
          <input onChange={handleChange} type="text" name="max_height" id="" />

          <label htmlFor="">Peso:</label>
          <p>Min:</p>
          {errors.min_weight && (
            <span className="errorSpan">{errors.min_weight}</span>
          )}
          <input onChange={handleChange} type="text" name="min_weight" id="" />
          <p>Max:</p>
          {errors.max_weight && (
            <span className="errorSpan">{errors.max_weight}</span>
          )}
          <input onChange={handleChange} type="text" name="max_weight" id="" />

          <label htmlFor="">Años de vida:</label>
          {errors.lifespan && (
            <span className="errorSpan">{errors.lifespan}</span>
          )}
          <input onChange={handleChange} type="text" name="lifespan" id="" />

          <label htmlFor="">Image:</label>
          <input onChange={handleChange} type="text" name="image" id="" />

          <label htmlFor="">Temperamentos</label>
          {errors.temperaments && (
            <span className="errorSpan">{errors.temperaments}</span>
          )}

          <select name="temperaments" onChange={handleChange} id="">
            {allTemperaments.map((temp) => (
              <option key={temp} value={temp}>
                {temp}
              </option>
            ))}
          </select>
          <div className="form-tems-container">
            {state.temperaments.map((selectedTemp)=><div className="form-tem-container"><p>{selectedTemp}</p></div>)}
          </div>

          <input type="submit" disabled={desactivadora()} value="Enviar" />
        </form>
      </div>
    </>
  );
};

export default Create;
