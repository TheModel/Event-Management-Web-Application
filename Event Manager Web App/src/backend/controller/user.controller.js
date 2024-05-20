/* eslint-disable no-unused-vars */
import {jwt} from "jsonwebtoken"
import { User } from "../models/user.model";
import bycrypt from "bcrypt"

const createSecretToken = (id) =>{
    return jwt.sign({id},"Secret key",{
        expiresIn:3*24*60*60
    });
}

export const createUser = async (req,res) =>{
    try{
        
        const {username,password,email} = req.body

        if( !username || !password || !email){
            return res.status(200).json({message:'All input required'})
        }

        const oldUser = await User.findOne({username});

        if (oldUser) {
            return res.status(409).send("User Already Exist. Please Login");
          }
          
        const salt = 10;
        const hashPassword = bycrypt.hash(password,salt);
        const newUser =  new User({
            name: username,
            password:hashPassword,
            email:email
        })

        const user = newUser.save();
        const token = createSecretToken()

        res.cookies("token",token,{
            path: "/", // Cookie is accessible from all paths
            expires: new Date(Date.now() + 86400000), // Cookie expires in 1 day
            secure: true, // Cookie will only be sent over HTTPS
            httpOnly: true, // Cookie cannot be accessed via client-side scripts
            sameSite: "None",
          })

          console.log("cookie set succesfully");

          res.json(user);



    }catch(error){
        console.log('Err: ',error)
    }
};



