const cron = require('node-cron');

const taskDaily = () => {
  console.log('Executando tarefa diária às 16:04');
  // Aqui entra sua lógica de negócio, banco, envio de e-mail, etc.
}

const startRoutine = () => {
  // Executa todos os dias às 15:30
  cron.schedule('04 16 * * *', taskDaily);
}

module.exports = {
  startRoutine
};

