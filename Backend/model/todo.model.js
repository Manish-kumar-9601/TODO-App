import mongoose from "mongoose";

export const todoSchema = new mongoose.Schema({
    author:{
        type:mongoose.ObjectId,
        ref:"User"
    },
    todoTitle: {
        type: String,
    },
    todo: {
        type: String
    }
}, { timestamps: true })
export const Todo = mongoose.model("Todo",todoSchema)