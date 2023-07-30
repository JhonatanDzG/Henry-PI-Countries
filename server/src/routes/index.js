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
.get('/countries/name', getCountriesByName)
.get('/country/:idCountry', getDetailCountryById)
.post('/activities', postActivities)
.get('/activities', getActivities)



module.exports = router;
