const mongoose = require('mongoose')

const skillSchema = mongoose.Schema({
    name:String,
    percentage:String
})

const Skill = mongoose.model('skill',skillSchema);

module.exports = Skill;