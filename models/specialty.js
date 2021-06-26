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
