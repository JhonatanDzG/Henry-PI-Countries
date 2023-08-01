const { Country } = require("../db.js");

//Buscar Paises desde el model Country
const getCountries = async () => {
  //Devolver...
  return await Country.findAll();
};

module.exports = { getCountries };
