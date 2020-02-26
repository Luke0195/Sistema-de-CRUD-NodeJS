const Project = require('../models/Project');
module.exports = {

  async store(req,res){
    
    const { id } = req.body;
    const { nome } = req.body;
    const { tasks } = req.body;

    const project = await Project.create({
        id,
        nome,
        tasks
    })
     return res.json(project);
  },

   async index(req,res){
      
     const project = await Project.find();
     return res.json(project);
  }

}