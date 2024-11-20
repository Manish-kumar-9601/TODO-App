 
import mongoose from "mongoose";
import { Todo } from "../model/todo.model.js";

export const  AddTodo = async (req, res) =>
    {
        const isConnected = mongoose.connection.readyState;

        if (isConnected !== 1)
        {
            await connect();
            console.log("DB is not connected connecting again");
            return;
        }

    const {userId, title, todo } = req.body;
    console.group(title, todo)
   
    if (title && todo)
    {
        console.group(title, todo)
        Todo.create({ todoTitle: title, todo: todo, author: userId })

        res.status(200).json({message:"register successfully"})
    } else
    {
        return res.status(400).json({ message: "failed to get todo" });
    }

    // mongoose.connection.close()

}
// {"_id":{"$oid":"673359729b72b22631a3ce5e"}, 