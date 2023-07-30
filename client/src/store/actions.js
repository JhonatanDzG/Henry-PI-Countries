import axios from 'axios'
import { ACTIONS } from '../constants/action.constant';

export const getCountries = async () => {
  const URL = import.meta.env.VITE_APP_URL;

  const {data:  payload} = await axios.get(URL);

  return {
    payload,
    type: ACTIONS.getCountries,
  };
};
