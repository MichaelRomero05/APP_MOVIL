const User = require('../models/user');

module.exports = {
  register(req, res) {
    const user = req.body;
    User.create(user, (err, data) => {
      if (err) {
        return res.status(501).json ({
          success: false,
          message: 'Error al crear al usuario',
          error: err
        });
      } else {
        return res.status(201).json({
          success: true,
          message: 'Creado el Usuario',
          data: data
        });
      }
    });
  }
}