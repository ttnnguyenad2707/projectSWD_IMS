import express from 'express';
import accountValidator from '../validations/account.validation.js'
import validateData from '../middleware/validateData.js';
import projectController from '../controller/project.controller.js';
const projectRouter = express.Router();

projectRouter.post('/createProject',projectController.createProject);
projectRouter.post('/updateProject/:projectId',projectController.updateProject);
projectRouter.get('/getDetailProject/:projectId',projectController.getDetailProject)
projectRouter.get('/getProjectByTeacher/:teacherId',projectController.getProjectByTeacher)


export default projectRouter