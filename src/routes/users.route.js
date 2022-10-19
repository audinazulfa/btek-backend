const users = require("express").Router();

const userController = require("../controllers/users.controller");

const {check, paramsUUID, basicUserCreds, paging} = require("../middlewares/validator.middleware");

users.get("/", paging, check, userController.readAllUsers);
users.get("/:id", paramsUUID, check, userController.readUserById);
users.post("/", basicUserCreds, check, userController.createUser);
users.put("/:id", paramsUUID, basicUserCreds, check, userController.updateUserById);
users.delete("/:id", userController.deleteUserById);

module.exports = users;
