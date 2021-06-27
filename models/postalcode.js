/**
 * @swagger
 * components:
 *   schemas:
 *     PostalCode:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the postal code
 *         cep:
 *           type: string
 *           description: The postal code number, only numbers
 *         logradouro:
 *           type: string
 *           description: The street address
 *         bairro:
 *           type: string
 *           description: The name of district
 *         localidade:
 *           type: string
 *           description: The name of City
 *         uf:
 *           type: string
 *           description: The name of state (federative unit)
 *       example:
 *         id: 1
 *         cep: 10200300
 *         logradouro: Street Address
 *         bairro: District
 *         localidade: City Name
 *         uf: ST
 */

module.exports = (sequelize, DataTypes) => {
  const PostalCode = sequelize.define(
    'PostalCode',
    {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
      },
      cep: DataTypes.STRING,
      logradouro: DataTypes.STRING,
      bairro: DataTypes.STRING,
      localidade: DataTypes.STRING,
      uf: DataTypes.STRING,
    },
    {
      timestamps: false,
    },
  );

  return PostalCode;
};
