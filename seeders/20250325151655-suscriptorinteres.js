'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('suscriptorinteres', [
      { suscriptor_id: 1, interes_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { suscriptor_id: 1, interes_id: 3, createdAt: new Date(), updatedAt: new Date() },
      { suscriptor_id: 2, interes_id: 5, createdAt: new Date(), updatedAt: new Date() },
      { suscriptor_id: 2, interes_id: 7, createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('suscriptorinteres', null, {});
  }
};