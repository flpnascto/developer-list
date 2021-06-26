const router = require('express').Router();
const specialty = require('../controllers/SpecialtyController');
const developer = require('../controllers/DeveloperController');

router.route('/')
  .get(specialty.getSpecialties)
  .post()
  .put()
  .delete();

router.route('/:id')
  .get(developer.findDevelopersBySpecialty)
  .post()
  .put()
  .delete();

module.exports = router;
