/**
 * @swagger
 * components:
 *   schemas:
 *     Specialty:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the specialty
 *         nome:
 *           type: string
 *           description: The specialty name
 *       example:
 *         id: 1
 *         nome: JAVASCRIPT
 */

module.exports = (sequelize, DataTypes) => {
  const Specialty = sequelize.define(
    'Specialty',
    {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
      },
      nome: DataTypes.STRING,
    },
    {
      timestamps: false,
    },
  );

  return Specialty;
};
