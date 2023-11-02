


const projectService = {
    createProject: async (req,res) => {
        const {ProjectCode,ProjectName,classId,TeamLeader,Description} = req.body;

        try {
            const existProject = await Project.findOne({where: {ProjectCode}});
            if (existProject){
                res.status(200).json({
                    message: "Project code is exist"
                })
            }
            else{
                Project.create({ProjectCode,ProjectName,classId,TeamLeader,Description}).then((result) => {
                    res.status(200).json({
                        message: "Project created successfully",
                        data: result
                    })
                }).catch((err) => {
                    res.status(500).json({
                        message: "Server Error" + err,
                    })
                });
            }
        } catch (error) {
            res.status(500).json({
                message: "Server Error" + error,
            })
        }
    }


}

export default projectService