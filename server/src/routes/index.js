const { Router } = require("express");
const {
    getCountries,
    getDetailCountryById
} = require('../controllers/index')

const router = Router();

router
.get('/countries', getCountries)
.get('/country/:idCountry', getDetailCountryById)
// .get('/countries/name?="...', getCountriesByName)
// .get('/activities', getActivities)
// .post('/activity', postActivity)


module.exports = router;
