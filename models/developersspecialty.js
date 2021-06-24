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
      foreignKey: 'developerId',
      otherKey: 'specialtyId',
    });

    models.Specialty.belongsToMany(models.Developer, {
      as: 'developers',
      through: DevelopersSpecialty,
      foreignKey: 'specialtyId',
      otherKey: 'developerId',
    });
  };
  DevelopersSpecialty.removeAttribute('id');
  return DevelopersSpecialty;
};
