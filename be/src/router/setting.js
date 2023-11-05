import express from 'express';
import validateData from '../middleware/validateData.js';
import settingController from '../controller/settingController.js';
import { checkToken, checkTokenAdmin } from '../middleware/verifyToken.js';
const settingRouter = express.Router();

settingRouter.get('/typeSetting', checkToken, checkTokenAdmin,settingController.getTypeSetting)
settingRouter.get("/:id", checkToken, checkTokenAdmin,settingController.getDetailSetting)
settingRouter.get('/', checkToken, checkTokenAdmin,settingController.getSettingList)
settingRouter.post('/create', checkToken, checkTokenAdmin,settingController.createSetting);
settingRouter.post('/type/create', checkToken, checkTokenAdmin,settingController.createTypeSetting);
settingRouter.put('/:settingId/update', checkToken, checkTokenAdmin,settingController.editSetting)

export default settingRouter