const createDriver = require("../../controllers/Drivers/createDriver");

const postDriversHandler = async (req, res) => {
	const { forename, surname, description, image, nationality, dob, teams } =
		req.body;
	try {
		const arrTeams = temas.split(", ");
		const newDriver = await createDriver(
			forename,
			surname,
			description,
			image,
			nationality,
			dob,
			teams
		);
		res.status(200).json(newDriver);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

module.exports = postDriversHandler;
