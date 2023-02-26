const BlogPost = require('../../models/blogpost/Blog')

const uploadPost = async(req,res)=>{
    try {
        
        req.body.tags = req.body.tags.split(",");
        req.body.sortBy = req.body.sortBy.split(",");

        const responce = await BlogPost.create(req.body);
        res.status(200).json({"status":"success"})

    } catch (error) {
        console.log("Error is " + error)
        res.status(500).json({"status":"failed"})
    }
}


module.exports = uploadPost;