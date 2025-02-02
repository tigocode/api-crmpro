const { registerClient } = require('../services/createClient');
const { checkDados } = require('../validations/attributes');

module.exports = {
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
      if(dadosCheck.status) {
        const resultInsert = await registerClient(
          nome,
          sexo,
          email,
          telefone,
          id_user
        );
        return res.status(201).send(resultInsert);
      } else {
        res.status(400).send({ message: dadosCheck.message });
      }
    } catch (error) {
      console.log(error);
      return res.status(400).send({
        error: 'Ocorreu um erro ao inserir os dados.'
      });
    }
  }
}
