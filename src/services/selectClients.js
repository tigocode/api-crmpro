const connection = require('../connection/connection');

const selectClients = async (id) => {
  const clientsSelected = await connection('clients')
    .where('id_user', id)
    .select([
      'clients.*'
    ]);

  return clientsSelected;
}

module.exports = {
  selectClients,
}
