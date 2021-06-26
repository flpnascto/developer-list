const Sequelize = require('sequelize');
const config = require('../config/config');
const {
  Developer, PostalCode, Specialty, DevelopersSpecialty,
} = require('../models');
const { createPostalCode } = require('./PostalCodeService');
const { developerValidation, ValidateException } = require('./validations');
const CODE = require('../config/statusCode');

const sequelize = new Sequelize(config.development);

const transactionCreate = async (dataDeveloper) => {
  const t = await sequelize.transaction();
  const {
    nome, telefone, celular, cepId, specialties,
  } = dataDeveloper;
  let newDeveloper = {};
  try {
    newDeveloper = await Developer.create(
      {
        nome, telefone, celular, cepId,
      },
      { transaction: t },
    );

    const newDevelopersCategories = specialties.map(async (id) => {
      await DevelopersSpecialty.create(
        { developer_id: newDeveloper.id, specialty_id: id },
        { transaction: t },
      );
    });

    await Promise.all(newDevelopersCategories);
    await t.commit();
  } catch (error) {
    await t.rollback();
  }
  return newDeveloper;
};

const createDeveloper = async (dataDeveloper) => {
  const { error } = developerValidation(dataDeveloper);
  if (error) throw new ValidateException(error.message);

  const cepId = await createPostalCode(dataDeveloper.cep);
  const developer = await transactionCreate({ ...dataDeveloper, cepId });

  return { statusCode: CODE.OK, developer };
};

const getAllDevelopers = async () => {
  const developers = await Developer.findAll(
    {
      include: [
        { model: PostalCode, as: 'address' },
        { model: Specialty, as: 'specialties', through: { attributes: [] } },
      ],
    },
  );

  return { statusCode: CODE.OK, developers };
};

const findDevelopersBySpecialty = async (specialtyId) => {
  const developers = await Developer.findAll(
    {
      include: [
        { model: PostalCode, as: 'address' },
        {
          model: Specialty, as: 'specialties', through: { attributes: [] }, where: { id: specialtyId },
        },
      ],
    },
  );

  return { statusCode: CODE.OK, developers };
};

module.exports = {
  createDeveloper,
  getAllDevelopers,
  findDevelopersBySpecialty,
};
