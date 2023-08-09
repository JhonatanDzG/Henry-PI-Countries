import "../components/css/cards/notify.css"
import { ACTIONS } from "../constants/action.constant";

// Estado inicial del store de Redux
const initialState = {
  countries: [],
  country: {},
  pages: 0,
  filters: {
    search: "",
    skip: "",
    order: "",
  },
  notify: {
    title : "",
    content: "",
    type: ""
    
  }
};

// Reducer que debería actualizar el estado global de la aplicación
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.getCountries:
      // Actualizar el estado con los países y la cantidad de páginas obtenidas de la acción
      return {
        ...state,
        countries: action.payload.countries,
        pages: action.payload.pages,
      };

    case ACTIONS.getCountry:
      // Actualizar el estado con el país obtenido de la acción
      return {
        ...state,
        country: action.payload,
      };

    case ACTIONS.clearCountry:
      // Limpiar el estado del país actualmente seleccionado
      return {
        ...state,
        country: {},
      };

    case ACTIONS.search:
      // Actualizar el estado con los países filtrados y la cantidad de páginas obtenidos de la acción
      return {
        ...state,
        countries: action.payload.countries,
        filters: {
          ...state.filters,
          search: action.payload.search,
        },
        pages: action.payload.pages,
      };

    case ACTIONS.createActivity:
      // Actualizar el estado después de crear una nueva actividad (no se realiza ninguna acción en este caso)
      return {
        ...state,
      };

    case ACTIONS.filterBy:
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.payload.key]: action.payload.value,
        },
      };

      case ACTIONS.notify:
        return {
          ...state,
          notify: {
            title: action.payload.title,
            type: action.payload.type,
            content: action.payload.content,

          }
        }

    default:
      // Retornar el estado actual
      return state;
  }
};



export default reducer;
