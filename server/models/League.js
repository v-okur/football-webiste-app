'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class League extends Model {
    static associate(models) {
      League.belongsTo(models.Competition, { foreignKey: 'competition_id' });
      League.belongsTo(models.Tier, { foreignKey: 'tier_id' });
    }
  }
  League.init(
    {
      id: {
        type: DataTypes.STRING(10),
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      logo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      link: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      clubs: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      players: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      average_age: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      foreigners: {
        type: DataTypes.FLOAT,
      },
      total_value: {
        type: DataTypes.STRING(25),
      },
      tier_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      country_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      competition_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'League',
      timestamps: false,
      freezeTableName: true,
    },
  );
  return League;
};
