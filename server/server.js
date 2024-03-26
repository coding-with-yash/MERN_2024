require("dotenv").config();

const express = require("express");
const app = express();

const authRouter = require("./router/auth-router");
const contactRouter = require("./router/contact-router");

const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");
const ContactForm = require("./controllers/contact-controller");


app.use(express.json());                // Middleware to handale json data 

app.use("/api/auth", authRouter);

app.use("/api/form", contactRouter);

app.use(errorMiddleware);

const PORT = 5000;

connectDb().then(() => {

    app.listen( PORT, () => {
        console.log(`Server is Runing on Port : ${PORT}`);
    });

});


