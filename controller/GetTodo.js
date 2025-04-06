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
exports.getTodoById = async (req, response) => {
    try {
        
        const id = req.params.id
        const todos = await Todo.findById(id);
        
        if(!todos){
            return response.status(404).json({
                success:false,
                message:"no found"
            })
        }
        response.status(200).json({
            success:true,
            data:todos,
            message:`the ${id} found`,
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

        // app.get("/profile/:id",(req,res)=>{
//     const {id} = req.params
//     let found = false;

//     database.users.forEach(user => {
//         if(user.id === id){
//             found = true;
//             return res.json(user)
//         }
//     })
//     if(!found){
//         res.status(400).json('not found')
//     }
// })
        // fatch all 

    //    response
    // response.status(200)
    //     .json({
    //         success:true,
    //         data:todos,
    //         message:"fatch success"
    //     })

}
