const mongoose = require("mongoose")

const  postSchema = new mongoose.Schema(
    {

        id:{
            type:Number,
            required:true,
            maxLength:10,
        },
       
        title:{
            type:String,
            required:true,
            maxLength:30,
        },
       
        Article:{
            type:String,
            required:false,
            maxLength:200,
        },
        Likes:{
            type:Boolean,
            default:false,
            
        },
        Comments:{
            type:String,
            required:true,
            maxLength:100,
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

module.exports = mongoose.model("post",postSchema)