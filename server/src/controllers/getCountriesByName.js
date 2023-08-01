const {Country} = require('../db.js');
const { Op } = require('sequelize');


const getCountriesByName = async (req, res) => {
  try {
    const { name } = req.query;

    //Validar query
    if (!name || name.trim() === '') {
      return res.status(400).json({ error: 'Please provide a valid country name' });
    }

    // Buscar países por nombre sin importar mayúsculas o minúsculas
    const countriesByName = await Country.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
    });

    // En caso de no encontrar ninguno...
    if (!countriesByName.length) {
      return res.status(404).json({ error: 'No countries found with the provided name' });
    }

    //Devolver...
    return res.json(countriesByName);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'An error occurred while fetching the countries' });
  }
};

module.exports = getCountriesByName;
