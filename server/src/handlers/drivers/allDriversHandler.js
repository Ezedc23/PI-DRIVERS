const getAllDrivers = require("../../controllers/Drivers/getAllDriver");

const allDriversHandler = async (req, res) => {
	try {
		const allDrivers = await getAllDriver();
		res.status(200).json(allDrivers);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

module.exports = allDriversHandler;
