const express = require('express');
const mongoose = require('mongoose');
const routes = require('../routes');

const app = express();
app.use(express.json());
app.use(routes);

mongoose.connect('mongodb+srv://lucasadmin:lucasadmin@cluster0-ckcbx.mongodb.net/projetos?retryWrites=true&w=majority',
  { 
    useNewUrlParser: true,
    useUnifiedTopology: true
  } 
)



app.listen(3333);