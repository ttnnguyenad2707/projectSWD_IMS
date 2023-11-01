import express from 'express';
import accountController from '../controller/account.controller.js';
import accountValidator from '../validations/account.validation.js'
import validateData from '../middleware/validateData.js';
const accountRouter = express.Router();

accountRouter.post('/register',validateData(accountValidator.validateRegister),accountController.register);
accountRouter.post('/login',accountController.login);
accountRouter.post('/logout',accountController.logout);
accountRouter.post('/role',accountController.role);

export default accountRouter