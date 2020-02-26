const Project = require('../models/Project');
module.exports = {


    async index(req,res){
      
        const projects = await Project.find();
        return res.json(projects);
     },

     async show(req,res){

        const project = await Project.findById(req.params.id);
        return res.json(project);

     },

    async store(req,res){
    
        const { codigo } = req.body;
        const { nome } = req.body;
        const { tasks } = req.body;

        const project = await Project.create({
            codigo,
            nome,
            tasks: tasks.split(',').map(task => task.trim())
        })
        return res.json(project);
  },

   async destroy(req,res){

    await Project.findByIdAndDelete(req.params.id);

    return res.send('Projeto deletado com sucesso');
     
   }

}