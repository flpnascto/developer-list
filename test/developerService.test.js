const DeveloperService = require('../services/DeveloperService');
const { Developer } = require('../models');
const { createPostalCode } = require('../services/PostalCodeService');
const newDeveloper = require('./configs/newDeveloper');

jest.mock('../models');
jest.mock('../services/PostalCodeService');
jest.mock('../services/DeveloperService');

describe('Developer Service', () => {
  let dataDeveloper = {};
  beforeEach(() => {
    dataDeveloper = {
      nome: 'Developer Name',
      celular: '31999999999',
      cep: '30350220',
      specialties: [1, 2],
    };
  });
  test('Não é possível registrar um desenvolvedor sem o campo "nome"', async () => {
    delete dataDeveloper.nome;
    try {
      await DeveloperService.createDeveloper(dataDeveloper);
    } catch (error) {
      expect(error.statusCode).toEqual(400);
      expect(error.message).toEqual('"nome" is required');
    }
  });

  test('Não é possível registrar um desenvolvedor com o campo "nome" vazio', async () => {
    dataDeveloper.nome = '';
    try {
      await DeveloperService.createDeveloper(dataDeveloper);
    } catch (error) {
      expect(error.statusCode).toEqual(400);
      expect(error.message).toEqual('"nome" is not allowed to be empty');
    }
  });

  test('Não é possível registrar um desenvolvedor se o campo "nome" tiver menos do que 3 caracteres', async () => {
    dataDeveloper.nome = 'Pi';
    try {
      await DeveloperService.createDeveloper(dataDeveloper);
    } catch (error) {
      expect(error.statusCode).toEqual(400);
      expect(error.message).toEqual('"nome" length must be at least 3 characters long');
    }
  });

  test('Não é possível registrar um desenvolvedor se o campo "nome" tiver mais do que 120 caracteres', async () => {
    dataDeveloper.nome = 'Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer D';
    try {
      await DeveloperService.createDeveloper(dataDeveloper);
    } catch (error) {
      expect(error.statusCode).toEqual(400);
      expect(error.message).toEqual('"nome" length must be less than or equal to 120 characters long');
    }
  });

  test('Não é possível registrar um desenvolvedor com o campo "telefone" vazio', async () => {
    dataDeveloper.telefone = '';
    try {
      await DeveloperService.createDeveloper(dataDeveloper);
    } catch (error) {
      expect(error.statusCode).toEqual(400);
      expect(error.message).toEqual('"telefone" is not allowed to be empty');
    }
  });

  test('Não é possível registrar um desenvolvedor se o campo "telefone" não for uma string com 10 números', async () => {
    dataDeveloper.telefone = '98';
    try {
      await DeveloperService.createDeveloper(dataDeveloper);
    } catch (error) {
      expect(error.statusCode).toEqual(400);
      expect(error.message).toEqual(`"telefone" with value "${dataDeveloper.telefone}" fails to match the required pattern: /^([0-9]{10})*$/`);
    }
  });

  test('Não é possível registrar um desenvolvedor sem o campo "celular"', async () => {
    delete dataDeveloper.celular;
    try {
      await DeveloperService.createDeveloper(dataDeveloper);
    } catch (error) {
      expect(error.statusCode).toEqual(400);
      expect(error.message).toEqual('"celular" is required');
    }
  });

  test('Não é possível registrar um desenvolvedor com o campo "celular" vazio', async () => {
    dataDeveloper.celular = '';
    try {
      await DeveloperService.createDeveloper(dataDeveloper);
    } catch (error) {
      expect(error.statusCode).toEqual(400);
      expect(error.message).toEqual('"celular" is not allowed to be empty');
    }
  });

  test('Não é possível registrar um desenvolvedor se o campo "celular" não for uma string com 11 números', async () => {
    dataDeveloper.celular = '98';
    try {
      await DeveloperService.createDeveloper(dataDeveloper);
    } catch (error) {
      expect(error.statusCode).toEqual(400);
      expect(error.message).toEqual(`"celular" with value "${dataDeveloper.celular}" fails to match the required pattern: /^([0-9]{11})*$/`);
    }
  });

  test('Não é possível registrar um desenvolvedor sem o campo "cep"', async () => {
    delete dataDeveloper.cep;
    try {
      await DeveloperService.createDeveloper(dataDeveloper);
    } catch (error) {
      expect(error.statusCode).toEqual(400);
      expect(error.message).toEqual('"cep" is required');
    }
  });

  test('Não é possível registrar um desenvolvedor com o campo "cep" vazio', async () => {
    dataDeveloper.cep = '';
    try {
      await DeveloperService.createDeveloper(dataDeveloper);
    } catch (error) {
      expect(error.statusCode).toEqual(400);
      expect(error.message).toEqual('"cep" is not allowed to be empty');
    }
  });

  test('Não é possível registrar um desenvolvedor se o campo "cep" não for uma string com 8 números', async () => {
    dataDeveloper.cep = '98';
    try {
      await DeveloperService.createDeveloper(dataDeveloper);
    } catch (error) {
      expect(error.statusCode).toEqual(400);
      expect(error.message).toEqual(`"cep" with value "${dataDeveloper.cep}" fails to match the required pattern: /^([0-9]{8})*$/`);
    }
  });

  test('Não é possível registrar um desenvolvedor sem o campo "specialties"', async () => {
    delete dataDeveloper.specialties;
    try {
      await DeveloperService.createDeveloper(dataDeveloper);
    } catch (error) {
      expect(error.statusCode).toEqual(400);
      expect(error.message).toEqual('"specialties" is required');
    }
  });

  test('Não é possível registrar um desenvolvedor se o campo "specialties" não for um array', async () => {
    dataDeveloper.specialties = '98';
    try {
      await DeveloperService.createDeveloper(dataDeveloper);
    } catch (error) {
      expect(error.statusCode).toEqual(400);
      expect(error.message).toEqual('"specialties" must be an array');
    }
  });

  test('Não é possível registrar um desenvolvedor se o campo "specialties" for um array com menos de dois items', async () => {
    dataDeveloper.specialties = [];
    try {
      await DeveloperService.createDeveloper(dataDeveloper);
    } catch (error) {
      expect(error.statusCode).toEqual(400);
      expect(error.message).toEqual('"specialties" must contain at least 2 items');
    }
  });

  test('Não é possível registrar um desenvolvedor se o campo "specialties" não for um array de números inteiros', async () => {
    dataDeveloper.specialties = ['A', 2];
    try {
      await DeveloperService.createDeveloper(dataDeveloper);
    } catch (error) {
      expect(error.statusCode).toEqual(400);
      expect(error.message).toEqual('"specialties[0]" must be a number');
    }
  });

  // test('É possível cadastrar um novo desenvolvedor', async () => {
  //   createPostalCode.mockImplementation(() => Promise.resolve(1));
  //   DeveloperService.transactionCreate
  //     .mockImplementation((dataDeveloper) => Promise.resolve(newDeveloper));

  //   // console.log('developerrr:', developer);
  //   const response = await DeveloperService.createDeveloper(dataDeveloper);
  //   console.log('resposta: ', response);
  //   expect(response.statusCode).toEqual(201);
  //   expect(response.developer).toEqual(newDeveloper);
  // });
});
