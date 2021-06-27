const router = require('express').Router();
const specialty = require('../controllers/SpecialtyController');
const developer = require('../controllers/DeveloperController');

/**
 * @swagger
 * /specialties:
 *   get:
 *     summary: Returns the list of all the specialties
 *     tags: [Specialties]
 *     responses:
 *       200:
 *         description: The list of the specialties
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Specialty'
 */

router.route('/')
  .get(specialty.getSpecialties)
  .post()
  .put()
  .delete();

/**
 * @swagger
 * /specialties/{id}:
 *   get:
 *     summary: Returns the list of all the developers by a specialty id
 *     tags: [Specialties]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The specialty id
 *     responses:
 *       200:
 *         description: The list of developers filtered by specialty id
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               allOf:
 *                 - $ref: '#/components/schemas/Developer'
 *                 - type: object
 *                   properties:
 *                     address:
 *                       $ref: '#/components/schemas/PostalCode'
 *                 - type: object
 *                   properties:
 *                     specialties:
 *                       $ref: '#/components/schemas/Specialty'
 */

router.route('/:id')
  .get(developer.findDevelopersBySpecialty)
  .post()
  .put()
  .delete();

module.exports = router;
