import jwt from 'jsonwebtoken'
import asyncHanler from '../controller/asyncHandler.js';

const checkToken = asyncHanler((req, res, next) => {
    
    try {
        const token = req.headers.authorization.split(" ")[1];
    const ACCESS_KEY = process.env.ACCESS_KEY;
    if (!token) {
        return res.status(401).json({ error: "Missing token" });
    }

        const decoded = jwt.verify(token, ACCESS_KEY);

        req.user = decoded;
        next();

    } catch (error) {
        return res.status(401).json({ error: "Invalid token" });
    }
});

const checkTokenAdmin = asyncHanler(async (req,res,next) => {
    await checkToken(req,res, () => {
        if (req.user.role === 5){
            next();

        }
        else{
            return res.status(403).json("You are not an Admin");

        }
    });
})

const checkTokenStudent = asyncHanler(async (req,res,next) => {
    await checkToken(req,res, () => {
        if (req.user.role === 1){
            next();

        }
        else{
            return res.status(403).json("You are not an Student");

        }
    });
})

const checkTokenLeader = asyncHanler(async (req,res,next) => {
    await checkToken(req,res, () => {
        if (req.user.role === 2){
            next();

        }
        else{
            return res.status(403).json("You are not an Leader");

        }
    });
})


const checkTokenTeacher = asyncHanler(async (req,res,next) => {
    await checkToken(req,res, () => {
        if (req.user.role === 3){
            next();

        }
        else{
            return res.status(403).json("You are not an Teacher");

        }
    });
})


const checkTokenManager = asyncHanler(async (req,res,next) => {
    await checkToken(req,res, () => {
        if (req.user.role === 4){
            next();

        }
        else{
            return res.status(403).json("You are not an Manager");

        }
    });
})

export {checkToken,checkTokenAdmin,checkTokenLeader,checkTokenManager,checkTokenStudent,checkTokenTeacher}