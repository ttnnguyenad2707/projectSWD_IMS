import Role from "../models/Role.js"
import accountService from "../service/account.service.js"
import asyncHandler from "../utils/asyncHandler.js"

const accountController = {
    register: asyncHandler(async (req,res) => {
        await accountService.register(req,res);
    }),
    login: asyncHandler(async (req,res) => {
        
        await accountService.login(req,res);
    }),
    logout: asyncHandler(async (req,res) => {
        await accountService.logout(req,res);
    }),
    role: asyncHandler(async (req,res) => {
        const {roleName} = req.body;
        await Role.create({roleName});
        return res.send("add oke")
    }),
}

export default accountController