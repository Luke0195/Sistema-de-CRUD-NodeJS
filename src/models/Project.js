const mongoose = require('mongoose');


const ProjectSchema = new mongoose.Schema({
     
       codigo:Number,
       nome : String,
       tasks: [String]
});


module.exports= mongoose.model('Project', ProjectSchema); 