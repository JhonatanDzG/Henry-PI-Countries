const {Country} = require('../db.js')




const mapDataToCountryModel = async (data) => {


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
      const formattedCapital = capital?.[0] || 'Unknown';
  
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

    return await Country.bulkCreate(countries);

  };
  
  module.exports = { mapDataToCountryModel };
      
