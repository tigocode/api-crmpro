const connection = require('../connection/connection');

const selectProducts = async (id) => {
  const productsSelected = await connection('products')
    .where('id_user', id)
    .select([
      'products.*'
    ]);

    return productsSelected;
}

module.exports = {
  selectProducts,
}
