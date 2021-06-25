const router = require('express').Router();
const developer = require('../controllers/DeveloperController');

router.route('/')
  .get()
  .post(developer.createDeveloper)
  .put()
  .delete();

module.exports = router;
