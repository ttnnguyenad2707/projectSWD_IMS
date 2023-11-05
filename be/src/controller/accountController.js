import Account from "../models/Account.js";
import Role from "../models/Role.js";
import accountService from "../service/accountService.js";
import asyncHandler from "./asyncHandler.js";

const accountController = {
  register: asyncHandler(async (req, res) => {
    await accountService.register(req, res);
  }),
  login: asyncHandler(async (req, res) => {
    const { roleName } = req.body;
    // await Role.create({roleName});
    await accountService.login(req, res);
  }),
  logout: asyncHandler(async (req, res) => {
    await accountService.logout(req, res);
  }),
  role: asyncHandler(async (req, res) => {
    const { roleName } = req.body;
    await Role.create({ roleName });
    return res.send("add oke");
  }),
  getAccountByRole: asyncHandler(async (req, res) => {
    await accountService.getAccountByRole(req, res);
  }),
};

export default accountController;
