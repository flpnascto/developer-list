const Developer = require('../services/DeveloperService');

const createDeveloper = async (req, res, next) => {
  const dataDeveloper = req.body;
  try {
    const { statusCode, developer } = await Developer.createDeveloper(dataDeveloper);
    res.status(statusCode).json(developer);
  } catch (error) {
    console.log('Controller error:', error.message);
    next(error);
  }
};

module.exports = {
  createDeveloper,
};
