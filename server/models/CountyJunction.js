'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CountryJunction extends Model {}
  CountryJunction.init(
    {},
    {
      sequelize,
      modelName: 'CountryJunction',
      timestamps: false,
      freezeTableName: true,
    },
  );
  return CountryJunction;
};
