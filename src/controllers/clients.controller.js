const { registerClient } = require('../services/createClient');
const { selectClients, selectAllClients } = require('../services/selectClients');
const { checkDados } = require('../validations/attributes');
const { UserAlreadyExist } = require('../validations/userAlreadyExist');

module.exports = {
  async Index(req, res) {
    try {
      const id = req.params.user_id;

      const result = id ?  await selectClients(id) : await selectAllClients();
      
      if(result.length === 0) {
        return res.status(404).json({ message: 'Nenhum cliente encontrado.' });
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
        nome,
        sexo,
        email,
        telefone,
        id_user
      } = req.body;

      const dadosCheck = checkDados(nome, email, telefone);
      const idChecked = await UserAlreadyExist(id_user);

      if(dadosCheck.status && idChecked.status) {
        const resultInsert = await registerClient(
          nome,
          sexo,
          email,
          telefone,
          id_user
        );
        return res.status(201).json(resultInsert);
      } else {
        res.status(400).send({ message: dadosCheck.message });
      }
    } catch (error) {
      console.log(error);
      return res.status(400).send({
        error: 'Ocorreu um erro ao inserir os dados.'
      });
    }
  },

  async Update(req, res) {
    try {
      
    } catch (error) {
      console.log(error);
      return res.status(500).send({
        error: 'Ocorreu um erro ao atualizar os dados.'
      });
    }
  }
}
