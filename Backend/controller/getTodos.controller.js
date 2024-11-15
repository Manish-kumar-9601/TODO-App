import mongoose from "mongoose";

import { Todo } from "../model/todo.model.js"



const getTodo = async (req, res) =>
{
    const isConnected = mongoose.connection.readyState;

    if (isConnected !== 1)
    {
        await connect();
        console.log("DB is not connected connecting again");
        return;
    }
    // const {id}=req.body;
    const todo = await Todo.find({ author: "673359729b72b22631a3ce5e" });
    res.send(todo)
    mongoose.connection.close()
}
export { getTodo }