const express = require('express');
const router = express.Router();
const suscriptoresController = require('../controllers/suscriptoresController');

router.get('/agregar', suscriptoresController.mostrarFormulario);
router.post('/agregar', suscriptoresController.agregarSuscriptor);
router.get('/id/:id', suscriptoresController.mostrarSuscriptorPorId);
router.get('/fecha', suscriptoresController.mostrarSuscriptoresPorFecha);
router.get('/todos', suscriptoresController.mostrarTodosLosSuscriptores);

module.exports = router;