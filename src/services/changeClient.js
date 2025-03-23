const connection = require('../connection/connection');

const changeClient = async (id, nome, email, telefone, id_user) => {
  const clientChange = await connection('clients')
    .where('id_user', id_user)
    .where('id', id)
    .update({
      nome,
      email,
      telefone
    });
  
    return clientChange;
}

module.exports = {
  changeClient,
}
