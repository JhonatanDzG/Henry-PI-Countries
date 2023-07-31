const {Country} = require('../db.js')

const getCountries = async() => {
    return await Country.findAll();
}

module.exports={ getCountries }