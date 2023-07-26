const { Activity } = require('../db.js');

const getActivities = async (req, res) => {
  try {
    const activities = await Activity.findAll();
    return res.json(activities);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'An error occurred while fetching the activities' });
  }
};

module.exports = getActivities ;
