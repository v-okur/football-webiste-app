'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tier extends Model {
    static associate(models) {
      Tier.hasMany(models.League, { foreignKey: 'tier_id' });
    }
  }
  Tier.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(128),
      },
    },
    {
      sequelize,
      modelName: 'Tier',
      timestamps: false,
      freezeTableName: true,
    },
  );
  return Tier;
};
