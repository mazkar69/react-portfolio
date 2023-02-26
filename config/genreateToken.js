
var jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();

const generateToken = (payload) => {
    // console.log("payload is " +     payload)
    const key = process.env.KEY;
    const token = jwt.sign({
        _id: payload
    }, key, { expiresIn: '1d' });

    return token;
}



module.exports = generateToken;