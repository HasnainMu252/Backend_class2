const express = require("express")
const router = express.Router();

// import controller 
const {creatTodo} =  require("../controller/createTodo")
const {getTodo} =  require("../controller/GetTodo")

router.post("/createTodo",creatTodo);
router.get("/getTodo",getTodo);


module.exports = router;