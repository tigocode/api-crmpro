const { isRepurchase } = require('../services/isRepurchase');

const alreadyPurchasedExists = async (id_user, id_client) => {
  let is_repurchase;

  const alreadyPurchased = await isRepurchase(id_user, id_client);

  if(alreadyPurchased) {
    is_repurchase = true;

    return is_repurchase;
  } else {
    is_repurchase = false;

    return is_repurchase;
  }
}

module.exports = {
  alreadyPurchasedExists,
}
