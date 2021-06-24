module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('PostalCodes', [
      {
        id: 1,
        cep: '30310-030',
        logradouro: 'Rua Andaluzita',
        bairro: 'Carmo',
        localidade: 'Belo Horizonte',
        uf: 'MG',
      },
      {
        id: 2,
        cep: '01410-001',
        logradouro: 'Alameda Ministro Rocha Azevedo',
        bairro: 'Cerqueira César',
        localidade: 'São Paulo',
        uf: 'SP',
      },
    ], { timestamps: false });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('PostalCodes', null, {});
  },
};
