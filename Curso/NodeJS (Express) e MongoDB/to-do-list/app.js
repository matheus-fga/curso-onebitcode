const express = require('express');
const checklistRouter = require('./src/routes/checklist');
require('./config/database')

const app = express();

app.use(express.json());

// Routes 
app.use('/checklists', checklistRouter);

app.listen(3000, () => {
  console.log('Servidor foi iniciado!');
})