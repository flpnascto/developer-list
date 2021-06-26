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

const findDevelopersBySpecialty = async (req, res, next) => {
  const { id } = req.params;
  console.log('specialtyId', id);
  try {
    const { statusCode, developers } = await Developer.findDevelopersBySpecialty(id);
    res.status(statusCode).json(developers);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createDeveloper,
  getAllDevelopers,
  findDevelopersBySpecialty,
};
