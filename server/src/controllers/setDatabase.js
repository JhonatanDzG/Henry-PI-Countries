const { getCountries } = require("../handlers/getCountries.handler");
const { mapDataToCountryModel } = require("../handlers/setData");
const axios = require("axios");

const setDatabase = async (req, res) => {
  try {

    const hasCountries = await getCountries();

    if (hasCountries.length) return res.json(hasCountries);

    const { data } = await axios.get("http://localhost:5000/countries");

    // Map los datos al formato necesario para el modelo Country
    const countries = await mapDataToCountryModel(data);

    return res.json(countries);
  } catch (error) {
    console.error("Error al guardar los datos en la base de datos:", error);
    res.status(500).json({
      success: false,
      error: "Error al guardar los datos en la base de datos.",
    });
  }
};

module.exports = { setDatabase };
