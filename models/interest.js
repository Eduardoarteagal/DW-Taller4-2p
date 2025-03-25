'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Interes extends Model {
    static associate(models) {
      Interes.belongsToMany(models.Suscriptor, {
        through: 'suscriptorinteres',
        as: 'suscriptores',
        foreignKey: 'interest_id'
      });
    }
  }
  Interes.init({
    descripcion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'interest',
  });
  return Interes;
};