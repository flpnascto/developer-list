const router = require('express').Router();
const specialty = require('../controllers/SpecialtyController');

router.route('/')
  .get(specialty.getSpecialties)
  .post()
  .put()
  .delete();

module.exports = router;
