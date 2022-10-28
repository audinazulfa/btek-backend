const upload = require("../middlewares/upload.middleware");

const profile = require("express").Router();

profile.get("/", require("../controllers/profile.controller").readProfileById);
profile.get("/:id", require("../controllers/profile.controller").readProfileById);
profile.put("/", upload.single("picture"), require("../controllers/profile.controller").updateProfile);

module.exports = profile;
