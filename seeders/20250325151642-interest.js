'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('interests', [
      { descripcion: 'Tecnología', createdAt: new Date(), updatedAt: new Date() },
      { descripcion: 'Ciberseguridad', createdAt: new Date(), updatedAt: new Date() },
      { descripcion: 'Desarrollo de Software', createdAt: new Date(), updatedAt: new Date() },
      { descripcion: 'Inteligencia Artificial', createdAt: new Date(), updatedAt: new Date() },
      { descripcion: 'Ciencia de Datos', createdAt: new Date(), updatedAt: new Date() },
      { descripcion: 'Blockchain', createdAt: new Date(), updatedAt: new Date() },
      { descripcion: 'Internet de las Cosas (IoT)', createdAt: new Date(), updatedAt: new Date() },
      { descripcion: 'Marketing Digital', createdAt: new Date(), updatedAt: new Date() },
      { descripcion: 'Videojuegos', createdAt: new Date(), updatedAt: new Date() },
      { descripcion: 'Finanzas y Criptomonedas', createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('interests', null, {});
  }
};
