const { CheckToken } = require('../services/token');
const { createHash } = require('../validations/auth');

module.exports = {
  async Index(req, res) {
    let { user, password, token } = req.body;

    const JWT_SECRET = createHash(password);
    const tokenChecked = CheckToken(token, JWT_SECRET, user);

    if(!tokenChecked.status) {
      res.status(tokenChecked.code).send({'access': tokenChecked.status});
      return;
    }

    res.status(tokenChecked.code).send({'access': tokenChecked.status});
  }
};
