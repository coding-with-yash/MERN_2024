const User = require("../models/user-model");
const bcrypt = require("bcryptjs");
 

const home = async(req,res)=>{
    try {  
        res
        .status(200)
        .send("Home Page MERN 2024 ");

    } catch (error) {
        res
        .status(400)
        .send({msg:"Home Page Not Found"})  
    }
}

const register = async(req,res) =>{
    try {
        console.log(req.body);
        
        const { username, email, phone, password } = req.body;

        const userExist = await User.findOne({ email });

        if(userExist)
        {
            return res.status(400).json({ msg: "Email already exits" });
        }

        //hash the password 
        const saltRound = 10;
        const hash_password = await bcrypt.hash(password, saltRound);

        // Create user
        const userCreated = await User.create({ username, email, phone, password:hash_password });

        // JWT Token 
        res.status(201).json({  msg: "Register Successful",    
                                token: await userCreated.generateToken(), 
                                userId: userCreated._id.toString(), 
                            });
    } catch (error) {
        res.status(500).json("Internal Server Error");
    }
}


const login = async(req,res) => {
    try {
        const {email, password} = req.body;

        const userExist = await User.findOne({ email });
        
        console.log(userExist);

        if(!userExist)
        {
            return res.status(400).json({ msg:"User not exits" });
        }

        // comapare the password 
        const user = await userExist.comparePassword(password);

        if(user)
        {
            res.status(200).json({
                msg: "Login Successful",
                token: await userExist.generateToken(),
                userId: userExist._id.toString(),
            });
        }
        else{ 
            res.status(401).json({ msg: "Invalid Login Credentials"})
        }

    } catch (error) {
        console.log(error);
        res.status(400).json({ msg:"Internal Server Error" });
    }

}



module.exports = {home, register, login};