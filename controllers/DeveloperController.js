const Developer = require('../services/DeveloperService');

const createDeveloper = async (req, res) => {
  const dataDeveloper = req.body;

  const { statusCode, developer } = await Developer.createDeveloper(dataDeveloper);
  res.status(statusCode).json(developer);
};

module.exports = {
  createDeveloper,
};
