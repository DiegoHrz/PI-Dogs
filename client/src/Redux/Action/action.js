import axios from "axios";
import { GET_TEMPERAMENTS } from "./action-type";

export function createDogs(state) {
  return async function (dispatch) {
    try {
      await axios.post("http://localhost:3001/dogs/", state);
      console.log("Raza creada");
    } catch (error) {
      return { error: error.message };
    }
  };
}

export function getTemperaments() {
    return async function (dispatch) {
      try {
        const res = await axios.get("http://localhost:3001/temperaments/");
        dispatch({
            type: GET_TEMPERAMENTS,
            payload: res.data,
        })
        console.log(res);
      } catch (error) {
        return { error: error.message };
      }
    };
  }
