const mongoose = require("mongoose")

const  todoSchema = new mongoose.Schema(
    {

        id:{
            type:Number,
            required:true,
            maxLength:6,
        },
       
        title:{
            type:String,
            required:true,
            maxLength:50,
        },
       
        shortName:{
            type:String,
            required:false,
            maxLength:50,
        },
        description:{
            type:String,
            required:true,
            maxLength:50,
        },
        createdAt:{
            type:Date,
            required:true,
            default:Date.now(),
        },
        updatedAt:{
            type:Date,
            required:true,
            default:Date.now(),
        }
    }
)

module.exports = mongoose.model("Todo",todoSchema)