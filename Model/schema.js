const mongo = require("mongoose");

const schema = new mongo.Schema({
    sName:String,
    uid:String
});

module.exports = schema;