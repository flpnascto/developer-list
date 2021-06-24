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

  PostalCode.associate = (models) => {
    PostalCode.hasOne(models.Developer);
  };

  return PostalCode;
};
