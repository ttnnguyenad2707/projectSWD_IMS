import asyncHanler from "../utils/asyncHandler.js";
import projectService from '../service/project.service.js'

const projectController = {
    createProject: asyncHanler(async (req,res) => {
        await projectService.createProject(req,res);
    }),
    getProjectByTeacher: asyncHanler(async (req,res) => {
        await projectService.getProjectByTeacher(req,res);
    }),
    getDetailProject: asyncHanler(async (req,res) => {
        await projectService.getDetailProject(req,res);
    }),
    updateProject: asyncHanler(async (req,res) => {
        await projectService.updateProject(req,res);
    }),
}

export default projectController