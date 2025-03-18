const connection = require('../connection/connection');

const changeUser = async (id, nome, telefone, email, user, password, user_active) => {
  const userChange = await connection('users')
    .where('id', id)
    .update({
      nome,
      telefone,
      email,
      user,
      password,
      user_active
    });

  return userChange;
}

module.exports = {
  changeUser,
}
