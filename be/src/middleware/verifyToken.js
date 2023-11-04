import jwt from 'jsonwebtoken'
import asyncHanler from '../utils/asyncHandler';

const checkToken = asyncHanler((req, res, next) => {
    const token = req.headers.authorization;
    const ACCESS_KEY = process.env.ACCESS_KEY;
    if (!token) {
        return res.status(401).json({ error: "Missing token" });
    }

    try {
        const decoded = jwt.verify(token, ACCESS_KEY);

        req.user = decoded;

    } catch (error) {
        return res.status(401).json({ error: "Invalid token" });
    }
});

const checkTokenAdmin = asyncHanler(async (req,res,next) => {
    await checkToken(req,res, () => {
        if (req.user.roleId === 5){
            next();

        }
        else{
            return res.status(403).json("You are not an Admin");

        }
    });
})

const checkTokenStudent = asyncHanler(async (req,res,next) => {
    await checkToken(req,res, () => {
        if (req.user.roleId === 1){
            next();

        }
        else{
            return res.status(403).json("You are not an Student");

        }
    });
})

const checkTokenLeader = asyncHanler(async (req,res,next) => {
    await checkToken(req,res, () => {
        if (req.user.roleId === 2){
            next();

        }
        else{
            return res.status(403).json("You are not an Leader");

        }
    });
})


const checkTokenTeacher = asyncHanler(async (req,res,next) => {
    await checkToken(req,res, () => {
        if (req.user.roleId === 3){
            next();

        }
        else{
            return res.status(403).json("You are not an Teacher");

        }
    });
})


const checkTokenManager = asyncHanler(async (req,res,next) => {
    await checkToken(req,res, () => {
        if (req.user.roleId === 4){
            next();

        }
        else{
            return res.status(403).json("You are not an Manager");

        }
    });
})