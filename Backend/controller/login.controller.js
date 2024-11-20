import { compare } from "bcrypt";
import { User } from "../model/user.model.js";
import jwt from 'jsonwebtoken'
import mongoose from "mongoose";

export const Login = async (req, res) =>
{
    const isConnected = mongoose.connection.readyState;

    if (isConnected !== 1)
    {
        await connect();
        console.log("DB is not connected connecting again");
        return;
    }
    const { email, password } = req.body;
    console.log({ "email": email, "password": password })
    if (email && password)
    {
        try
        {
            const user = await User.find({ email: email })
            console.log("result", user[0])
            const savedPassword = user[0].password;
            console.log("password", user[0].password)
            if(!user)return res.status(400).json({message:"user not found"});
            const isValid=compare(password,savedPassword);
            if(!isValid)return res.status(400).json({message:"Invalid credentials"})
            const token=jwt.sign({id:user[0]._id},process.env.JWT_SECRET,{expiresIn:"24h"});
            res.json({token});
        } catch (error)
        {
            res.status(400).json({error:error.message})
        }

    }
}