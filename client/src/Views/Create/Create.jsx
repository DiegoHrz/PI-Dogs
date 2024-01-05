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
    dispatch(getTemperaments());
  }, []);

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
        else if (state.name.length > 25)
          setErrors({ ...errors, name: "*Máximo 25 letras*" });
        else if (state.name.length < 3)
          setErrors({ ...errors, name: "*Minimo 3 letras*" });
        else if (!/^[a-zA-Z\s]+$/.test(state.name))
          setErrors({ ...errors, name: "*Solo letras *" });
        else setErrors({ ...errors, name: "" });
        break;

      case "min_height":
        if (state.min_height === "")
          setErrors({ ...errors, min_height: "*campo requerido*" });
        else if (isNaN(+state.min_height))
          setErrors({ ...errors, min_height: "*Tiene que ser numero*" });
        else if (state.min_height < 20)
          setErrors({ ...errors, min_height: "*Min 20 cm*" });
        else if (state.min_height > 50)
          setErrors({ ...errors, min_height: "*Max 50 cm*" });
        else setErrors({ ...errors, min_height: "" });
        break;

      case "max_height":
        if (state.max_height === "")
          setErrors({ ...errors, max_height: "*campo requerido*" });
        else if (isNaN(+state.max_height))
          setErrors({ ...errors, max_height: "*Tiene que ser numero*" });
        else if (state.max_height < 20)
          setErrors({ ...errors, max_height: "*Min 20 metros*" });
        else if (state.max_height > 80)
          setErrors({ ...errors, max_height: "*Max 80 cm*" });
        else if (state.max_height < state.min_height)
          setErrors({
            ...errors,
            max_height: "*No puede ser menor que el minimo*",
          });
        else setErrors({ ...errors, max_height: "" });
        break;

      case "min_weight":
        if (state.min_weight === "")
          setErrors({ ...errors, min_weight: "*campo requerido*" });
        else if (isNaN(+state.min_weight))
          setErrors({ ...errors, min_weight: "*Tiene que ser numero*" });
        else if (state.min_weight < 1)
          setErrors({ ...errors, min_weight: "*Min 1 kg*" });
        else if (state.min_weight > 60)
          setErrors({ ...errors, min_weight: "*Max 60 kg*" });
        else setErrors({ ...errors, min_weight: "" });
        break;

      case "max_weight":
        if (state.max_weight === "")
          setErrors({ ...errors, max_weight: "*campo requerido*" });
        else if (isNaN(+state.max_weight))
          setErrors({ ...errors, max_weight: "*Tiene que ser numero*" });
        else if (state.max_weight > 100)
          setErrors({ ...errors, max_weight: "*Max 100 kg*" });
        else if (state.max_weight < 60)
          setErrors({ ...errors, max_weight: "*Min 60 kg*" });
        else if (state.max_weight < state.min_weight)
          setErrors({
            ...errors,
            max_weight: "*No puede ser menor que el minimo*",
          });
        else setErrors({ ...errors, max_weight: "" });
        break;

      case "lifespan":
        if (state.lifespan === "")
          setErrors({ ...errors, lifespan: "*campo requerido*" });
        else if (isNaN(+state.lifespan))
          setErrors({ ...errors, lifespan: "*Tiene que ser numero*" });
        else if (state.lifespan < 1)
          setErrors({ ...errors, lifespan: "*Min 1 año*" });
        else if (state.lifespan > 100)
          setErrors({ ...errors, lifespan: "*Max 100 años*" });
        else setErrors({ ...errors, lifespan: "" });
        break;

      case "image":
        if (state.image === "") {
          setErrors({ ...errors, image: "" });
        } else if (!/^(http|https):\/\/.*\.jpg$/i.test(state.image.trim())) {
          setErrors({
            ...errors,
            image:
              "*La URL de la imagen debe terminar en '.jpg' y comenzar con 'http' o 'https'.*",
          });
        } else {
          setErrors({ ...errors, image: "" });
        }
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

  const handleChange = (event) => {
    if (
      event.target.name === "temperaments" &&
      state.temperaments.length >= 5
    ) {
      return;
    }

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
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createDogs(state));
    history.push("/home");
  };

  return (
    <div className="create-container">
      <div className="form-container">
        {console.log(state)}
        <form
          action=""
          className="create-form-container"
          onSubmit={handleSubmit}
        >
          <label className="form-label" htmlFor="">
            Nombre:
          </label>
          {errors.name && <span className="errorSpan">{errors.name}</span>}
          <input onChange={handleChange} type="text" name="name" id="" />
          <label className="form-label" htmlFor="">
            Altura:
          </label>
          <p className="form-label">Min:</p>
          {errors.min_height && (
            <span className="errorSpan">{errors.min_height}</span>
          )}
          <input onChange={handleChange} type="text" name="min_height" id="" />
          <p className="form-label">Max:</p>
          {errors.max_height && (
            <span className="errorSpan">{errors.max_height}</span>
          )}
          <input onChange={handleChange} type="text" name="max_height" id="" />

          <label htmlFor="" className="form-label">
            Peso:
          </label>
          <p className="form-label">Min:</p>
          {errors.min_weight && (
            <span className="errorSpan">{errors.min_weight}</span>
          )}
          <input onChange={handleChange} type="text" name="min_weight" id="" />
          <p className="form-label">Max:</p>
          {errors.max_weight && (
            <span className="errorSpan">{errors.max_weight}</span>
          )}
          <input onChange={handleChange} type="text" name="max_weight" id="" />

          <label htmlFor="" className="form-label">
            Años de vida:
          </label>
          {errors.lifespan && (
            <span className="errorSpan">{errors.lifespan}</span>
          )}
          <input onChange={handleChange} type="text" name="lifespan" id="" />

          <label htmlFor="" className="form-label">
            Image:
          </label>
          {errors.image && <span className="errorSpan">{errors.image}</span>}
          <input onChange={handleChange} type="text" name="image" id="" />

          <label htmlFor="" className="form-label">
            Temperamentos
          </label>
          {errors.temperaments && (
            <span className="errorSpan">{errors.temperaments}</span>
          )}

          <select name="temperaments" onChange={handleChange} id="">
            <option value="Selecciona" hidden>
              Selecciona los Temperamentos
            </option>
            {allTemperaments.map((temp, index) => (
              <option
                key={index}
                value={temp}
                disabled={
                  state.temperaments.includes(temp) &&
                  state.temperaments.length >= 5
                }
              >
                {temp}
              </option>
            ))}
          </select>
          <div className="form-tems-container">
            {state.temperaments.map((selectedTemp, index) => (
              <div className="form-tem-container" key={index}>
                <p>{selectedTemp}</p>
              </div>
            ))}
          </div>

          <input type="submit" disabled={desactivadora()} value="Enviar" />
        </form>
      </div>
    </div>
  );
};

export default Create;
