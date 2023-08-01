import axios from "axios";
import { ACTIONS } from "../constants/action.constant";

const URL = import.meta.env.VITE_APP_URL;

export const getCountries = async (filters = {}) => {
  console.log("filters :>> ", filters);

  let setQueries = "?";

  for (let prop in filters) {
    setQueries += `${filters[prop] ? `${prop}=${filters[prop]}&` : ""}`;
  }

  const { data: payload } = await axios(`${URL}countries${setQueries}`);

  return {
    payload,
    type: ACTIONS.getCountries,
  };
};

// Buscar países con filtros opcionales
export const searchCountries = async (search) => {
  const { data: payload } = await axios.get(
    `${URL}countries?skip=${page}&search${search}`
  );
  return {
    type: ACTIONS.search,
    payload: {
      ...payload,
      search,
    },
  };
};

//Obtener pais por ID
export const getCountry = async (id) => {
  const { data: payload } = await axios(`${URL}country/${id}`);
  return {
    payload,
    type: ACTIONS.getCountry,
  };
};

//Limpiar el país actualmente seleccionado
export const clearCountry = () => {
  return {
    type: ACTIONS.clearCountry,
  };
};

//Establecer filtros de búsqueda en la lista de países
export const filterBy = (key, value) => {
  console.log("key, value :>>", key, value);

  return {
    type: ACTIONS.filterBy,
    payload: {
      key,
      value,
    },
  };
};

//Crear nueva Activity
export const createActivity = async (activity) => {
  const { data: payload } = await axios.post(`${URL}activities`, activity);

  return {
    type: ACTIONS.createActivity,
    payload,
  };
};
