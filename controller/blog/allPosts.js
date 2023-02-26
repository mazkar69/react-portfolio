const BlogPost = require('../../models/blogpost/Blog')

const allBlog = async (req, res) => {
    try {
        let { lim, pg, sortBy } = req.query;
        
        const apiData = BlogPost.find({}).sort({ _id: -1 })

        if (sortBy) {
            apiData.find({ sortBy: sortBy });
        }


        if (pg) {
            let skip = (Number(pg) - 1) * (lim || 6);
            apiData.skip(skip)
        }

        const result = await apiData.limit(lim || 6);;

        res.status(200).json(result)
    } catch (error) {
        console.log("Error occur " + error)
        res.status(500).json({ "status": "failed" })

    }
}


module.exports = allBlog;