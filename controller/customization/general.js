const General = require('../../models/General');

//This route is only used for update
const general = async (req, res) => {
    try {
        // const response = await General.create(req.body);

        const response = await General.updateOne({email:"mohdazkar@outlook.com"},{$set:req.body})
        // console.log(response)
        res.status(200).json({"status":"success"});
    } catch (e) {
        console.log(e);
        res.status(500).json({ "status": "failed" });
    }
}


module.exports = general;