const { Specialty } = require('../models');
const CODE = require('../config/statusCode');

const getSpecialties = async () => {
  const specialties = await Specialty.findAll();
  return { statusCode: CODE.OK, specialties };
};

module.exports = {
  getSpecialties,
};
