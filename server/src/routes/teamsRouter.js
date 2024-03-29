const { Router } = require("express");
const allTeamsHandler = require("../handlers/teams/allTeamsHandler");

const teamsRouter = Router();

teamsRouter.get("/", allTeamsHandler);

module.exports = teamsRouter;
