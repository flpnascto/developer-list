const { PostalCode } = require('../models');
const api = require('./apiService');

const createPostalCode = async (postalCode) => {
  const {
    cep,
    logradouro,
    bairro,
    localidade,
    uf,
    // error,
  } = await api.requestAddressData(postalCode);

  const { id } = await PostalCode.create({
    cep, logradouro, bairro, localidade, uf,
  });

  return id;
};

module.exports = {
  createPostalCode,
};
