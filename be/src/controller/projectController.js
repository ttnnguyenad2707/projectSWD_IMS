import asyncHandler from "./asyncHandler.js"
import projectService from '../service/projectService.js'

const projectController = {
    createProject: asyncHandler(async (req,res) => {
        await projectService.createProject(req,res);
    }),
    getProjectByTeacher: asyncHandler(async (req,res) => {
        await projectService.getProjectByTeacher(req,res);
    }),
    getDetailProject: asyncHandler(async (req,res) => {
        await projectService.getDetailProject(req,res);
    }),
    updateProject: asyncHandler(async (req,res) => {
        await projectService.updateProject(req,res);
    }),
}

export default projectController