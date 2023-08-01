const {Country, Activity} = require('../db.js')

const getDetailCountryById = async (req, res) => {
  
    const { idCountry } = req.params;
  
    try {
      // Buscar un país por ID y relacionarlo con su actividad correspondiente
      const country = await Country.findByPk(idCountry, {
        include: [{ model: Activity, as: 'Activities' }],
      });
      // En caso de no encontrar ninguno...
      if (!country) {
        return res.status(404).json({ error: 'Country not found' });
      }
  
      //Devolver...
      return res.json(country);

    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'An error occurred while fetching the country' });
    }
  };
  
  module.exports = getDetailCountryById;
  
  
  
