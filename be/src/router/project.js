import express from 'express';
import accountValidator from '../validations/accountValidation.js'
import validateData from '../middleware/validateData.js';
import projectController from '../controller/projectController.js';
import { checkToken, checkTokenTeacher } from '../middleware/verifyToken.js';
const projectRouter = express.Router();

projectRouter.post('/createProject',checkToken,checkTokenTeacher,projectController.createProject);
projectRouter.post('/updateProject/:projectId',checkToken,checkTokenTeacher,projectController.updateProject);
projectRouter.get('/getDetailProject/:projectId',checkToken,checkTokenTeacher,projectController.getDetailProject)
projectRouter.get('/getProjectByTeacher/:teacherId',checkToken,checkTokenTeacher,projectController.getProjectByTeacher)


export default projectRouter