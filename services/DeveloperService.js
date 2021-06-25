const { Developer } = require('../models');
const { developerValidation, ValidateException } = require('./validations');

const createDeveloper = async (dataDeveloper) => {
  const { error } = developerValidation(dataDeveloper);
  if (error) throw new ValidateException(error.message);

  const {
    nome, telefone, celular, cepId,
  } = dataDeveloper;
  const developer = await Developer.create({
    nome, telefone, celular, cepId,
  });
  return { statusCode: 200, developer };
};

module.exports = {
  createDeveloper,
};
