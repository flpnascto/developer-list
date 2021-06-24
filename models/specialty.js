module.exports = (sequelize, DataTypes) => sequelize.define(
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
