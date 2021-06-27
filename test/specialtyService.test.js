const { Specialty } = require('../models');
const SpecialtyService = require('../services/SpecialtyService');
const specialtyList = require('./configs/specialtyList');

jest.mock('../models');

describe('Specialty Services', () => {
  test('Retorna a lista de especialidades', async () => {
    Specialty.findAll.mockImplementation(() => Promise.resolve(specialtyList));
    const response = await SpecialtyService.getSpecialties();
    expect(response.statusCode).toEqual(200);
    expect(response.specialties).toEqual(specialtyList);
  });
});
