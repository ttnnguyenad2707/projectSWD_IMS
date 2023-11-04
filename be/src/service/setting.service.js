import Setting from "../models/setting.js";
import typeSetting from "../models/typeSetting.js";



const settingService = {
    createTypeSetting: async (req, res) => {
        const { name } = req.body;
        try {
            typeSetting.create({ name }).then(data => {
                res.status(201).json({ message: "Created type setting successfully", data });

            })
        } catch (error) {
            res.status(500).json({
                message: "Server Error" + error,
            })
        }
    },
    createSetting: async (req, res) => {
        const { name, type, status } = req.body;

        try {
            Setting.create({ name, type, status }).then(data => {
                res.status(201).json({ message: "Created successfully", data });
            })
        } catch (error) {
            res.status(500).json({
                message: "Server Error" + error,
            })
        }
    },
    editSetting: async (req, res) => {
        const { settingId } = req.params
        const { name, type, status } = req.body;
        try {
            const setting = await Setting.findOne({ where: { id: settingId } });
            if (!setting) {
                return res.status(200).json({ message: "Setting id not found" })
            }
            else {
                setting.name = name;
                setting.type = type;
                setting.status = status;
                await setting.save()
                return res.status(200).json({ message: "Setting updated successfully", data: setting });
            }
        } catch (error) {
            res.status(500).json({
                message: "Server Error" + error,
            })
        }

    },
    getSettingList :async(req,res) => {
        try {
            Setting.findAll().then(data => {
                return res.status(200).json({message:"get successfully",data})
            })
        } catch (error) {
            res.status(500).json({
                message: "Server Error" + error,
            })
        }
    }



}

export default settingService