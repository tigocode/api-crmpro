const connection =  require('../connection/connection');

const registerProduct = async (modelo, fabricante, tipo, valor_unitario, valor_revenda, id_user) => {
  const createProduct = await connection('products').insert({
    modelo,
    fabricante,
    tipo,
    valor_unitario,
    valor_revenda,
    id_user
  });

  return createProduct;
}

module.exports = {
  registerProduct
}
