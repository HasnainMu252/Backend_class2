const express = require('express')

const app  = express()

// initialize the app
require("dotenv").config();

app.use(express.json())

// fatch the routers
const postRoute = require("./routes/postRoutes")

app.use("/api/v1",postRoute)


const PORT = process.env.PORT || 4000

const dbConnnect = require("./config/database")
dbConnnect();


app.listen(PORT,()=>{
    console.log('app is running on', PORT)
})


app.get("/",(req,res)=>{
    res.send(`<h2>app is running</h2>`)
})