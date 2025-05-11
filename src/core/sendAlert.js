const connection = require('../connection/connection');

const alertNext = async () => {
  const listRgister = await connection('register')
    .join('clients', 'register.id_client', '=', 'clients.id')
    .where('is_alert_sent', '=', 0)
    .select([
      'register.*',
      'clients.*'
    ]);

  return listRgister;
}

const calculateNextAlert = async () => {
  const date = new Date();
  const  list = await alertNext();

  const nextAlert = list.map((item) => {
    const dataRecompra = new Date(item.data_recompra);
    const differenceMinute = dataRecompra - date;

    const differenceDay = Math.floor(differenceMinute / (1000 * 60 * 60 * 24));

    return {
      ...item,
      diasRestantes: differenceDay, 
    }
  });
  
  return nextAlert.filter((item) => item.diasRestantes <= 30);
}

module.exports = {
  calculateNextAlert,
}
