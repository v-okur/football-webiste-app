'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Player extends Model {
    static associate(models) {
      Player.belongsTo(models.Team, { foreignKey: 'team_id' });
      Player.belongsTo(models.Team, {
        as: 'previousTeam',
        foreignKey: 'previous_team',
      });
      Player.belongsToMany(models.Country, { through: models.CountryJunction });
    }
  }
  Player.init(
    {
      id: {
        type: DataTypes.STRING(25),
        primaryKey: true,
        allowNull: false,
      },
      number: {
        type: DataTypes.INTEGER,
      },
      image: {
        type: DataTypes.STRING,
      },
      name: {
        type: DataTypes.STRING,
      },
      date_of_birth: {
        type: DataTypes.DATEONLY,
      },

      position: {
        type: DataTypes.STRING(45),
      },
      transfer_status: {
        type: DataTypes.STRING,
      },
      height: {
        type: DataTypes.FLOAT,
      },
      foot: {
        type: DataTypes.ENUM('left', 'right', 'both'),
      },
      contract_start: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      contract_end: {
        type: DataTypes.DATEONLY,
      },
      team_id: {
        type: DataTypes.INTEGER,
      },
      previous_team_id: {
        type: DataTypes.INTEGER,
      },
      current_value: {
        type: DataTypes.STRING(45),
      },
      previous_value: {
        type: DataTypes.STRING(45),
      },
    },
    {
      sequelize,
      modelName: 'Player',
      timestamps: false,
      freezeTableName: true,
    },
  );
  return Player;
};
