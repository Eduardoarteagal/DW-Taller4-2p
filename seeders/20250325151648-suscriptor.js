'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('suscriptors', [
      { nombre: 'Juan Pérez', email: 'juan@example.com', fecha_registro: new Date(), createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'María García', email: 'maria@example.com', fecha_registro: new Date(), createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('suscriptors', null, {});
  }
};