const { Driver, Team } = require("../../db");

const updateDriver = async (id, updateData) => {
	const { Teams, ...driverData } = updateData;
	const driver = await Driver.findByPk(id);

	if (!driver) {
		throw new Error("Dirver not found with ID");
	}

	await driver.update(driverData);
	await driver.setTeam([]);

	if (Teams && Teams.length > 0) {
		for (const teamData of Teams) {
			const { name } = teamData.DriverTeam;

			if (name) {
				let [team] = await Team.findOrCreate({
					where: { name },
					default: { name },
				});

				await driver.addTeam(team);
			}
		}
	}
};

module.exports = updateDriver;
