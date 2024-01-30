const deleteDriver = require("../../controllers/Drivers/deleteDriver");

const deleteDriverHandler = async (req, res) => {
	const { id } = req.params;
	try {
		const driverDeleted = await deleteDriver(id.trim());
		res.status(200).json(driverDeleted);
	} catch (error) {
		res.satatus(400).json({ error: error.message });
	}
};

module.exports = deleteDriverHandler;
