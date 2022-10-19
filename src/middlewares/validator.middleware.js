const {body, param, query, validationResult} = require("express-validator");

exports.basicUserCreds = [
  body("email").isEmail().withMessage("Email is invalid"),
  body("password").isLength({min: 8}).withMessage("Password length must be 8 char or more")
    .isStrongPassword({minUppercase: 1}).withMessage("Password must contain 1 or more uppercase")
    .isStrongPassword({minLowercase: 1}).withMessage("Password must contain 1 or more lowercase")
    .isStrongPassword({minSymbols: 1}).withMessage("Password must contain 1 or more symbol")
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
