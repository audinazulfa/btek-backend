const multer = require("multer");
const path = require("path");

const upload = multer({
  dest: path.join( "assets", "uploads")
});

console.log("Upload");

module.exports = upload;
