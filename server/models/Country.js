'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Country extends Model {
    static associate(models) {
      Country.hasMany(models.League, { foreignKey: 'country_id' });
      Country.belongsToMany(models.Player, { through: models.CountryJunction });
    }
  }
  Country.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      flag: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Country',
      timestamps: false,
      freezeTableName: true,
    },
  );
  return Country;
};
