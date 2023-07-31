import { ACTIONS } from "../constants/action.constant";

const initialState = {
  countries: [],
  country: {},
  pages: 0,
  search: "",

};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.getCountries:
      return {
        ...state,
        countries: action.payload.countries,
        pages: action.payload.pages,
      };

      case ACTIONS.getCountry:
        return {
          ...state,
          country: action.payload
        }

      case ACTIONS.clearCountry:
        return {
          ...state,
          country: {}
        }

        case ACTIONS.search:
          return {
            ...state,
            countries: action.payload.countries,
            search: action.payload.search,
            pages: action.payload.pages,
          }

          
          case ACTIONS.createActivity:
            return {
              ...state,
            };

    default:
      return state;
  }
};

export default reducer;


