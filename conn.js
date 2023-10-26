const mongo = require("mongoose");
const ErrorHandling = require("./errorHandling");
const url = process.env.URL; 

const connect = () =>{
    let conn = mongo.connect(url);
    if(!conn) next(new ErrorHandling(410,"Connection failed"));
    console.log("Database connected.....");
}

module.exports = connect;