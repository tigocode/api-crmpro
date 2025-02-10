const connection = require('../connection/connection');

const createGraduation = async (id_register, graduation) => {

  const insertGraduation = await connection('graduation').insert(
    graduation.map(grad => ({
      olho: grad.olho,
      esferico: grad.esferico, 
      cilindrico: grad.cilindrico, 
      eixo: grad.eixo, 
      adicao: grad.adicao === '' ? 0 : grad.adicao,
      id_register: id_register
    }))
  );

  return { insertGraduation };
}
module.exports = {
  createGraduation,
}
