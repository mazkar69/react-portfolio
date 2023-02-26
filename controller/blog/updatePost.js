const { model } = require('mongoose')
const BlogPost = require('../../models/blogpost/Blog')

const updatePost = async(req,res)=>{
    // res.send("Hy i am from the update route")
    try {
        if(typeof req.body.tags === 'string')
        {
            req.body.tags = req.body.tags.split(",");
        }
        if(typeof req.body.sortBy === 'string')
        {
            req.body.sortBy = req.body.sortBy.split(",");
        }
        const responce = await BlogPost.updateOne({_id:req.body._id},{$set:req.body});
        res.status(200).json({"status":"success"});

    } catch (error) {
        console.log("Some error occur " + error)
        res.status(500).json({"status":"failed"})
    }
}

module.exports = updatePost;