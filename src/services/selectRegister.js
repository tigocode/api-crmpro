const connection = require('../connection/connection');

const selectRegister = async (id) => {
  const registerSelected = await connection('register')
    .join('graduation', 'register.id', '=', 'graduation.id_register')
    .where('id_user', id)
    .select([
      'register.*',
      'graduation.*'
    ]);

    return registerSelected;
}

module.exports = {
  selectRegister,
}
