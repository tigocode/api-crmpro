const connection = require('../connection/connection');

const ProductAlreadyExist = async (id) => {
  let status;
  let code;

  const searchId = await connection('products')
    .where('id', id)
    .select('id')
    .first();

    if(searchId && searchId.id === id) {
      status = true;
      code = 201;
    } else {
      status = false;
      code = 401;
    }

    return {
      status: status,
      code: code,
    }
}

module.exports = {
  ProductAlreadyExist
}
