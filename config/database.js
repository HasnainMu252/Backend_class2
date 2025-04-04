
const mongoos = require('mongoose')
// use for fatching the data from .env file
require("dotenv").config();
const dbConnnect = ()=>{
    mongoos.connect(process.env.DATABASE_URL)
    .then(()=>console.log("successfull connection"))
    .catch((err)=>{
        console.log("db connection issue");
        console.error(err .message);
        process.exit(1);
    })
    ;
}


module.exports = dbConnnect;