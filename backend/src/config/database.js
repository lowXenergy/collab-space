import mongoose from "mongoose";
import env from "./env.js"

const connectDB=async()=>{
    await mongoose.connect(env.MONGO_URI);
    console.log("Connected to database")
}

export default connectDB;