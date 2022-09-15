const express = require('express'); 
const {detail } =require('../controller/adminController')
const router = express.Router()

router.get ('/details', detail )

module.exports= router
