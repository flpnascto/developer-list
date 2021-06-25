const { Developer } = require('../models');

const createDeveloper = async (dataDeveloper) => {
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
