import { ACTIONS } from "../constants/action.constant";

const initialState = {
  countries: [],
  country: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.getCountries:
      return {
        ...state,
        countries: action.payload,
      }
      default:
      return state
  }
};

export default reducer;
