import mongoose from "mongoose";

import { Todo } from "../model/todo.model.js"
import { connect } from "../db/db.js";



export const GetTodo = async (req, res) =>
{
    const isConnected = mongoose.connection.readyState;

    if (isConnected !== 1)
    {
        await connect();
        console.log("DB is not connected connecting again");
        return;
    }
    try {
        
        const {userId}=req.params;
        console.log(userId);
        const todo = await Todo.find({ author:userId }).sort({createdAt:-1});
        res.send(todo)
        
    } catch (error) {
        res.json({message:`failed get todos ${error}`})
    }
}