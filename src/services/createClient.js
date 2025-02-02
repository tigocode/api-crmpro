const connection = require('../connection/connection');

const resgisterClient = async (nome, sexo, email, telefone, id_user) => {
  const createClient = await connection('clients').insert({
    nome, 
    sexo,
    email,
    telefone,
    id_user
  });
  
  return createClient;
}

module.exports = {
  resgisterClient
}
