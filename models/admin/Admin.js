const mongoose = require('mongoose')

const adminSchema = mongoose.Schema({
    name:{
        type:String,
        requird:true
    },
    userId:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        requird:true,
    },
    backupCode:[
        {
            type:Number,
            requird:true
        }
    ]
})

const Admin = mongoose.model('admin',adminSchema);

module.exports= Admin;