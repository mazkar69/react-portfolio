const BlogPost = require('../../models/blogpost/Blog')

const deletePost = async(req,res)=>{
    try {
        const responce = await BlogPost.deleteOne(req.body);
        res.status(200).json(responce)

    } catch (error) {
        console.log("Error occur " + error)
        res.status(500).json({"status":"failed"})
        
    }

}

module.exports = deletePost;