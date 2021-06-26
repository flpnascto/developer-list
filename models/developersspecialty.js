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
