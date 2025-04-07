const express = require("express")
const router = express.Router();

// import controller 
const {creatTodo} =  require("../controller/createTodo")
const {getTodo, getTodoById} =  require("../controller/GetTodo");
const { updateTodo } = require("../controller/updateTodo");
const { deleteTodo } = require("../controller/deleteTodo");

router.post("/createTodo",creatTodo);
router.get("/getTodo",getTodo);
router.get("/getTodo/:id",getTodoById);
router.put("/updateTodo/:id",updateTodo);
router.delete("/deleteTodo/:id",deleteTodo);


module.exports = router;