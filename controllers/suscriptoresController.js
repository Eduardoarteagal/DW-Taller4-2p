const { Suscriptor, Interes, SuscriptorInteres, Sequelize } = require('../models');

module.exports = {
  async mostrarFormulario(req, res) {
    try {
      const intereses = await Interes.findAll();
      res.render('suscriptor_form', { intereses });
    } catch (error) {
      res.status(500).send(error);
    }
  },

  async agregarSuscriptor(req, res) {
    try {
      const suscriptor = await Suscriptor.create({
        nombre: req.body.nombre,
        email: req.body.email,
        fecha_registro: req.body.fecha_registro,
      });

      if (req.body.intereses) {
        const interesesIds = Array.isArray(req.body.intereses) ? req.body.intereses : [req.body.intereses];
        for (const interesId of interesesIds) {
          await SuscriptorInteres.create({
            suscriptor_id: suscriptor.id,
            interes_id: interesId,
          });
        }
      }

      res.redirect('/suscriptores/lista'); // Redirige a la lista de suscriptores
    } catch (error) {
      res.status(500).send(error);
    }
  },

  async mostrarSuscriptorPorId(req, res) {
    try {
      const suscriptor = await Suscriptor.findByPk(req.params.id, {
        include: [{ model: Interes, as: 'intereses' }],
      });
      res.render('suscriptor_id', { suscriptor });
    } catch (error) {
      res.status(500).send(error);
    }
  },

  async mostrarSuscriptoresPorFecha(req, res) {
    try {
      const suscriptores = await Suscriptor.findAll({
        where: {
          fecha_registro: {
            [Sequelize.Op.between]: [req.query.fecha_inicio, req.query.fecha_fin],
          },
        },
        include: [{ model: Interes, as: 'intereses' }],
      });
      res.render('suscriptores_fecha', { suscriptores });
    } catch (error) {
      res.status(500).send(error);
    }
  },

  async mostrarTodosLosSuscriptores(req, res) {
    try {
      const suscriptores = await Suscriptor.findAll({
        include: [{ model: Interes, as: 'intereses' }],
      });
      res.render('suscriptores_todos', { suscriptores });
    } catch (error) {
      res.status(500).send(error);
    }
  },
};