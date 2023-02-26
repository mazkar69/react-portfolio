const express = require('express')
const router = express.Router();
const general = require('../controller/customization/general')
const allGeneral = require('../controller/customization/allGeneral')
const uploadSkill = require("../controller/customization/uploadSkill")
const allSkills = require("../controller/customization/allSkills")
const uploadProject = require('../controller/customization/uploadProject')
const deletePost = require('../controller/customization/deletePost')
const allProjects = require('../controller/customization/allProjects')


router.route('/general').post(general).get(allGeneral);
router.route('/skill').get(allSkills).post(uploadSkill)     //Not used yet, Mey be in future
router.route('/project').get(allProjects).post(uploadProject).delete(deletePost);       





module.exports = router;