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
        //con esto se envia la peticion al estado global y la guarda:
        dispatch({
            type: GET_TEMPERAMENTS,
            payload: res.data,
        })
        console.log(res.data);
      } catch (error) {
        return { error: error.message };
      }
    };
  }
