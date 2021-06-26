const Specialty = require('../services/SpecialtyService');

const getSpecialties = async (_req, res, next) => {
  try {
    const { statusCode, specialties } = await Specialty.getSpecialties();
    res.status(statusCode).json(specialties);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getSpecialties,
};
