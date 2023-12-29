import axios from "axios";
import {
  CLEAR_DETAILS,
  GET_DETAILS,
  GET_DOGS,
  GET_TEMPERAMENTS,
  PAGINADO,
  SEARCH_DOG,
} from "./action-type";

export function createDogs(state) {
  return async function (dispatch, getState) {
    try {
      await axios.post("http://localhost:3001/dogs/", state);
      console.log("RAZA CREADA");
      dispatch(getDogs()); // Dispatch getDogs action to update state.dogs
      const updatedState = getState(); // Assuming you have access to getState
      console.log("Updated State:", updatedState);
    } catch (error) {
      return { error: error.message };
    }
  };
}

//get temperaments
export function getTemperaments() {
  return async function (dispatch) {
    try {
      const res = await axios.get("http://localhost:3001/temperaments/");
      //con esto se envia la peticion al estado global y la guarda:
      dispatch({
        type: GET_TEMPERAMENTS,
        payload: res.data,
      });
      console.log(res.data);
    } catch (error) {
      return { error: error.message };
    }
  };
}

//get query dogs by name    dog = breeds dog
export function searchDog(dog) {
  return async function (dispatch) {
    try {
      const res = await axios.get(`http://localhost:3001/dogs?name=${dog}`);
      //con esto se envia la peticion al estado global y la guarda:
      dispatch({
        type: SEARCH_DOG,
        payload: res.data,
      });
      console.log(res);
    } catch (error) {
      return { error: error.message };
    }
  };
}

export function getDogs() {
  return async function (dispatch) {
    try {
      const res = await axios.get("http://localhost:3001/dogs");
      //con esto se envia la peticion al estado global y la guarda:
      dispatch({
        type: GET_DOGS,
        payload: res.data,
      });
      console.log(res);
    } catch (error) {
      return { error: error.message };
    }
  };
}

export function getDogsById(id) {
  return async function (dispatch) {
    try {
      const res = await axios.get(`http://localhost:3001/dogs/${id}`);
      //con esto se envia la peticion al estado global y la guarda:
      dispatch({
        type: GET_DETAILS,
        payload: res.data,
      });
      console.log(res.data);
    } catch (error) {
      return { error: error.message };
    }
  };
}

export function clearDetails() {
  return async function (dispatch) {
    try {
      dispatch({
        type: CLEAR_DETAILS,
      });
    } catch (error) {
      return { error: error.message };
    }
  };
}

//order viene a ser el orden en el que nos movemos hacia delante o atras
export function page(order) {
  return function (dispatch) {
    try {
      dispatch({
        type: PAGINADO,
        payload: order,
      });
    } catch (error) {
      return { error: error.message };
    }
  };
}
