const getCountries = require('../controllers/getCountries.js');
const getDetailCountryById = require('../controllers/getDetailCountryById.js');
const getCountriesByName = require('../controllers/getCountriesByName.js')
const postActivities = require('../controllers/postActivities.js')
const getActivities = require('../controllers/getActivities.js')
module.exports = {
  getCountries,
  getDetailCountryById,
  getCountriesByName,
  postActivities,
  getActivities
};
