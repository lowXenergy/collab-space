import userModel from "../models/user.model";
import jwt from "jsonwebtoken";
import env from "../config/env.js"

async function sendTokenResponse(user,res,message){

    const token = jwt.sign({
        id:user._id
    })
}