const express = require('express');
const routes = express.Router();
const projectController = require('./src/controllers/projectController');


routes.post('/projects', projectController.store);
routes.get('/',projectController.index);


module.exports= routes;