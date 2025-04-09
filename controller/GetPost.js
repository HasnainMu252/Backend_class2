const post = require("../models/schema")


exports.getPost = async (req,res) =>{
    try {
        // fatch all
        const todos = await post.find({})

        res.status(200).json({
            success:true,
            data:todos,
            message:"successfull fatch the data"
        })
        
    } catch (err) {
       
        console.error(err);
        console.log(err);
        res.status(500).json({
            succcess:false,
            data:"internal server error",
            message:Array.message
        })
        
    }
}