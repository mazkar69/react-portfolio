
const Project = require('../../models/Project.js')

const deletePost = async(req,res)=>{
    try{
        const response = await Project.deleteOne(req.body);
        console.log(response)

        res.status(200).json(response)

    }catch(err){
        res.status(500).json({"status":"failed"})

        console.log(err)
    }
}

module.exports = deletePost;