const date = new Date();

const data = date.toISOString().slice(0, 10); // 2021-09-01
const hora = date.toTimeString().split(' ')[0]; // 20:00:00

const data_recompra = `${data} ${hora}`;


module.exports = {
  data_recompra,
}
