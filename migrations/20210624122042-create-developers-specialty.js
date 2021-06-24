module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('DevelopersSpecialties', {
      developer_id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'Developers',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      specialty_id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'Specialties',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('DevelopersSpecialties');
  },
};
