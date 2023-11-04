import settingService from "../service/setting.service.js";
import asyncHanler from "../utils/asyncHandler.js";



const settingController = {
    createSetting: asyncHanler(async (req,res) => {
        await settingService.createSetting(req,res);
    }),
    createTypeSetting: asyncHanler(async (req,res) => {
        await settingService.createTypeSetting(req,res);
    }),
    editSetting: asyncHanler(async (req,res) => {
        await settingService.editSetting(req,res);
    }),
    getSettingList: asyncHanler(async (req,res) => {
        await settingService.getSettingList(req,res);
    }),
};
export default settingController