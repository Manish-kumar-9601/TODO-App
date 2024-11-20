import mongoose from "mongoose";
import { User } from "../model/user.model.js";
import { connect } from "../db/db.js";


export const SignUpUser = async (req, res) =>
{

    const isConnected = mongoose.connection.readyState;

    if (!isConnected == 1)
    {

        console.log("DB is not connected connecting again");
        await connect();
        return;
    }


    try
    {

        const { userName, email, age, profession, experience, password } = req.body;
        if (!userName || !password || !age || !email || !profession || !experience)
        {
            return res.status(400).json({ error: 'Username and password are required' });
        }
 

        const dbRes = await User.create({ userName: userName, age: age, profession: profession, experience: experience, password: password, email: email })
        console.groupEnd(`${userName}, ${email} , ${age}, ${profession} ,${experience} ${password}`)
        res.status(200).json({ message: "user is register successfully", dbRes })


    } catch (error)
    {
        res.status(400).json({ message: "failed to signUp", error })
    }

}
export const GetUser = async (req, res) =>
{
    const { id } = req.body;
    const user = User.find({ _id: id })
    // res.status(200).json( ))
    console.log(user);
}