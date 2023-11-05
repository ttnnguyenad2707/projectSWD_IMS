import express from 'express';
import subjectController from '../controller/subject.controller.js';

const subjectRouter = express.Router();

subjectRouter.get('/', subjectController.getSubjectList);
subjectRouter.get('/:id', subjectController.getSubjectbyID);
subjectRouter.post('/newsubject', subjectController.createSubject);
subjectRouter.post('/updatesubject', subjectController.updateSubjectList);
subjectRouter.post('/delete', subjectController.deleteSubjectList);
subjectRouter.post('/assai', subjectController.assaiSubject);
export default subjectRouter