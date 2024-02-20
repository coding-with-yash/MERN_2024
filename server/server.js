require("dotenv").config();

const express = require("express");
const app = express();

const router = require("./router/auth-router");
const connectDb = require("./utils/db");

app.use(express.json());                // Middleware to handale json data 

app.use("/api/auth", router);


const PORT = 5000;

connectDb().then(() => {

    app.listen( PORT, () => {
        console.log(`Server is Runing on Port : ${PORT}`);
    });

});


