const routes = require("express").Router();

const authMiddleware = require("../middlewares/auth.middleware");
const auth = require("./auth.route");

routes.use("/users", require("./users.route"));
routes.use("/auth", require("./auth.route"));
routes.use("/profile", authMiddleware, require("./profile.route"));

module.exports = routes;
