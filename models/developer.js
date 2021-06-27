/**
 * @swagger
 * components:
 *   schemas:
 *     Developer:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the developer
 *         nome:
 *           type: string
 *           description: The name of developer
 *         telefone:
 *           type: string
 *           description: The phone number of developer
 *         celular:
 *           type: string
 *           description: The mobile number of developer
 *         cepId:
 *           type: string
 *           description: Foreign key associate with id in model PostalCode
 *         createdAt:
 *           type: string
 *           description: Date and time of registration in the database
 *         updatedAt:
 *           type: timestamp
 *           description: Date and time of last update in the database
 *       example:
 *         id: 1
 *         nome: Developer Name
 *         telefone: '02010121815'
 *         celular: '4402007061954'
 *         cepId: 1
 *         createdAt: '2021-06-24T13:50:17.000Z'
 *         updatedAt: '2021-06-24T13:50:17.000Z'
 */

module.exports = (sequelize, DataTypes) => {
  const Developer = sequelize.define('Developer', {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    nome: DataTypes.STRING,
    telefone: DataTypes.STRING,
    celular: DataTypes.INTEGER,
    cepId: DataTypes.INTEGER,
  }, {});

  Developer.associate = (models) => {
    Developer.belongsTo(models.PostalCode,
      { foreignKey: 'id', as: 'address' });
  };

  return Developer;
};
