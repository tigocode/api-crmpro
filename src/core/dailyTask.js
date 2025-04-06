const cron = require('node-cron');
const { selectRemaingTime } = require('../services/changeFreeTime');

const taskDaily = async () => {
  // Rotina automatizada que chama a função startRoutine (Rotina diária).
  await selectRemaingTime();
}

const startRoutine = () => {
  // Executa todos os dias às 01:01 da manhã
  cron.schedule('01 1 * * *', taskDaily);
}

module.exports = {
  startRoutine
};

