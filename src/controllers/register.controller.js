const { data_recompra } = require('../validations/formatDate');
const { filterTimeDisposal } = require('../services/categoryFilter');

module.exports = {
  async Create(req, res) {
    try {
      const {
        produto,
        categoria,
        id_client,
        id_user
      } = req.body;

      const tempo_descarte = await filterTimeDisposal(categoria);

      res.status(200).json(tempo_descarte);

    } catch (error) {
      console.log(error);
      return res.status(400).send({
        error: 'Ocorreu um erro ao inserir os dados.'
      });
    }
  }
}
