const Project = require('../../models/Project.js')


const allProjects = async (req, res) => {
    try {
        const projects = await Project.find({});
        res.status(200).json(projects)
    } catch (error) {
        console.log("Some Error occur " + error)
        res.status(500).json({ "status": "failed" })

    }

}

module.exports = allProjects;