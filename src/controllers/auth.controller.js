const { searchUser } = require('../services/selectUser');

module.exports = {
  async Create(req, res) {
    try {
      const {
        user,
        password,
      } = req.body;

      const userLocated = await searchUser(user, password);

      return res.status(200).send(userLocated);
    } catch (error) {
      console.log(error);
      return res.status(500).send({
        error: 'Ocorreu um erro ao consultar os dados.'
      });
    }
  }
};
