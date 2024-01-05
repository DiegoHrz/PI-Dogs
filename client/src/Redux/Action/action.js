import axios from "axios";
import {
  SORT_AND_FILTER,
  CLEAR_DETAILS,
  GET_DETAILS,
  GET_DOGS,
  GET_TEMPERAMENTS,
  PAGINADO,
  SEARCH_DOG,
  RESET,
  FILTER_BY_TEMPERAMENT,
} from "./action-type";

export function createDogs(state) {
  return async function (dispatch) {
    try {
      await axios.post("http://localhost:3001/dogs/", state);
      dispatch(getDogs()); 
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

      dispatch({
        type: GET_TEMPERAMENTS,
        payload: res.data,
      });
    } catch (error) {
      return { error: error.message };
    }
  };
}


export function searchDog(dog) {
  return async function (dispatch) {
    try {
      const res = await axios.get(`http://localhost:3001/dogs?name=${dog}`);

      dispatch({
        type: SEARCH_DOG,
        payload: res.data,
      });
    } catch (error) {
      alert("Ingresar una raza de perros correcta");
      return { error: error.message };
    }
  };
}

export function getDogs() {
  return async function (dispatch) {
    try {
      const res = await axios.get("http://localhost:3001/dogs");

      dispatch({
        type: GET_DOGS,
        payload: res.data,
      });
    } catch (error) {
      return { error: error.message };
    }
  };
}

export function getDogsById(id) {
  return async function (dispatch) {
    try {
      const res = await axios.get(`http://localhost:3001/dogs/${id}`);
      dispatch({
        type: GET_DETAILS,
        payload: res.data,
      });
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

export function dogsSortFilter(order) {
  return function (dispatch) {
    try {
      dispatch({
        type: SORT_AND_FILTER,
        payload: order,
      });
    } catch (error) {
      return { error: error.message };
    }
  };
}

export function resetDogs(){
  return function (dispatch){
    try {
      dispatch({
        type: RESET
      })
    } catch (error) {
      return {error: error.message}
    }
  }
}

export function filtersByTemperaments(selectedTemperament){
  return function (dispatch){
    dispatch({
      type:FILTER_BY_TEMPERAMENT,
      payload: selectedTemperament
    })
  }
}