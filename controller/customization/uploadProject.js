const Project = require('../../models/Project.js')

const uploadProject = async(req,res)=>{
    try {
        const responce = await Project.create(req.body);
        res.status(200).json({"status":"success"})
    } catch (error) {
        console.log("Error occor " + e)
        res.status(500).json({"status":"failed"})
    }

}

module.exports = uploadProject;