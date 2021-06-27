/**
 * @swagger
 * components:
 *   schemas:
 *     DevelopersSpecialty:
 *       type: object
 *       properties:
 *         developer_id:
 *           type: integer
 *           description: Foreign key associate with id in model Developer
 *         specialty_id:
 *           type: integer
 *           description: Foreign key associate with id in model Specialty
 *       example:
 *         id: 1
 *         nome: 1
 */

module.exports = (sequelize, _DataTypes) => {
  const DevelopersSpecialty = sequelize.define(
    'DevelopersSpecialty',
    {},
    { timestamps: false },
  );
  DevelopersSpecialty.associate = (models) => {
    models.Developer.belongsToMany(models.Specialty, {
      as: 'specialties',
      through: DevelopersSpecialty,
      foreignKey: 'developer_id',
      otherKey: 'specialty_id',
    });

    models.Specialty.belongsToMany(models.Developer, {
      as: 'developers',
      through: DevelopersSpecialty,
      foreignKey: 'specialty_id',
      otherKey: 'developer_id',
    });
  };
  DevelopersSpecialty.removeAttribute('id');
  return DevelopersSpecialty;
};
