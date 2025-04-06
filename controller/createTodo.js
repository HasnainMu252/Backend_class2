// import the model
const Todo = require("../models/Todo")

// define route handler


exports.creatTodo = async (req, res) => {
    try {
        // extruct the id title and description and shortName from request body

        const { id , title, description, shortName } = req.body; // this data come from postman body json
        // cereat the obje in insert in database
        const data = await Todo.create({id, title, description ,shortName})
        console.log(data)
        res.status(200).json(
            {
                success: true,
                data: data,
                message: 'entry create successfully'
            }
        )
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
