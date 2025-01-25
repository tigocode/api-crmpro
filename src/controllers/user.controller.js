const { registerUser } = require('../services/service');

module.exports = {
  async Create(req, res) {
   try {
    const {
      user,
      password,
    } = req.body;

    registerUser(user, password);

    return res.status(201).send();
   } catch (error) {
    console.log(error);
    return res.status(500).send({
      error: 'Ocorreu um erro ao inserir os dados.'
    });
   }
  }
};
