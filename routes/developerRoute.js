const router = require('express').Router();
const developer = require('../controllers/DeveloperController');

router.route('/')
  .get(developer.getAllDevelopers)
  .post(developer.createDeveloper)
  .put()
  .delete();

module.exports = router;
