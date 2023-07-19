const apiDataCountries = require('../../api/db.json');

// Función para obtener todos los países
const getCountries = (req, res) => {
    res.json(apiDataCountries);
  };
  
  module.exports = getCountries;
