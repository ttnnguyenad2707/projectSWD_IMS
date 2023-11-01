import Role from "../models/Role.js"
import accountService from "../service/account.service.js"
import asyncHandler from "../utils/asyncHandler.js"

const accountController = {
    getAllBook: async (req, res) => {
        res.send("All book")
    },
    createBook: async (req, res) => {
        try {


            const result =await Book.create({
                title: "Clean Code",
                author: "Robert Cecil Martin",
                release_date: "2021-12-14",
                subject: 3
            })
            return res.status(200).json(result)
        } catch (error) {
            throw new Error(error)
        }
    },
    register: asyncHandler(async (req,res) => {
        await accountService.register(req,res);
    }),
    login: asyncHandler(async (req,res) => {
        const {roleName} = req.body;
        await Role.create({roleName});
        // await accountService.login(req,res);
    }),
    logout: asyncHandler(async (req,res) => {
        await accountService.logout(req,res);
    }),
}

export default accountController