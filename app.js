const express = require('express');
const app = express();
const connectDb = require('./config/db')
const path = require('path')
const dotenv = require('dotenv').config();

const customizeRoutes = require('./routes/customization')
const blogRoutes = require("./routes/blog")

//Connection database
connectDb();

//Middleware for form data
app.use(express.urlencoded())
app.use(express.json())


//Defining Port.
const port = process.env.PORT || 5000;

//Routes are define here.......

app.use('/api', customizeRoutes);
app.use('/api', blogRoutes);
app.use('/api', require('./routes/admin'))



//================DEPLOYMENT=======================


if (process.env.NODE_ENV == "production") {

    app.use(express.static("client/build"));

    const path = require("path");

    app.get("*", (req, res) => {

        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));

    })


}
else {
    app.get('/', (req, res) => {
        res.send("Running..........")
    })
}




app.listen(port, () => {
    console.log("Server is running at port " + port);
})