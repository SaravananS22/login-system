import jwt from 'jsonwebtoken';
import { config } from 'dotenv';

config();

export const generateTokenAndCookie = (res,userId)=>{
    const token = jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn:"7d",
    })

    res.cookie("token",token,{
        httpOnly:true, // only accessible by the server
        secure: process.env.NODE_ENV === 'production', // in production http -> https
        sameSite:"strict", // prevent from attack csrf
        maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return token
}