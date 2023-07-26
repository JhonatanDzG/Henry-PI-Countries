const {Country, Activity} = require('../db.js')

const getDetailCountryById = async (req, res) => {
    const { idCountry } = req.params;
  
    try {
      // Utilizamos el método findByPk para buscar un país por su ID
      const country = await Country.findByPk(idCountry, {
        include: [{ model: Activity, as: 'Activities' }],
      });
  
      if (!country) {
        return res.status(404).json({ error: 'Country not found' });
      }
  
      return res.json(country);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'An error occurred while fetching the country' });
    }
  };
  
  module.exports = getDetailCountryById;
  
  
  
