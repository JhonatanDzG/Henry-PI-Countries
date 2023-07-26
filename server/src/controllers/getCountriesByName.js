const {Country} = require('../db.js');
const { Op } = require('sequelize');


const getCountriesByName = async (req, res) => {
  try {
    const { name } = req.query;

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

    //Si el parámetro coincide exactamente con una ID de tres letras de algún país
    const countryById = await Country.findOne({
      where: {
        id: name.toUpperCase(),
      },
    });

    if (!countriesByName.length && !countryById) {
      return res.status(404).json({ error: 'No countries found with the provided name or ID' });
    }

    return res.json({ countriesByName, countryById });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'An error occurred while fetching the countries' });
  }
};

module.exports = getCountriesByName;
