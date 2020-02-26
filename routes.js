const express = require('express');
const routes = express.Router();
const projectController = require('./src/controllers/projectController');

routes.get('/',projectController.index);
routes.get('/:id',projectController.show);
routes.post('/projects', projectController.store);
routes.delete('/projects/:id', projectController.destroy);



module.exports= routes;