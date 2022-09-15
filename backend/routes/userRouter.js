const express = require("express");
const {adddetails} = require("../controller/userController");

const router = express.Router();

router.post('/add-details', adddetails)

module.exports = router;
