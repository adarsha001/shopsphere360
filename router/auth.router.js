const express = require("express");
const { register, Home, login, hello, user } = require("../controller/auth.controller");
const {signupSchema,loginSchema} = require("../validators/auth-validators");
const validate = require("../middlewares/validate-middleware");
const authmiddleware=require("../middlewares/auth-middleware")
const router = express.Router();

router.route("/").get(Home);
// Apply the validate middleware before the register controller
router.route("/register").post(validate(signupSchema), register);
router.route("/hello").get(hello);
router.route("/login").post(validate(loginSchema),login);
router.route("/user").get(authmiddleware, user)
module.exports = router;
