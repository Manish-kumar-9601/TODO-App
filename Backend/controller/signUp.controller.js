import { User } from "../model/user.model.js";

export const signUpUser = async (req, res) =>
{

    const isConnected = mongoose.connection.readyState;

    if (isConnected !== 1)
    {
        await connect();
        console.log("DB is not connected connecting again");
        return;
    }
    const { userName, age, profession, experience, password,email } = req.body;
    if (userName && age && profession && experience && password && experience && email)
    {

        User.create({ userName: userName, age: age, profession: profession, experience: experience, password: password, email: email })
        console.groupEnd(userName, age, profession, experience,email)
        res.status(200).send({ message: "user is register successfully" })
    } else
    {
        res.status(400).send({ message: "failed to signUp" })
    }
}