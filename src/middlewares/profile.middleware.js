const { body, param, matchedData, validationResult } = require("express-validator");

exports.paramsUUID = [
  param("id").isUUID(4).withMessage("Invalid ID")
];

exports.basicUserCreds = [
  body("fullName").isLength({min: 3}).withMessage("Full Name length must be 3 char or more"),
  body("birthDate").isDate().withMessage("Input birthdate, format: YYYY-MM-DD")
];

exports.check = (req, res, next)=> {
  const errorValidaton = validationResult(req);
  console.log(matchedData(req, {includeOptionals: true}));
  if(!errorValidaton.isEmpty()){
    return res.status(400).json({
      success: false,
      message: "Validation error",
      results: errorValidaton.array()
    });
  }
  return next();
};
