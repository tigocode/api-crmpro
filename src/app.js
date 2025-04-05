require('dotenv').config();

const express = require('express');
const cors = require('cors');
const router = require('./routes/routes');
const startRoutine = require('./core/dailyTask');
const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

app.listen(process.env.PORT || 3000, () => {
  let date = new Date();
  console.log(`Servidor rodando na PORT 3000 e em execução desde: ${date.toLocaleString()}`);
  startRoutine.startRoutine(); // 👈 inicia o agendador junto com o servidor
});
