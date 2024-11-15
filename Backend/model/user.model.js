﻿import mongoose from "mongoose";
import { hash } from 'bcrypt'
export const UserSchema = new mongoose.Schema({

    userName: {
        type: String,
        required: true,

    },
    email: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true,
    },
    profession: {
        type: String,
        required: true,

    },
    experience: {
        type: Number,
        required: true,

    },
    password: {
        type: String,
        required: [true, 'Password is required']

    },
    todo: {
        type: mongoose.ObjectId,
        ref: "Todo"
    }
    // userEmail: {
    //     type: String,

    // }
}, { timestamps: true })


UserSchema.pre('save', async function (next)
{

    const hashedPassword = await hash(this.password, 10)
    this.password = hashedPassword
    next()
})

export const User = mongoose.model("User", UserSchema)