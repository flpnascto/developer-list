const { Developer } = require('../models');
const { createPostalCode } = require('./PostalCodeService');
const { developerValidation, ValidateException } = require('./validations');

const createDeveloper = async (dataDeveloper) => {
  const { error } = developerValidation(dataDeveloper);
  if (error) throw new ValidateException(error.message);

  const {
    nome, telefone, celular, cep,
  } = dataDeveloper;

  const cepId = await createPostalCode(cep);

  const developer = await Developer.create({
    nome, telefone, celular, cepId,
  });
  return { statusCode: 200, developer };
};

module.exports = {
  createDeveloper,
};
