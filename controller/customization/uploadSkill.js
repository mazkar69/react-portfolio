const Skill = require('../../models/Skill')

const uploadSkill = async (req, res) => {
    try {
        const response = await Skill.create(req.body);
        res.status(200).json({ "status": "success" });

    } catch (error) {
        console.log(e);
        res.status(500).json({ "status": "failed" });
    }
}

module.exports = uploadSkill