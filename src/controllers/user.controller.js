const { registerUser } = require('../services/createUser');
const { checkDados } = require('../validations/attributes');
const { changeUser } = require('../services/changeUser');
const { UserAlreadyExist } = require('../validations/userAlreadyExist');

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
  },
  
  async Update(req, res) {
    try {
      const {
        nome,
        telefone,
        email
      } = req.body;

      const id = parseInt(req.params.user_id);
      // Check if the user exists
      const checkId = await UserAlreadyExist(id);
      // If the user exists, update the data
      if(checkId.status) {
        // Update the user data
        const updateUserId = await changeUser(
          id,
          nome,
          telefone,
          email
        );
        return res.status(201).send({
          updateUserId
        });
      } else {
        res.status(404).send({ message: 'Usuário não encontrado.' });
      }

    } catch (error) {
      console.log(error);
      return res.status(500).send({
        error: 'Ocorreu um erro ao atualizar os dados.'
      });
    }
  }
};
