const express = require("express")
const router = express.Router();

// import controller 
const {creatTodo} =  require("../controller/createTodo")
const {getTodo, getTodoById} =  require("../controller/GetTodo")

router.post("/createTodo",creatTodo);
router.get("/getTodo",getTodo);
router.get("/getTodo/:id",getTodoById);


module.exports = router;