const { getCountries } = require("../handlers/getCountries.handler");
const { mapDataToCountryModel } = require("../handlers/setData");
// const fs = require("fs").promises;
const axios = require("axios") ;

const setDatabase = async (req, res) => {
  try {
    const hasCountries = await getCountries();

    if (hasCountries.length) return res.json(hasCountries);

    // const rawData = await fs.readFile("./api/db.json", "utf-8");
    // const data = JSON.parse(rawData);

    const {data} = await axios.get("http://localhost:5000/countries");


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
