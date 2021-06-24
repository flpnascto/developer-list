module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('DevelopersSpecialties', [
      {
        developer_id: 1,
        specialty_id: 1,
      },
      {
        developer_id: 1,
        specialty_id: 2,
      },
      {
        developer_id: 2,
        specialty_id: 3,
      },
      {
        developer_id: 2,
        specialty_id: 4,
      },
      {
        developer_id: 2,
        specialty_id: 5,
      },
    ], { timestamps: false });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('DevelopersSpecialties', null, {});
  },
};
