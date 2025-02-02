const { registerProduct } = require('../services/createProduct');

module.exports = {
  async Create(req, res) {
    try {
      const {
        modelo,
        fabricante,
        tipo,
        valor_unitario,
        valor_revenda,
        id_user
      } = req.body;

      const resultInseet = await registerProduct(
        modelo,
        fabricante,
        tipo,
        valor_unitario,
        valor_revenda,
        id_user
      );

      return res.status(201).send(resultInseet);
    } catch (error) {
      console.log(error);
      return res.status(400).send({
        error: 'Ocorreu um erro ao inserir os dados.'
      });
    }
  }
}
