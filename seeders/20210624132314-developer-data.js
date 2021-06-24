module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Developers', [
      {
        id: 1,
        nome: 'Augusta Ada Byron King',
        telefone: '02010121815',
        celular: '4402027111852',
        cepId: 1,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        id: 2,
        nome: 'Alan Mathison Turing ',
        telefone: '02023061912',
        celular: '4402007061954',
        cepId: 2,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Developers', null, {});
  },
};
