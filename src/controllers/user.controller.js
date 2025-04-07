const { registerUser } = require('../services/createUser');
const { checkDados } = require('../validations/attributes');
const { changeUser } = require('../services/changeUser');
const { UserAlreadyExist, UserLicenseAlreadyExist } = require('../validations/alreadyExist');
const { formatDate } = require('../validations/formatDate');
const { freeTime } = require('../validations/freeTime');
const { createFreeTime } = require('../services/createFreeTime');

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
      
      const id_user = resultInsert[0];
      // Check if the user exists
      const checkId = await UserLicenseAlreadyExist(id_user);

      const { start, end } = freeTime(checkId);
      createFreeTime(resultInsert, start, end);

      return res.status(201).send(resultInsert);
    } else {
      res.status(400).send({ message: dadosCheck.message });
    }    
   } catch (error) {
    console.log(error);
    return res.status(500).send({
      error: {
        message: 'Ocorreu um erro ao inserir os dados.',
        log: error
      }
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

      const updatedAt = await formatDate();
      // Check if the user exists
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
          email,
          updatedAt
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
        error: {
          message: 'Ocorreu um erro ao inserir os dados.',
          log: error
        }
      });
    }
  }
};
