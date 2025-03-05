const { calculateDuration } = require('../core/boxDuratiion');
const { selectRegister } = require('../services/selectRegister');
const { createRegister } = require('../services/createRegister');
const { createGraduation } = require('../services/createGraduation');

module.exports = {
  async Index(req, res) {
    try {
      const id = req.params.user_id;

      const result = await selectRegister(id);

      return res.status(200).json(result);
      
    } catch (error) {
      console.log(error);
      return {
        error: 'Ocorreu um erro ao buscar os dados.'
      };
    }
  },

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
