//import action-types
import { GET_TEMPERAMENTS } from "../Action/action-type";

//definir el initial state
let initialState = {
  temperaments: [],

};

//definir el rootReducer
function rootReducer(state = initialState, action) {
  switch (action.type) {
    
    case GET_TEMPERAMENTS:
      return {
        ...state,
        temperaments: action.payload,
      };

    default:
      return state;
      break;
  }
}

export default rootReducer;
