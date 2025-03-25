'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Suscriptor extends Model {
    static associate(models) {
      Suscriptor.belongsToMany(models.Interes, {
        through: 'suscriptorinteres',
        as: 'intereses',
        foreignKey: 'suscriptor_id',
      });
    }
  }
  Suscriptor.init({
    nombre: DataTypes.STRING,
    email: DataTypes.STRING,
    fecha_registro: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Suscriptor',
  });
  return Suscriptor;
};