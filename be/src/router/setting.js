import express from 'express';
import validateData from '../middleware/validateData.js';
import settingController from '../controller/setting.controller.js';
const settingRouter = express.Router();

settingRouter.post('/create',settingController.createSetting);
settingRouter.post('/type/create',settingController.createTypeSetting);
settingRouter.put('/:settingId/update',settingController.editSetting)

export default settingRouter