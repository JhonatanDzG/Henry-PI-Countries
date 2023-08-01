const { Country } = require("../db.js");
const { Op } = require("sequelize");

const getCountriesByFilters = async (req, res) => {
  const { skip, search, filters } = req.query;
  const limit = 15;

  try {
    const count = await Country.count({ ...searchParams });
    const pages = Math.ceil(count / limit);
    const countries = await Country.findAll({
      offset: skip,
      limit,
      ...searchParams,
    });

    return res.json({ countries, pages });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ error: "An error occurred while fetching the countries" });
  }
};

module.exports = getCountriesByFilters;
