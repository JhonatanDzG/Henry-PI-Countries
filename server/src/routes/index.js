const { Router } = require("express");
const {
    
    getCountries,
    getDetailCountryById,
    getCountriesByName,
    postActivities,
    getActivities
} = require('../controllers/index')
const {setDatabase} = require('../controllers/setDatabase.js')

const router = Router();

router
.get('/', setDatabase)
.get('/countries', getCountries)
.get('/countries/:idCountry', getDetailCountryById)
.get('/countries/name', getCountriesByName)
.post('/activities', postActivities)
.get('/activities', getActivities)



module.exports = router;
