const { Activity, Country } = require('../db.js');

const postActivities = async (req, res) => {
    const { name, difficulty, duration, season, countryIds } = req.body;
    
    try {
    // Crear una nueva instancia del modelo Activity
    const activity = new Activity({
      name,
      difficulty,
      duration,
      season,
    });

    // Guardar actvt en la base de datos
    await activity.save();

    // Relacionar actvt con países indicados
    if (countryIds && countryIds.length > 0) {
      const countries = await Country.findAll({ where: { id: countryIds } });
      await activity.setCountries(countries);
    }

    //Devolver...
    return res.status(201).json({ message: 'Activity created successfully', activity });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'An error occurred while creating the activity' });
  }
};

module.exports = postActivities ;



