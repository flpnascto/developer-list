const routes = require('express').Router();
const developerRoute = require('./developerRoute');
const specialtyRoute = require('./specialtyRoute');

/**
 * @swagger
 * tags:
 *   - name: Developers
 *     description: The developer managing API
 *   - name: Specialties
 *     description: Access all specialties indexed in API
 */

routes.use('/developers', developerRoute);
routes.use('/specialties', specialtyRoute);

module.exports = routes;
