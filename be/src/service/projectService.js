import Account from '../models/Account.js';
import Class from '../models/Class.js';
import Project from '../models/Project.js'


const projectService = {
    createProject: async (req, res) => {
        const { ProjectCode, ProjectName, classId, TeamLeader, Description, TeacherId } = req.body;

        try {
            const existProject = await Project.findOne({ where: { ProjectCode } });
            if (existProject) {
                res.status(200).json({
                    message: "Project code is exist"
                })
            }
            else {
                Project.create({ ProjectCode, ProjectName, classId, TeamLeader, Description, TeacherId }).then((result) => {
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
    },
    getProjectByTeacher: async (req, res) => {
        const { teacherId } = req.params;
        try {
            const teacher = await Account.findOne({ where: { id: teacherId } });

            if (!teacher) {
                return res.status(200).json({ message: "Teacher is not found" });
            }

            const projects = await Project.findAll({ where: { teacherId },include :[{model:Class,as:"classes"},{model:Account,as:"teacher"},{model:Account,as:"leader"}] });
            return res.status(200).json({ 
                message: "Get Project Successfully", 
                data: projects });
        } catch (error) {
            return res.status(500).json({ message: "Server Error " + error.message });
        }
    },

    getDetailProject: async (req, res) => {
        const { projectId } = req.params;
        try {
            Project.findOne({ where: { id: projectId },include :[{model:Class,as:"classes"},{model:Account,as:"teacher"},{model:Account,as:"leader"}] }).then(data => {
                if (data) {
                    return res.status(200).json({ message: "Get Project Successfully", data });
                }
                else {
                    return res.status(200).json({ message: "Project id not found" })
                }
            })
        } catch (error) {
            res.status(500).json({
                message: "Server Error" + error,
            })
        }
    },

    updateProject: async (req, res) => {
        const { projectId } = req.params;
        const { ProjectName, classId, TeamLeader, Status, Description } = req.body;
        try {
            const project = await Project.findOne({where :{id : projectId}});
            if (!project) {
                return res.status(200).json({ message: "Project id not found" })

            }
            else {
                project.ProjectName = ProjectName;
                project.classId = classId;
                project.TeamLeader = TeamLeader;
                project.Status = Status;
                project.Description = Description;
                await project.save();
                return res.status(200).json({ message: "Project updated successfully", data: project });
            }
        } catch (error) {
            return res.status(500).json({ message: "Server Error " + error.message });

        }
    }


}

export default projectService