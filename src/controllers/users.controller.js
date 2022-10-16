const userModel = require("../models/users.model");

exports.createUser = async(req, res)=> {
  try{
    const insert = await userModel.insertUser(req.body);
    const user = insert.rows[0];
    return res.json({
      success: true,
      message: "Create user successfully",
      result: user
    });
  }catch(err){
    return res.status(500).json({
      success: false,
      message: "Error: "+err.message
    });
  }
};

exports.readAllUsers = async(req, res)=> {
  try{
    const users = await userModel.selectAllUsers();
    return res.json({
      success: true,
      message: "List all users",
      results: users.rows
    });
  }catch(err){
    return res.status(500).json({
      success: false,
      message: "Error: "+err.message
    });
  }
};

exports.readUserById = async(req, res)=> {
  try{
    const user = await userModel.selectUserById(req.params.id);
    return res.json({
      success: true,
      message: "Detail user",
      results: user.rows[0]
    });
  }catch(err){
    return res.status(500).json({
      success: false,
      message: "Error: "+err.message
    });
  }
};

//update
exports.updateUserById = async(req, res)=> {
  try{
    const update = await userModel.updateUserById(req.params.id, req.params.body);
    const user = update.rows[0];
    return res.json({
      success: true,
      message: "Update user successfully",
      results: user
    });
  }catch(err){
    return res.status(500).json({
      success: false,
      message: "Error: "+err.message
    });
  }
};

//delete
exports.deleteUserById = async(req, res)=> {
  try{
    const user = await userModel.deleteUserById(req.params.id);
    return res.json({
      success: true,
      message: "Delete user successfully",
      results: user
    });
  }catch(err){
    return res.status(500).json({
      success: false,
      message: "Error: "+err.message
    });
  }
};
