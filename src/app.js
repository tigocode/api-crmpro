const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/users', async (req, res) => {
  res.json({mensagem: 'success!'});
});

app.listen(3000, () => {
  let date = new Date();
  console.log(`Servidor rodando na PORT 3000 e em execução desde:  ${date.toLocaleString()}`);
});
