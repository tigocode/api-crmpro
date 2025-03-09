const { registerProduct } = require('../services/createProduct');
const { selectProducts, selectAllProducts } = require('../services/selectProducts');
const { UserAlreadyExist } = require('../validations/userAlreadyExist');

module.exports = {
  async Index(req, res) {
    try {
      const id = req.params.user_id;
      const result = id ? await selectProducts(id) : await selectAllProducts();

      if(result.length === 0) {
        return res.status(404).json({ message: 'Nenhum produto encontrado.' });
      }

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
        modelo,
        fabricante,
        categoria,
        valor_unitario,
        valor_revenda,
        id_user
      } = req.body;

      const idChecked = await UserAlreadyExist(id_user);

      if(idChecked.status) {
        const resultInseet = await registerProduct(
          modelo,
          fabricante,
          categoria,
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
