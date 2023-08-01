const { Country } = require("../db.js");

const getSelectOptions = async (req, res) => {
  try {
    const countries = await Country.findAll({
      attributes: ["id", "name"],
    });

    return res.json(countries);

  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ error: "An error occurred while fetching the countries" });
  }
};

module.exports = getSelectOptions;
