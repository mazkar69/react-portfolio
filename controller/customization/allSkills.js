
const Skill = require('../../models/Skill')

const allSkills = async (req,res)=>{
    try {
        const skills = await Skill.find({});
        res.status(200).json(skills)
    } catch (error) {
        console.log("Error occus" + e);
        res.status(500).json({"status":"failed"})

        
    }
}


module.exports = allSkills;