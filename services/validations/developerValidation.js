const Joi = require('joi');

module.exports = (dataDeveloper) => {
  const schema = Joi.object({
    nome: Joi.string().min(3).max(120).required(),
    telefone: Joi.string().regex(/^([0-9]{10})*$/),
    celular: Joi.string().regex(/^([0-9]{11})*$/).required(),
    cep: Joi.string().length(8).required(),
  });
  return schema.validate(dataDeveloper);
};
