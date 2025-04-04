// import the model
const Todo = require("../models/Todo")

// define route handler


exports.creatTodo = async (req, response) => {
    try {
        // extruct the title and description and shortName from request body

        const { title, description,shortName } = req.body;
        // cereat the obje in insert in database
        const data = await Todo.create({ title, description ,shortName})
        response.status(200).json(
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
