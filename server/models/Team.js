'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Team extends Model {
    static associate(models) {
      this.belongsTo(models.Competition, { foreignKey: 'competition_id' });
      this.belongsTo(models.League, { foreignKey: 'league_id' });
      this.belongsTo(models.Player, {
        as: 'Captain',
        foreignKey: 'captain_id',
      });
    }
  }

  Team.init(
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
      logo: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      league_id: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      competition_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      captain_id: {
        type: DataTypes.STRING(25),
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: 'Team',
      timestamps: false,
      freezeTableName: true,
    },
  );

  return Team;
};
