const connection = require('../connection/connection');
const crypto = require('crypto');
const { GerarToken } = require('./token');

const registerUser = async (user, password) => {
  const JWT_SECRET = crypto.createHash('md5').update(password).digest('hex');
  const token = GerarToken(user, JWT_SECRET);

  const createUser = await connection('users').insert({
    user,
    token,
  });

  return createUser;
}

module.exports = {
  registerUser
}
