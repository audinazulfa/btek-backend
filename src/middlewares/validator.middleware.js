// const { query } = require("express");
// const {body, validationResult}= require("express-validator");
// const { param } = require("../routes/users.route");

// exports.basicUserCreds = [
//   body("email").isEmail().withMessage("Email is invalid"),
//   body("password").isLength({min: 4}).withMessage("Password length must be 4 char or more"),
// ];

// exports.paramsUUID = [
//   param("id").isUUID(4).withMessage("Invalid ID")
// ];

// exports.paging = [
//   (req, res, next) => {
//     req.query.page = req.query.page || "1";
//     req.query.limit = req.query.limit || "5";
//     req.query.sortBy = req.query.sortBy || "createdAt";
//     return next();
//   },
//   query("page").optional().toInt(10),
//   query("limit").optional().toInt(10),
//   query("sortBy").isIn(["email", "createdAt", "updatedAt"])
// ];

// exports.check = (res, req)=> {
//   const errorValidation = validationResult(req);
//   // console.log(match)
//   if(!errorValidation.isEmpty()){
//     return res.status(400).json({
//       success: false, 
//       message: "Validation Error",
//       results: errorValidation.array()
//     });
//   }
// };
