require('dotenv').config();
const express = require("express");
const app = express();
const router = require("./router");
const errorMiddleware = require("./errorMiddleware");
const conn = require("./conn");

//port no.
port = process.env.PORT || 1900;


//middleware
app.use(express.json());//parsing
app.use(router);


app.use(errorMiddleware);


//driver function
const startServer = async ()=>{
    try{
        app.listen(port,()=>{
            console.log(`Server is listening to the port no..${port}`);
        });
        await conn();
    }
    catch(err){
        console.log(err);
    }
}
startServer();
