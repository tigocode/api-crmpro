const { registerUser } = require('../services/createUser');
const { checkDados } = require('../validations/attributes');

module.exports = {
  async Create(req, res) {
   try {
    const {
      nome,
      telefone,
      email,
      user,
      password,
    } = req.body;

    const dadosCheck = checkDados(nome, email, telefone);

    if(dadosCheck.status) {
      const resultInsert = await registerUser(
        nome,
        telefone,
        email,
        user,
        password
      );
      return res.status(201).send(resultInsert);
    } else {
      res.status(400).send({ message: dadosCheck.message });
    }    
   } catch (error) {
    console.log(error);
    return res.status(500).send({
      error: 'Ocorreu um erro ao inserir os dados.'
    });
   }
  }
};
