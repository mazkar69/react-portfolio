const mongoose = require('mongoose')

//Projects schema
const projectSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,

    },
    thumbnail:{
        type:String,
        required:true
    },
    gitHub:{
        type:String,
    },
    liveURL:{
        type:String
    }
})

//Creting models
const Project = new mongoose.model('project',projectSchema);

module.exports = Project;