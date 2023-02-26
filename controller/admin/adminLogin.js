const Admin = require('../../models/admin/Admin')
const generateToken = require('../../config/genreateToken')
const adminLogin = async(req,res)=>{
    try {
        const admin = await Admin.findOne({email:req.body.email})
        if(!admin){
            res.status(300).json({"status":"Invalid Email"})
        }
        else{
            if(admin.password === req.body.password){
                // console.log(admin._id)
                const token = generateToken(admin._id)
                res.status(200).json({"status":"success","token":token});
            }
            else{
            res.status(300).json({"status":"Invalid password"})
                
            }
        }
    } catch (error) {
        
    }
}

module.exports = adminLogin;