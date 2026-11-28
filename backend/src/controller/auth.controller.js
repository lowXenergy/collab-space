
import userModel from "../models/user.model.js";
import jwt from "jsonwebtoken";
import env from "../config/env.js";

function sendTokenResponse(user, res, message) {

    const token = jwt.sign(
        {
            id: user._id
        },
        env.JWT_SECRET,
        {
            expiresIn: "7d"
        }
    );

    res.cookie("token", token, {
        httpOnly: true,
        secure: env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 7 * 24 * 60 * 60 * 1000
    });

    return res.status(200).json({
        message,
        success: true,
        user: {
            id: user._id,
            email: user.email,
            fullname: user.fullname,
            role: user.role
        }
    });
}

export const register = async (req, res) => {

    const { email, password, fullname } = req.body;

    try {

        const existingUser = await userModel.findOne({
            email
        });

        if (existingUser) {
            return res.status(400).json({
                message: "User with this email already exists"
            });
        }

        const user = await userModel.create({
            email,
            password,
            fullname
        });

        return sendTokenResponse(
            user,
            res,
            "User registered successfully"
        );

    } catch (error) {

        console.log(error);

        return res.status(500).json({
            message: "Server error"
        });
    }
};
