const connection = require('../connection/connection');

const createRegister = async (produto, categoria, id_client, id_user) => {
  const [id] = await connection('products').insert({
    produto,
    categoria,
    id_client,
    id_user,
  });

  return { id };
}

module.exports = {
  createRegister,
}
