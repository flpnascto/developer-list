module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Specialties', [
      {
        id: 1,
        nome: 'JAVA',
      },
      {
        id: 2,
        nome: 'PYTHON',
      },
      {
        id: 3,
        nome: 'JAVASCRIPT',
      },
      {
        id: 4,
        nome: 'GOLANG',
      },
      {
        id: 5,
        nome: 'CSHARP',
      },
      {
        id: 6,
        nome: 'ELIXIR',
      },
    ], { timestamps: false });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Specialties', null, {});
  },
};
