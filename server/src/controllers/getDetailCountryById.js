const {Country, Activity} = require('../db.js')

const getCountryById = async (req, res) => {
    const { idCountry } = req.params;
  
    try {
      // Utilizamos el método findByPk para buscar un país por su ID
      const country = await Country.findByPk(idCountry);
  
      // Si no se encontró el país, devolvemos un mensaje de error
      if (!country) {
        return res.status(404).json({ error: 'Country not found' });
      }
  
      // Si se encontró el país, devolvemos el resultado con las actividades turísticas
      return res.json(country);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'An error occurred while fetching the country' });
    }
  };
  
  module.exports = getCountryById;
  
  
  
