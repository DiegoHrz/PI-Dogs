import React, { useState } from "react";
import './Create.css'

const Create = () => {

    //el setState es la funcion que nos permite modificar el estado
    //dentro del useState se setea el estado inicial del estado state
    const [state, setState] = useState({
        name: '',
        min_height: '',
        max_height: '',
        min_weight:'',
        max_weight:'',
        lifespan: '',
        temperamentos: '',
        raza: '',
    })

    //se encarga de modificar el estado actual
    const handleChange = (event) =>{
        //recibe un evento que contenga la info del input que estamos modificando y cual es la info q debo modificar
        setState({
            ...state,
            [event.target.name]: event.target.value
        })

        //al setState se le pasa el nuevo objeto que va a ser el nuevo estado
        //este nuevo estado recibira una copia del estado anterior (...state) para que no el nuevo objeto que creo no pise el estado anterior 
        //Además le concateno la posicion del event.target.name y le doy el valor e.target.value
    }


  return (
    <div className="form-container">
        {console.log(state)}
      <form action="">
        <label htmlFor="">Nombre:</label>
        <input onChange={handleChange} type="text" name="nombre" id="" />

        <label htmlFor="">Altura:</label>
        <input onChange={handleChange} type="text" name="altura" id="" />

        <label htmlFor="">Peso:</label>
        <input onChange={handleChange} type="text" name="peso" id="" />

        <label htmlFor="">Años de vida:</label>
        <input onChange={handleChange} type="text" name="años_de_vida" id="" />

        <label htmlFor="">Temperamentos</label>
        <select name="temperamentos" id="">
          <option value="">Stubborn</option>
          <option value="">Curious</option>
          <option value="">Playful</option>
          <option value="">Adventurous</option>
        </select>

        <label htmlFor="">Raza:</label>
        <input onChange={handleChange} type="text" name="raza" id="" />

        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default Create;
