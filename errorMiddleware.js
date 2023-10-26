//Error handling 

const errorHandler = (err,req,res,next)=>{
    // err.status = err.status || 404;
    // err.msg = err.msg || "Unexpected Error Occured";
    err.status = err.status;
    err.message = err.message;
    console.log(err);
    res.status(err.status).json({
        success:false,
        message:err.message
    });
}


module.exports = errorHandler;