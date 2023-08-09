const { Activity, Country } = require("../db.js");

const postActivities = async (req, res) => {
  const { name, difficulty, duration, season, countryIds } = req.body;

  try {
    
    let activity;

    if (name.includes("-")) {
       activity = await Activity.findByPk(name);
    } else {
      activity = new Activity({
        name,
        difficulty,
        duration,
        season,
      });
      // Guardar actvt en la base de datos
      await activity.save();
    }


    // Relacionar actvt con países indicados
    if (countryIds && countryIds.length > 0) {
      // const country = await Country.findAll({ where: { id: countryIds } });
      const country = await Country.findByPk(countryIds);
      await activity.addCountry(country);
    }

    //Devolver...
    return res
      .status(201)
      .json({ message: "Activity created successfully", activity });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ error: "An error occurred while creating the activity" });
  }
};

module.exports = postActivities;
