import settingService from "../service/settingService.js";
import asyncHandler from "./asyncHandler.js"



const settingController = {
    createSetting: asyncHandler(async (req,res) => {
        await settingService.createSetting(req,res);
    }),
    createTypeSetting: asyncHandler(async (req,res) => {
        await settingService.createTypeSetting(req,res);
    }),
    editSetting: asyncHandler(async (req,res) => {
        await settingService.editSetting(req,res);
    }),
    getSettingList: asyncHandler(async (req,res) => {
        await settingService.getSettingList(req,res);
    }),
    getDetailSetting: asyncHandler(async (req,res) => {
        await settingService.getDetailSetting(req,res);
    }),
    getTypeSetting: asyncHandler(async (req,res) => {
        await settingService.getTypeSetting(req,res);
    }),
};
export default settingController