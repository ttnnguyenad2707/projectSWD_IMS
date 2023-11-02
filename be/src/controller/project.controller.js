import asyncHanler from "../utils/asyncHandler.js";


const projectController = {
    createProject: asyncHanler(async (req,res) => {
        await projectService.createProject(req,res);
    }),
}

export default projectController