const { Country, Activity } = require("../db.js");
const { Op } = require("sequelize");

const getCountries = async (req, res) => {
  const { skip, search, order, continent, activity } = req.query;

  let searchParams = {};
  const limit = 15;

  if (search) {
    searchParams = {
      where: {
        name: {
          [Op.iLike]: `%${search}%`,
        },
      },
    };
  }

  if (order) {
    searchParams = {
      ...searchParams,
      order: [["name", order]],
    };
  }

  if (continent) {
    searchParams = {
      ...searchParams,
      where: {
        ...searchParams.where,
        continent,
      },
    };
  }

  if (activity) {
    const include = [
      {
        model: Activity,
        where: {
          id: activity,
        },
        as: "Activities",
      },
    ];

    if (Object.keys(searchParams).length) {
      include.push({ ...searchParams });
    }

    searchParams = {
      include,
    };

    searchParams = {
      include: {
        model: Activity,
        where: {
          id: activity,
        },
        as: "Activities",
      },
    };
  }

  try {
    console.log("searchParams", searchParams);

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

module.exports = getCountries;
