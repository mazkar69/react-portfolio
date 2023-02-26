// const Admin = require('../../models/admin/Admin')
const Admin = require('../../models/admin/Admin')

const adminRegister = async (req, res) => {
    try {
        //    const responce =  await Admin.create(req.body);
        const responce = new Admin(req.body)
        await responce.save()
        // console.log(responce)
        res.status(200).json({ "status": "success" })

    } catch (error) {
        console.log("Some error occor " + error)
        res.status(500).json({ "status": "failed" })
    }
}

module.exports = adminRegister;