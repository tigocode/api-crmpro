const { registerClient } = require('../services/createClient');
const { checkDados } = require('../validations/attributes');
const { UserAlreadyExist } = require('../validations/userAlreadyExist');

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
      const idChecked = await UserAlreadyExist(id_user);

      if(dadosCheck.status && idChecked.status) {
        const resultInsert = await registerClient(
          nome,
          sexo,
          email,
          telefone,
          id_user
        );
        return res.status(201).json({resultInsert});
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
