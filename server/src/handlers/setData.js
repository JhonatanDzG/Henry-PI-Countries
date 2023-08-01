const { Country } = require("../db.js");

const mapDataToCountryModel = async (data) => {
  //Crear la estructura de datos de cada país, con el formato correcto
  const countries = data.map((countryData) => {
    const {
      cca3: id,
      name: { common: name },
      flags: { png: flagImage },
      region: continent,
      capital,
      subregion,
      area,
      population,
    } = countryData;

    // Convertir el campo capital en un string
    const formattedCapital = capital?.[0] || "Unknown";

    //Devolver...
    return {
      id,
      name,
      flagImage,
      continent,
      capital: formattedCapital,
      subregion,
      area,
      population,
    };
  });

  // Crear o actualizar registros en la base de datos
  // (bulkCreate(Sequelize))realiza múltiples inserciones en la base de datos de manera más eficiente
  // y devuelve una promesa con la lista de países creados o actualizados
  return await Country.bulkCreate(countries);
};

module.exports = { mapDataToCountryModel };
