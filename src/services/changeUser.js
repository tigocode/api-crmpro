const connection = require('../connection/connection');

const changeUser = async (id, nome, telefone, email) => {
  const userChange = await connection('users')
    .where('id', id)
    .update({
      nome,
      telefone,
      email
    });

  return userChange;
}

module.exports = {
  changeUser,
}
