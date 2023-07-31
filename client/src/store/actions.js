import axios from 'axios'
import { ACTIONS } from '../constants/action.constant';

const URL = import.meta.env.VITE_APP_URL;

export const getCountries = async (page=0, search = "") => {

  const {data:  payload} = await axios.get(`${URL}countries?skip=${page}`);

  return {
    payload,
    type: ACTIONS.getCountries,
  };
};


export const getCountry = async (id) =>{
 const {data: payload} = await axios(`${URL}country/${id}`)
 return {
  payload,
  type: ACTIONS.getCountry
 }
}

export const clearCountry = () => {
  return {
    type: ACTIONS.clearCountry
  }
}

export const searchCountries = async(search) => {
  
  const {data: payload} = await axios.get(`${URL}countries?search=${search}`);
  
  return{
    type: ACTIONS.search,
    payload: {
      ...payload,
      search
    }
  }

}
