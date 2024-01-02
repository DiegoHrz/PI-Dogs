//import action-types
import {
  GET_TEMPERAMENTS,
  SEARCH_DOG,
  GET_DOGS,
  GET_DETAILS,
  CLEAR_DETAILS,
  PAGINADO,
  SORT_AND_FILTER,
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

    case SORT_AND_FILTER:
      switch (action.payload) {
        case "AZ":
          let variableAscendente = [...state.dogsBackup].sort((prev, next) => {
            if (prev.name.toLowerCase() > next.name.toLowerCase()) return 1;
            if (prev.name.toLowerCase() < next.name.toLowerCase()) return -1;
            return 0;
          });
          return {
            ...state,
            dogs: [...variableAscendente].splice(0, ITEMS_PER_PAGE),
            dogsBackup: variableAscendente,
            currentPage: 0,
          };

        case "ZA":
          let variableDescendente = [...state.dogsBackup].sort((prev, next) => {
            if (prev.name.toLowerCase() > next.name.toLowerCase()) return -1;
            if (prev.name.toLowerCase() < next.name.toLowerCase()) return 1;
            return 0;
          });
          return {
            ...state,
            dogs: [...variableDescendente].splice(0, ITEMS_PER_PAGE),
            dogsBackup: variableDescendente,
            currentPage: 0,
          };

        case "KG↑":
          let kgAscendente = [...state.dogsBackup].sort((prev, next) => {
            const prevWeight = isNaN(prev.min_weight) ? 0 : prev.min_weight;
            const nextWeight = isNaN(next.min_weight) ? 0 : next.min_weight;

            if (prevWeight > nextWeight) return -1;
            if (prevWeight < nextWeight) return 1;
            return 0;
          });
          return {
            ...state,
            dogs: [...kgAscendente].splice(0, ITEMS_PER_PAGE),
            dogsBackup: kgAscendente,
            currentPage: 0,
          };

        case "KG↓":
          let kgDescendente = [...state.dogsBackup].sort((prev, next) => {
            const prevWeight = isNaN(prev.min_weight) ? 0 : prev.min_weight;
            const nextWeight = isNaN(next.min_weight) ? 0 : next.min_weight;

            if (prevWeight < nextWeight) return -1;
            if (prevWeight > nextWeight) return 1;
            return 0;
          });
          return {
            ...state,
            dogs: [...kgDescendente].splice(0, ITEMS_PER_PAGE),
            dogsBackup: kgDescendente,
            currentPage: 0,
          };

        case "API":
          let apiFilter = [...state.dogsBackup].filter(
            (dog) => !dog.hasOwnProperty("origin")
          );
          return {
            ...state,
            dogs: [...apiFilter].splice(0, ITEMS_PER_PAGE),
            dogsBackup: apiFilter,
            currentPage: 0,
          };

        case "DB":
          let dbFilter = [...state.dogsBackup].filter((dog) =>
            dog.hasOwnProperty("origin")
          );
          return {
            ...state,
            dogs: [...dbFilter].splice(0, ITEMS_PER_PAGE),
            dogsBackup: dbFilter,
            currentPage: 0,
          };
        default:
          return state;
      }

    default:
      return state;
  }
}

export default rootReducer;
