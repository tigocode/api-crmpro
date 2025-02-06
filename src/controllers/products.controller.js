const { registerProduct } = require('../services/createProduct');
const { UserAlreadyExist } = require('../validations/userAlreadyExist');

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

      const idChecked = await UserAlreadyExist(id_user);

      if(idChecked.status) {
        const resultInseet = await registerProduct(
          modelo,
          fabricante,
          tipo,
          valor_unitario,
          valor_revenda,
          id_user
        );
  
        return res.status(idChecked.code).send(resultInseet);
      } else {
        res.status(idChecked.code).send({message: 'user does not exist!'});
        return;
      }
    } catch (error) {
      console.log(error);
      return res.status(400).send({
        error: 'Ocorreu um erro ao inserir os dados.'
      });
    }
  }
}
