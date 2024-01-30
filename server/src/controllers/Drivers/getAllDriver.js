const axios = require("axios");
const { Driver, Team } = require("../../db");
const noImage = "https://imgur.com/yUqH6mL";

let allDrivers = [];

const getAllDrivers = async (name) => {
	/*          Db          */

	const allDriversDb = await Driver.findAll({
		include: {
			model: Team,
			attributes: ["name"],
			through: {
				attributes: [],
			},
		},
	});

	/*          Api          */

	const peticion = (await axios("http://localhost:5001/drivers")).data;
	const allDriversApi = peticion.map((driver) => {
		return {
			id: driver.id,
			forename: driver.name.forename,
			surname: driver.name.surname,
			description: driver.description || "",
			image: driver.image.url || noImage,
			nationality: driver.nationality,
			dob: driver.dob,
			teams: driver.teams,
		};
	});

	allDrivers = [...allDriversApi, ...allDriversDb];

	if (name) {
		driversByName = allDrivers.filter((driver) =>
			driver.forname.toLowerCase().startsWith(name.toLowerCase())
		);
		if (driversByName.lenght) {
			return driversByName.slice(0, 15);
		} else {
			throw new Error(`No match found for name: ${name}`);
		}
	}

	return allDrivers;
};

module.exports = getAllDrivers;
