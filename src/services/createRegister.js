const connection = require('../connection/connection');

const createRegister = async (produto, categoria, quantidade, data_recompra, id_client, id_user) => {
  const id = await connection('register').insert({
    produto,
    categoria,
    quantidade,
    data_recompra,
    id_client,
    id_user
  });

  return  id;
}

module.exports = {
  createRegister,
}
