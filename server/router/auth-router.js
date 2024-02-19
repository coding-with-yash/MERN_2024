const express = require("express");
const app = express();

const router = express.Router();
// const {home,register} = require("../controllers/auth-contoller");
const authcontrollers = require("../controllers/auth-contoller");

router.route("/").get(authcontrollers.home);

router.route("/register").post(authcontrollers.register);


module.exports = router;





// router.route("/").get((req,res) => {
//     res
//         .status(200)
//         .send("Router Defining MERN 2024 StartUp");
// });

// router.route("/register").get((req,res) => {
//     res
//         .status(200)
//         .send("Register Page");
// });
