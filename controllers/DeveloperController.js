const Developer = require('../services/DeveloperService');

const createDeveloper = async (req, res, next) => {
  const dataDeveloper = req.body;
  try {
    const { statusCode, developer } = await Developer.createDeveloper(dataDeveloper);
    res.status(statusCode).json(developer);
  } catch (error) {
    next(error);
  }
};

const getAllDevelopers = async (_req, res, next) => {
  try {
    const { statusCode, developers } = await Developer.getAllDevelopers();
    res.status(statusCode).json(developers);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createDeveloper,
  getAllDevelopers,
};
