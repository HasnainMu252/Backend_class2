const express = require("express")
const router = express.Router();

// import module

const {createPost} = require("../controller/createPost")
const {getPost} = require("../controller/GetPost")



// mapping router 


router.post("/createPost",createPost)
router.get("/getPost",getPost)


module.exports = router