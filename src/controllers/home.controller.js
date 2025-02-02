const { CheckToken } = require('../services/token');

module.exports = {
  async Index(req, res) {
    let { user, password, token } = req.body;
    const tokenChecked = CheckToken(token, password, user);

    if(!tokenChecked.status) {
      res.status(tokenChecked.status).send();
      return;
    }

    res.status(tokenChecked.code).send({'access': tokenChecked.status});
  }
};
