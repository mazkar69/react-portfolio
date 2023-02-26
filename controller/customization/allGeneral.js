const General = require('../../models/General');

const allGeneral = async(req,res)=>{
    try{

        const response = await General.findOne({email:"mohdazkar@outlook.com"});
        if(response){
            res.status(200).json(response)
        }
        else{

            res.status(200).json({"status":"no response found"})
        }


    }catch(err){
        res.status(500).json({"status":"failed"})
        console.log("Some error occur " + err)
    }

}

module.exports = allGeneral;