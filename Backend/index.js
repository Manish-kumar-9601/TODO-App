
import app from "./app.js";
import 'dotenv/config'
import { connect } from "./db/db.js";
import mongoose from "mongoose";
const port = process.env.PORT || 300


try
{
    await connect();
    if (mongoose.ConnectionStates ===0)
    {
        await connect();
    }
} catch (error)
{
    console.log("mongoDB connection failed", error)
}
app.listen(port, () =>
{
    console.log(`server running at ${port}`)
})