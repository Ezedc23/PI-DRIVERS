const getDriverById = require("../../controllers/Drivers/getDriverById");

const driversByIdHandler = async (req, res) => {
	const { id } = req.params;
	try {
		const driverById = await getDriverById(id);
		res.status(200).json(driverById);
	} catch (error) {
		res.satatus(400).json({ error: error.message });
	}
};

module.exports = driversByIdHandler;
