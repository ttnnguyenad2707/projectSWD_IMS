import express from 'express';
import accountValidator from '../validations/account.validation.js'
import validateData from '../middleware/validateData.js';
import projectController from '../controller/project.controller.js';
const projectRouter = express.Router();

projectRouter.post('/createProject',validateData(accountValidator.validateRegister),projectController.createProject);


export default projectRouter