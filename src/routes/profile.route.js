const upload = require("../middlewares/upload.middleware");

const profile = require("express").Router();

profile.get("/", require("../controllers/profile.controller").readProfileById);
profile.get("/:id", require("../controllers/profile.controller").readProfileById);
profile.put("/", upload("picture"), require("../controllers/profile.controller").updateProfile);
//setelah menit 16, uplad.single diahpus jadi upload aja

module.exports = profile;
