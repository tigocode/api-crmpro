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
  
  if(selectUser === undefined) {
    return { token: `${password}we23Aa3WGmIGA4A_6C.${password}.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoi` }
  }

  return selectUser;
};

module.exports = {
  searchUser,
}
