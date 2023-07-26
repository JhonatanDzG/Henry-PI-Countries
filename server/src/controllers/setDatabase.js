const{mapDataToCountryModel} = require('../handlers/setData')
const fs = require('fs').promises;


const setDatabase = async (req, res) => {
  
  try {
    const rawData = await fs.readFile('./api/db.json', 'utf-8');
    const data = JSON.parse(rawData); 

    
    // Map los datos al formato necesario para el modelo Country
    const countries = await mapDataToCountryModel(data);
    
    return res.json({countries})

  } catch (error) {
    console.error('Error al guardar los datos en la base de datos:', error);
    res.status(500).json({ success: false, error: 'Error al guardar los datos en la base de datos.' });
  }
};

module.exports = {setDatabase};
