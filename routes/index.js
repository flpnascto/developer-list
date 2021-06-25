const routes = require('express').Router();
const developerRoute = require('./developerRoute');

routes.use('/developers', developerRoute);

module.exports = routes;
