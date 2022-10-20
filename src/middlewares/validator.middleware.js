const {body, param, query, validationResult} = require("express-validator");

exports.basicUserCreds = [
  body("email").isEmail().withMessage("Email is invalid"),
  body("password").isStrongPassword({minLength: 8, minNumbers: 1, minSymbols: 1, minUppercase: 1, minLowercase: 1}).withMessage("Password length min 8 char with 1 number, 1 ssymbol, 1 uppercase, 1 lowercase")
];

exports.validEmail = [
  body("email").isEmail().withMessage("Email is invalid")
];

exports.passwordConfirmation = [
  body("newPassword").isLength({min: 4}).withMessage("Password length min 4 char or more"),
  body("confirmPassword").custom((value, {req})=> {
    if(value !== req.body.newPassword){
      throw new Error("Password confirmation doesn't match pass");
    }
    return true;
  })
];

exports.paramsUUID = [
  param("id").isUUID(4).withMessage("Invalid ID")
];

exports.paging = [
  (req, res, next) => {
    req.query.page = req.query.page || "1";
    req.query.limit = req.query.limit || "5";
    req.query.sortBy = req.query.sortBy || "createdAt";
    req.query.searchBy = req.query.searchBy || "email";
    req.query.search = req.query.search || "";
    req.query.reverse = req.query.reverse || 0;
    return next();
  },
  query("page").optional().toInt(10),
  query("limit").optional().toInt(10),
  query("reverse").optional().toBoolean(),
  query("searchBy").isIn(["email"]).withMessage("Data not found"),
  query("search").optional().trim(),
  query("sortBy").isIn(["email", "createdAt", "updatedAt"]).withMessage("Data not found"),
]; 

exports.check = (req, res, next)=> {
  const errorValidation = validationResult(req);
  if(!errorValidation.isEmpty()){
    return res.status(400).json({
      success: false,
      message: "Validation Error",
      results: errorValidation.array()
    });
  }
  return next();
};
