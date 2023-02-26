const express = require('express')
const router = express.Router()
const allPosts = require('../controller/blog/allPosts')
const uploadPost = require('../controller/blog/uploadPost')
const deletePost = require('../controller/blog/deletePost')
const updatePost = require('../controller/blog/updatePost')
const singlePost = require('../controller/blog/singlePost')

//Middle ware.
const protect = require('../middleware/authMiddleware')


router.route('/blogpost').get(allPosts);
router.route('/blogpost/:slug').get(singlePost)    //For single news.

//for Admin
router.route('/blogpost/upload').post(protect,uploadPost)
router.route('/blogpost/update').patch(protect,updatePost);
router.route('/blogpost/delete').delete(protect,deletePost)



//exporting route

module.exports = router;