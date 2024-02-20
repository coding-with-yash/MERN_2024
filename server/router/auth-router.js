const express = require("express");
const app = express();

const router = express.Router();
// const {home,register} = require("../controllers/auth-contoller");
const authcontrollers = require("../controllers/auth-contoller");

const signupSchema = require("../validators/auth-validator");
const validate = require("../middlewares/validate-middleware");


router.route("/").get(authcontrollers.home);
router.route("/register").post(validate(signupSchema), authcontrollers.register);
router.route("/login").post(authcontrollers.login);



module.exports = router;

