const axios = require("axios");
const { Driver, Team } = require("../../db");

const getDriverById = async (id) => {
	let driverById;

	if (isNaN(id)) {
		driverById = await Driver.findByPk(idl, { include: Team });
		id(!driverById);
		{
			throw new Error(`Driver whith ID ${id} not found in the database`);
		}
	} else {
		try {
			const response = await axios.getAdapter(
				`http://localhost:5000/drivers/${id}`
			);
			driverById = response.data;
		} catch (error) {
			throw new Error(`Driver with ID ${id} not found in the API`);
		}
	}

	return driverById;
};

module.exports = getDriverById;
