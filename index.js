const express = require('express')
const bodyParser = require('body-parser')

const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 4000

// middlewear need for body parser
app.use(express.json())
// app.use(bodyParser.json())


// const todoRoute = require("./routes/TodoRoutes")

// app.use("/api/v1",todoRoute)


// app.listen(PORT,()=>{
//     console.log(`server started at ${PORT}`)
// })

// // database connect

// const dbConnnect = require("./config/database")
// dbConnnect();

const database = {
   users: [
    {
        id:"123",
        name:'hasnain',
        email:"hasnainmuneer@gmail.com",
        password:"123456",
        entries:0,
        joined: new Date()
    },
    {
        id:"234",
        name:'ali',
        email:"ali@gmail.com",
        password:"789456",
        entries:0,
        joined: new Date()
    },
]
}

// // default route

app.get("/",(req,res)=>{
    res.send(database.users)
})

app.get("/profile/:id",(req,res)=>{
    const {id} = req.params
    let found = false;

    database.users.forEach(user => {
        if(user.id === id){
            found = true;
            return res.json(user)
        }
    })
    if(!found){
        res.status(400).json('not found')
    }
})
app.post("/image",(req,res)=>{
    // we dont use param because it fatch the id from url and use them
    const {id} = req.body
    let found = false;

    database.users.forEach(user => {
        if(user.id == id){
            found = true;
            user.entries++
            return res.json(user)
        }
    })
    if(!found){
        res.status(400).json('not found')
    }
})

app.post("/signin",(req,res)=>{
    if(req.body.email === database.users[0].email && req.body.password === database.users[0].password){
        
        res.json('successfull')
    }else{
        res.status(400).json("error login")
    }
})
app.post("/register",(req,res)=>{
    const {email,name,password,id} = req.body

    database.users.push({
        id:id,
        name:name,
        email:email,
        password:password,
        entries:0,
        joined: new Date()

    })

    res.json(database.users[database.users.length-1])
})
app.listen(PORT,()=>{
    console.log("app is running")
})