const { Country } = require('../db');

const getDetailCountryById = async (req, res) => {
    const { idPais } = req.params;

    try {
        // Verificar: ID validez
        const parsedId = parseInt(idPais);
        if (isNaN(parsedId) || parsedId <= 0) {
            return res.status(400).json({ error: 'Invalid country ID. Please provide a valid numeric ID' });
        }

        const country = await Country.findByPk(parsedId);

        if (!country) {
            return res.status(404).json({ error: 'Country with ID not found' });
        }

        return res.status(200).json(country);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'An error occurred while attempting to fetch the country' });
    }
};

module.exports = getDetailCountryById;
