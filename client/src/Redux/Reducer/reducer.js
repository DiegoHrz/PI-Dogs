
import {
  GET_TEMPERAMENTS,
  SEARCH_DOG,
  GET_DOGS,
  GET_DETAILS,
  CLEAR_DETAILS,
  PAGINADO,
  SORT_AND_FILTER,
  RESET,
  FILTER_BY_TEMPERAMENT,
} from "../Action/action-type";


let initialState = {
  temperaments: [],
  dogs: [], // dogs = breed
  dogsBackup: [],
  details: {},
  dogsFiltered: [],
  filters: false,
  currentPage: 0,
};


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
        dogs: action.payload, 
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

      if (state.filters) {
        if (
          action.payload === "next" &&
          firstIndex >= state.dogsFiltered.length
        )
          return state;
        else if (action.payload === "prev" && prevPage < 0) return state;
        return {
          ...state,
          dogs: [...state.dogsFiltered].splice(firstIndex, ITEMS_PER_PAGE),
          currentPage: action.payload === "next" ? nextPage : prevPage,
        };
      }

      if (action.payload === "next" && firstIndex >= state.dogsBackup.length)
        return state;
      else if (action.payload === "prev" && prevPage < 0) return state;

      return {
        ...state,
        dogs: [...state.dogsBackup].splice(firstIndex, ITEMS_PER_PAGE), 
        currentPage: action.payload === "next" ? nextPage : prevPage,
      };

    case SORT_AND_FILTER:
      switch (action.payload) {
        //SORTS
        case "AZ":
          let variableAscendente = [];
          if (state.filters) {
            variableAscendente = [...state.dogsFiltered].sort((prev, next) => {
              if (prev.name.toLowerCase() > next.name.toLowerCase()) return 1;
              if (prev.name.toLowerCase() < next.name.toLowerCase()) return -1;
              return 0;
            });
            return {
              ...state,
              dogs: [...variableAscendente].splice(0, ITEMS_PER_PAGE),
              dogsFiltered: variableAscendente,
              currentPage: 0,
            };
          } else {
            variableAscendente = [...state.dogsBackup].sort((prev, next) => {
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
          }

        case "ZA":
          let variableDescendente = [];
          if (state.filters) {
            variableDescendente = [...state.dogsFiltered].sort((prev, next) => {
              if (prev.name.toLowerCase() > next.name.toLowerCase()) return -1;
              if (prev.name.toLowerCase() < next.name.toLowerCase()) return 1;
              return 0;
            });
            return {
              ...state,
              dogs: [...variableDescendente].splice(0, ITEMS_PER_PAGE),
              dogsFiltered: variableDescendente,
              currentPage: 0,
            };
          } else {
            variableDescendente = [...state.dogsBackup].sort((prev, next) => {
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
          }

        case "KG↑":
          let kgAscendente = [];
          if (state.filters) {
            kgAscendente = [...state.dogsFiltered].sort((prev, next) => {
              const prevWeight = isNaN(prev.min_weight) ? 0 : prev.min_weight;
              const nextWeight = isNaN(next.min_weight) ? 0 : next.min_weight;

              if (prevWeight > nextWeight) return -1;
              if (prevWeight < nextWeight) return 1;
              return 0;
            });
            return {
              ...state,
              dogs: [...kgAscendente].splice(0, ITEMS_PER_PAGE),
              dogsFiltered: kgAscendente,
              currentPage: 0,
            };
          } else {
            kgAscendente = [...state.dogsBackup].sort((prev, next) => {
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
          }

        case "KG↓":
          let kgDescendente = [];
          if (state.filters) {
            kgDescendente = [...state.dogsFiltered].sort((prev, next) => {
              const prevWeight = isNaN(prev.min_weight) ? 0 : prev.min_weight;
              const nextWeight = isNaN(next.min_weight) ? 0 : next.min_weight;

              if (prevWeight < nextWeight) return -1;
              if (prevWeight > nextWeight) return 1;
              return 0;
            });
            return {
              ...state,
              dogs: [...kgDescendente].splice(0, ITEMS_PER_PAGE),
              dogsFiltered: kgDescendente,
              currentPage: 0,
            };
          } else {
            kgDescendente = [...state.dogsBackup].sort((prev, next) => {
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
          }

        //FILTERS
        case "API":
          let apiFilter = [...state.dogsBackup].filter(
            (dog) => !dog.hasOwnProperty("origin")
          );
          return {
            ...state,
            dogs: [...apiFilter].splice(0, ITEMS_PER_PAGE),
            dogsFiltered: apiFilter,
            currentPage: 0,
            filters: true,
          };

        case "DB":
          let dbFilter = [...state.dogsBackup].filter((dog) =>
            dog.hasOwnProperty("origin")
          );
          return {
            ...state,
            dogs: [...dbFilter].splice(0, ITEMS_PER_PAGE),
            dogsFiltered: dbFilter,
            currentPage: 0,
            filters: true,
          };
        default:
          return state;
      }

    case RESET:
      return {
        ...state,
        dogs: [...state.dogsBackup].splice(0, ITEMS_PER_PAGE),
        dogsFiltered: [],
        currentPage: 0,
        filters: false,
      };

    case FILTER_BY_TEMPERAMENT:
    case "temperaments":
      let filterByTemperament = [...state.dogsBackup].filter((dog) =>
        dog.Temperaments.includes(action.payload)
      );
      return {
        ...state,
        dogs: [...filterByTemperament].splice(0, ITEMS_PER_PAGE),
        dogsFiltered: filterByTemperament,
        filters: true,
        currentPage: 0,
      };


    default:
      return state;
  }
}

export default rootReducer;
