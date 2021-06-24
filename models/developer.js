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
      { foreignKey: 'id', as: 'cep' });
  };

  return Developer;
};
