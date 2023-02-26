//This model is for UI coustomization.
const mongoose = require('mongoose')

//Creating the schema
const uiSchema = mongoose.Schema({
    email:{
        type:String,
    },
    phone:{
        type:Number
    },
    logo:{
        type:String
    },
    profile:{
        type:String
    },
    resume:{
        type:String,
        
    },
    shortBio:{
        type:String
    },
    about:{
        type:String
    },
    
})

//Creating models 

const General = mongoose.model('general',uiSchema);

module.exports = General;