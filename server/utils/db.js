const mongoose = require("mongoose");

const URI = process.env.MONGODB_URI;

const connectDb = async() => {
    try {

        await mongoose.connect(URI);
        console.log("Connection Successfuly Done in MongoDb");
        
    } catch (error) {
        
        console.error("Connection Failed",error);
        process.exit(0);

    }
}; 

module.exports = connectDb;