const Todo = require("../models/Todo")


exports.getTodo = async (req, response) => {
    try {

        // fatch all 
        const todos = await Todo.find({});

    //    response
    response.status(200)
        .json({
            success:true,
            data:todos,
            message:"fatch success"
        })
    } catch (err) {
       
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            data:"internal sever error",
            message:Array.message

        })
}

}
