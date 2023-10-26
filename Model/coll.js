const mongo = require("mongoose");
const schema = require("./schema");


const coll = new mongo.model("Api",schema);

module.exports = coll;