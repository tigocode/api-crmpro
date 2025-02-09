const connection = require('../connection/connection');

const filterTimeDisposal = async (categoria) => {
  const tempoDescarte = await connection('discard_type')
    .where('categoria', categoria)
    .select([
      'discard_type.tempo_descarte'
    ])
    .first();
  
  return tempoDescarte;
}

module.exports = {
  filterTimeDisposal,
}
