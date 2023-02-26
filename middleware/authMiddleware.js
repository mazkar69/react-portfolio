const jwt = require("jsonwebtoken");
const Admin = require("../models/admin/Admin");
const dotenv = require('dotenv').config();

// const asyncHandler = require("express-async-handler");

const protect =async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

    //   console.log("Token is " + token)
    //   decodes token id
      const key = process.env.KEY;
      const decoded = jwt.verify(token,key );
        // console.log(decoded)
      const admin = await Admin.findById(decoded._id).select("-password");
      if(admin){
        next();
      }
      else{
            res.status(401).send('authantication token not valid')
      }
    } catch (error) {
      res.status(401);
      console.log("Not authorized, token failed")
      res.send("Not authorized, token failed")

    }
  }

  if (!token) {
    res.status(401);
    console.log("Not authorized, no token")
    res.send("Not authorized, no token")
  }
};

module.exports = protect ;