//import action-types
import { GET_TEMPERAMENTS, SEARCH_DOG, GET_DOGS, GET_DETAILS, CLEAR_DETAILS } from "../Action/action-type";

//definir el initial state
let initialState = {
  temperaments: [],
  dogs: [], // dogs = dogs breed
  details: {}

};

//definir el rootReducer
function rootReducer(state = initialState, action) {
  switch (action.type) {
    
    case GET_DOGS:
      return{
        ...state,
        dogs: action.payload,
      }

    case GET_TEMPERAMENTS:
      return {
        ...state,
        temperaments: action.payload,
      };

    case SEARCH_DOG:
      return{
        ...state,
        dogs: action.payload // dogs = dogs breed
      };

    case GET_DETAILS:
      return{
        ...state,
        details: action.payload
      }

      case CLEAR_DETAILS:
        return{
          ...state,
          details: {}
        }


    default:
      return state;
      break;
  }
}

export default rootReducer;
