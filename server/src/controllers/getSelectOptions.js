const { Country, Activity } = require("../db.js");
const sequelize = require("sequelize");

const getSelectOptions = async (req, res) => {
  const { field } = req.query;

  try {
    const options = { attributes: [] };

    switch (field) {
      case "activities":
        const activities = await Activity.findAll({
          attributes: ["id", "name"],
        });
        return res.json(activities);

      case "continents":
        options.attributes = [
          [sequelize.fn("DISTINCT", sequelize.col("continent")), "continent"],
        ];
        break;
      default:
        options.attributes = ["id", "name"];
        break;
    }

    const countries = await Country.findAll(options);

    return res.json(countries);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ error: "An error occurred while fetching the countries" });
  }
};

module.exports = getSelectOptions;
