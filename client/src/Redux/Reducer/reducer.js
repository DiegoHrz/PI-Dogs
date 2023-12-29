//import action-types
import {
  GET_TEMPERAMENTS,
  SEARCH_DOG,
  GET_DOGS,
  GET_DETAILS,
  CLEAR_DETAILS,
  PAGINADO,
  ALPHABETIC_SORT,
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

    case ALPHABETIC_SORT:
      switch (action.payload) {
        case "AZ":

        let variableAscendente = [...state.dogsBackup].sort((prev, next)=>{
          if(prev.name.toLowerCase() > next.name.toLowerCase()) return 1
          if(prev.name.toLowerCase() < next.name.toLowerCase()) return -1
          return 0
        })
        return {
          ...state,
          dogs: [...variableAscendente].splice(0, ITEMS_PER_PAGE),
          dogsBackup: variableAscendente,
          currentPage: 0
        }

        case "ZA":
          let variableDescendente = [...state.dogsBackup].sort((prev, next)=>{
            if(prev.name.toLowerCase() > next.name.toLowerCase()) return -1
            if(prev.name.toLowerCase() < next.name.toLowerCase()) return 1
            return 0
          })
          return {
            ...state,
            dogs: [...variableDescendente].splice(0, ITEMS_PER_PAGE),
            dogsBackup: variableAscendente,
            currentPage: 0
          }

        default:
          return state

      }

    default:
      return state;
  }
}

export default rootReducer;
