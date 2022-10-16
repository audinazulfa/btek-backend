const check = (req, res, next)=> {
  if(req.body.username){
    return next();
  }else{
    return res.status(400).json({
      success: false, 
      message: "failed tp get username data"
    }); 
  }
};

module.exports = check;
