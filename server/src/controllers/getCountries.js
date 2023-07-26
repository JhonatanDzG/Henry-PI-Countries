const {Country} = require('../db.js')

const getCountries = async (req, res) => {
  try { 
    const countries = await Country.findAll();

    return res.json(countries);

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'An error occurred while fetching the countries' });
  }
};

module.exports = getCountries;
