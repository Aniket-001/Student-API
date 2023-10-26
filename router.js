const express = require("express");
const router = express.Router();
const ErrorHandling = require('./errorHandling');
const coll = require("./Model/coll");

// Retrieving data
router.get("/",async (req,res,next)=>{
    try{
        const data = await coll.find({}, {_id:0});
        if(!data) throw new ErrorHandling(500,"Sorry! Couldn't fetch the details");
        res.json(data);
    }
    catch(err){
        next(err);
    }
})

// creating data
router.post("/",async (req,res,next)=>{
    try{
        const {sName,uid} = req.body;
        val = await coll.create({sName,uid});
        if(!val) throw new ErrorHandling(500,"Unable to create the user");
        res.json({msg:"created"});
    }
    catch(err){
        next(err);
    }
})



module.exports = router;