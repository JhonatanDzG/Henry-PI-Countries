const { Activity } = require("../db.js");

const getActivities = async (req, res) => {
  //Acceder a parámetros
  const { selectOnly } = req.params;

  let filters = {};

  //Validar y Filtrar propiedades en caso de recibir algo por params
  if (selectOnly) {
    filters = {
      attributes: ["name", "id"],
    };
  }

  try {
    //Buscar en el model Activity todas las propiedades requeridas por "filters"
    const activities = await Activity.findAll(filters);
    //Devolver...
    return res.json(activities);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ error: "An error occurred while fetching the activities" });
  }
};

module.exports = getActivities;
