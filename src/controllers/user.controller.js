const { registerUser } = require('../services/createUser');

module.exports = {
  async Create(req, res) {
   try {
    const {
      user,
      password,
    } = req.body;

    const result = await registerUser(user, password);

    return res.status(201).send(result);
   } catch (error) {
    console.log(error);
    return res.status(500).send({
      error: 'Ocorreu um erro ao inserir os dados.'
    });
   }
  }
};
