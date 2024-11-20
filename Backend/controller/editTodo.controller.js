import mongoose from "mongoose";
import { Todo } from "../model/todo.model.js";
import { connect } from "../db/db.js";

export const EditTodo = async (req, res) =>
{
    const isConnected = mongoose.connection.readyState;

    if (isConnected !== 1)
    {
        await connect();
        console.log("DB is not connected connecting again");
        return;
    }
    try
    {
        const { todoId, newTitle, newTodo } = req.body;
        console.log(todoId, newTitle, newTodo);
        console.log(!newTitle || !newTodo || !todoId);
        if (!todoId || !newTitle || !newTodo)return res.status(400).json({ message: "Not found todoId ,newTitle,newTodo" })


        const updatedTodo = await Todo.findByIdAndUpdate({ _id: todoId }, { todoTitle: newTitle, todo: newTodo },{new:true})
        res.status(200).json({ message: `updated successfully ${updatedTodo}` })


    } catch (error)
    {
        res.status(400).json({ message: "failed" })
    }

}