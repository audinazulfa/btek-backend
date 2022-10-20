const auth = require("express").Router();

const {validEmail, check, passwordConfirmation} = require("../middlewares/validator.middleware");

auth.post("/login", validEmail, check, require("../controllers/auth.controller").login);
auth.post("/register", require("../controllers/auth.controller").register);
auth.post("/forgot-password", validEmail, check, require("../controllers/auth.controller").forgotPassword);
auth.post("/reset-password", validEmail, passwordConfirmation, check, require("../controllers/auth.controller").resetPassword);
// auth.post("/forgot-password") hanya mengirimkan body yg berisi email => data baru di tabel resetPassword => column generic, code/secret code, email, userId;
// auth.post("/reset-password") yg perlu dikirim melalui body ada code/random code, email, newPassword, confirmPassword; => email, newpass, confirmpass harus divalidasi
// pasti memerlukn table yg isinya random code ketika mengirimkan email 
module.exports = auth;
