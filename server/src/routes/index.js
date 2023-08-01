const { Router } = require("express");

// Importar controladores para cada ruta
const {
  getCountries,
  getDetailCountryById,
  getCountriesByName,
  postActivities,
  getActivities,
  getSelectOptions,
} = require("../controllers/index");

// Importar controlador para sincronizar la base de datos con los datos de los países
const { setDatabase } = require("../controllers/setDatabase.js");

const router = Router();

// Definir las rutas y los controladores asociados a cada una de estas
router
  .get("/", setDatabase)
  .get("/get-select-options", getSelectOptions)
  .get("/countries", getCountries)
  .get("/countries/name", getCountriesByName)
  .get("/country/:idCountry", getDetailCountryById)
  .post("/activities", postActivities)
  .get("/activities", getActivities);

module.exports = router;
