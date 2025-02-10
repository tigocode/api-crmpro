const { calculateDuration } = require('../core/boxDuratiion');
const { createRegister } = require('../services/createRegister');
const { createGraduation } = require('../services/createGraduation');

module.exports = {
  async Create(req, res) {
    try {
      const {
        produto,
        categoria,
        graduation,
        quantidade,
        id_client,
        id_user
      } = req.body;

      const data_recompra = await calculateDuration(categoria, quantidade);

      const id_register = await createRegister(
        produto,
        categoria,
        quantidade,
        data_recompra,
        id_client,
        id_user
      );      
      await createGraduation(id_register, graduation);

      res.status(200).json(id_register);

    } catch (error) {
      console.log(error);
      return res.status(400).send({
        error: 'Ocorreu um erro ao inserir os dados.'
      });
    }
  }
}
