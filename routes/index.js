const routes = require('express').Router();
const developerRoute = require('./developerRoute');
const specialtyRoute = require('./specialtyRoute');

routes.use('/developers', developerRoute);
routes.use('/specialties', specialtyRoute);

module.exports = routes;
