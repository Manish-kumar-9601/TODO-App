import mongoose from "mongoose";
import { Todo } from "../model/todo.model.js";
import { connect } from "../db/db.js";


export const deleteTodo = async (req, res) =>
{
    const isConnected = mongoose.connection.readyState;

    if (isConnected !== 1)
    {
        await connect();
        console.log("DB is not connected connecting again");
        return;
    }
    const { todoId } = req.body;
    console.log(todoId);
    try
    {
        if (!mongoose.Types.ObjectId.isValid(todoId)) return res.status(400).json({ message: "Not found todo " })
        await Todo.deleteOne({ _id: todoId });
        res.status(200).json({ message: "deleted successfully" })
    } catch (error)
    {
        res.status(400).json({ message: "failed to delete" })
        console.log(error);
    }

}