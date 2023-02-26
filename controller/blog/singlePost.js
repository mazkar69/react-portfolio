
const BlogPost = require('../../models/blogpost/Blog')

const singlePost = async(req,res)=>{
    try {

        const {slug} = req.params;
        
        const post = await BlogPost.findOne({slug});
        res.status(200).json(post);
    } catch (error) {
        console.log("Some error occur " + error)
        res.status(500).json({"status":"failed"});
        
    }
}

module.exports = singlePost;