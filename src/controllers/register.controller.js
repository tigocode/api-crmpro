module.exports = {
  async Create(req, res) {
    try {
      const {
        produto,
        categoria,
        data_recompra,
        id_user
      } = req.body;

    } catch (error) {
      console.log(error);
      return res.status(400).send({
        error: 'Ocorreu um erro ao inserir os dados.'
      });
    }
  }
}
