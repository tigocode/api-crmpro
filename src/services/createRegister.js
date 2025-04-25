const connection = require('../connection/connection');

const createRegister = async (produto, categoria, quantidade, data_recompra, is_repurachase, is_alert_set, alert_count, id_client, id_user) => {
  const id = await connection('register').insert({
    produto,
    categoria,
    quantidade,
    data_recompra,
    is_repurachase,
    is_alert_set,
    alert_count,
    id_client,
    id_user
  });

  return  id;
}

module.exports = {
  createRegister,
}
