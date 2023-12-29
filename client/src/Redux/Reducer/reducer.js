//import action-types
import {
  GET_TEMPERAMENTS,
  SEARCH_DOG,
  GET_DOGS,
  GET_DETAILS,
  CLEAR_DETAILS,
  PAGINADO,
} from "../Action/action-type";

//definir el initial state
let initialState = {
  temperaments: [],
  dogs: [], // dogs = dogs breed
  dogsBackup: [],
  details: {},
  currentPage: 0,
};

//definir el rootReducer
function rootReducer(state = initialState, action) {
  const ITEMS_PER_PAGE = 8;

  switch (action.type) {
    case GET_DOGS:
      return {
        ...state,
        dogs: [...action.payload].splice(0, ITEMS_PER_PAGE),
        dogsBackup: action.payload,
      };

    case GET_TEMPERAMENTS:
      return {
        ...state,
        temperaments: action.payload,
      };

    case SEARCH_DOG:
      return {
        ...state,
        dogs: action.payload, // dogs = dogs breed
      };

    case GET_DETAILS:
      return {
        ...state,
        details: action.payload,
      };

    case CLEAR_DETAILS:
      return {
        ...state,
        details: {},
      };

    case PAGINADO:
      const nextPage = state.currentPage + 1;
      const prevPage = state.currentPage - 1;
      const firstIndex =
        action.payload === "next"
          ? nextPage * ITEMS_PER_PAGE
          : prevPage * ITEMS_PER_PAGE;

      if (action.payload === "next" && firstIndex >= state.dogsBackup.length)
        return state;
      else if (action.payload === "prev" && prevPage < 0) return state;
      return {
        ...state,
        dogs: [...state.dogsBackup].splice(firstIndex, ITEMS_PER_PAGE), //desde mi 1stIndex quiero que me renderices la cantidad de items que te paso por pagina
        currentPage: action.payload === "next" ? nextPage : prevPage,
      };

    default:
      return state;
  }
}

export default rootReducer;
