const profileModel = require("../models/profile.model");

exports.readProfileById = async(req, res)=> {
  try{
    console.log(req.userData.id);
    const profile = await profileModel.selectProfileByUserId(req.params.id || req.userData.id);
    if(profile.rowCount){
      return res.json({
        success: true, 
        message: "Profile user with id"+req.params.id,
        results: profile.rows[0]
      });
    }
    return res.status(400).json({
      success: false, 
      message: "User with id "+req.params.id+" not found"
    });
  }catch(err){
    return res.status(500).json({
      success: false,
      message: "Error: "+err.message
    });
  }
};

exports.updateProfile = async(req, res)=> {
  try{
    //setelah menit 16
    if(req.file){
      // console.log(req.file);
      req.body.picture = req.file.filename;
    }
    // console.log(req.file);
    //setelah menit 16
    const profile = await profileModel.updateProfileById(req.userData.id, req.body);
    if(profile.rowCount){
      return res.json({
        success: true,
        message: "Update profile user",
        results: profile.rows[0]
      });
    } 
    // else{
    //   res.status(401).json({
    //     success: false,
    //     message: "Update Failed"
    //   });
    // }
  }catch(err){
    return res.status(500).json({
      success: false,
      message: "Error: "+err.message
    });
  }
};
