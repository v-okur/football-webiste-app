'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Competition extends Model {
    static associate(models) {
      Competition.hasMany(models.Team, { foreignKey: 'competition_id' });
      Competition.hasMany(models.League, { foreignKey: 'competition_id' });
    }
  }
  Competition.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(128),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Competition',
      timestamps: false,
      freezeTableName: true,
    },
  );
  return Competition;
};
