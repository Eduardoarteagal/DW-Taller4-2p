'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SuscriptorInteres extends Model {
    static associate(models) {
    }
  }
  SuscriptorInteres.init({
    suscriptor_id: DataTypes.INTEGER,
    interes_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'suscriptorinteres',
  });
  return SuscriptorInteres;
};