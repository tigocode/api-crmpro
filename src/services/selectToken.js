const connection = require('../connection/connection');
const crypto = require('crypto');

const searchUser = async (user, password) => {
  const hash = crypto.createHash('md5').update(password).digest('hex');
  password = hash;

  const selectUser = await connection('users')
    .where('user', user)
    .where('password', password)
    .select([
      'users.token'
    ])
    .first();
  
  if(!user) {
    return { message: 'User invalid' }
  }

  return selectUser;
};

module.exports = {
  searchUser,
}
