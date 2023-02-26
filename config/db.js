const mongoose = require('mongoose')
const dotenv = require('dotenv').config();

const connectDb = ()=>{
    try {
        mongoose.set('strictQuery', true);
        const URL = process.env.URL;
        mongoose.connect(URL).then(()=>{
            console.log("DB connected successfully.");
        }).catch((e)=>{
            console.log("Not Connected.");
        })

        
    } catch (e) {
        
    }
}

module.exports = connectDb;