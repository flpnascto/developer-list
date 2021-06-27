const router = require('express').Router();
const developer = require('../controllers/DeveloperController');

/**
 * @swagger
 * /developers:
 *   get:
 *     summary: Returns the list of all the developers
 *     tags: [Developers]
 *     responses:
 *       200:
 *         description: The list of all developers with address and specialties
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
 *   post:
 *     summary: Create a new Developer
 *     tags: [Developers]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nome
 *               - celular
 *               - cep
 *               - specialties
 *             properties:
 *               nome:
 *                 type: string
 *                 minLength: 3
 *                 maxLength: 120
 *                 description: The name of developer
 *               telefone:
 *                 type: string
 *                 pattern: '^([0-9]{10})*$'
 *                 description: The phone number of developer
 *               celular:
 *                 type: string
 *                 pattern: '^([0-9]{11})*$'
 *                 description: The mobile number of developer
 *               cep:
 *                 type: string
 *                 minLength: 8
 *                 maxLength: 8
 *                 description: The postal code of developer
 *               specialties:
 *                 description: Array with specialties id
 *                 type: array
 *                 items:
 *                   type: integer
 *                 minItems: 2
 *                 uniqueItems: true
 *     responses:
 *       200:
 *         description: The developer was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Developer'
 *       400:
 *         description: Error with a associated message
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       500:
 *         description: Internal server erro with message
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */

router.route('/')
  .get(developer.getAllDevelopers)
  .post(developer.createDeveloper)
  .put()
  .delete();

module.exports = router;
