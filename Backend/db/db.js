
import mongoose from "mongoose";
import { todoSchema } from "../model/todo.model.js";
import { UserSchema } from "../model/user.model.js";
import { MongoClient, ServerApiVersion } from "mongodb";
import 'dotenv/config'


// Replace the placeholder with your Atlas connection string
const url = process.env.CONNECTION_URL;
const client = new MongoClient(url, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

export async function connect ()
{

    try
    {
        const connect = await mongoose.connect(url);
        // client.db("todo_App");

        connect.model("Todo", todoSchema)
        connect.model("User", UserSchema)
        console.log("  You successfully connected to MongoDB!");
        
    } catch (error)
    {
        console.error("failed to connect with mongodb", error)
    }
}



