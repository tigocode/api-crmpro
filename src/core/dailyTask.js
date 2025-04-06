const cron = require('node-cron');
const { executarRotina } = require('../services/changeFreeTime');

const taskDaily = async () => {
  // Rotina automatizada que chama a função startRoutine (Rotina diária).
  await executarRotina();
}

const startRoutine = () => {
  // Executa todos os dias às 01:01 da manhã
  cron.schedule('37 23 * * *', taskDaily);
}

module.exports = {
  startRoutine
};

