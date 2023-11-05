import subjectService from "../service/subjectService.js"
import  Subject  from "../models/Subject.js"

async function createSubject(req,res){
    try {
        const {assignment,name, description,status} = req.body;
        const subject = await subjectService.createSubject({assignment, name, description, status});
        res.status(200).json({
            message: 'okok',
            data: subject,
        })
    } catch (error) {
        res.status(500).json({ message: error.toString() })
    }
}
async function getSubjectList(req,res){
    try {
        const subject = await subjectService.getSubjectlist();
        console.log(subject);
        res.status(200).json({
            message: 'okok',
            data: subject,
        })
    } catch (error) {
        res.status(500).json({ message: error.toString() })
    }
}
async function updateSubjectList(req,res){
    try {
        const {id, name, description, status} = req.body;
        const subject = await subjectService.updateSubject({id, name, description, status});
        console.log(subject);
            res.status(200).json({
                message: 'okok',
            })
    } catch (error) {
        res.status(500).json({ message: error.toString() })
    }
}
async function deleteSubjectList(req,res){
    try {
        const {subjectId} = req.body
        console.log(subjectId);
        const subject = await subjectService.deleteSubject({subjectId});
        if(subject == true){
            res.status(200).json({
                message: 'okok',
            })
        }
        else{
            res.status(501).json({
                message: 'false',
            })
        }
    } catch (error) {
        res.status(500).json({ message: error.toString() })
    }
}
async function assaiSubject(req,res){
    try {
        const {assignment} = req.body
        const subject = await subjectService.assaiSubject({assignment});
        res.status(200).json({
            message: 'okok',
            data: subject,
        })
    } catch (error) {
        res.status(500).json({ message: error.toString() })
    }
}
async function getSubjectbyID(req,res){
    try {
        const subjectId= req.params.id;
        console.log(subjectId);
        const subject = await subjectService.getSubjectbyID({subjectId});
        res.status(200).json({
            message: 'okok',
            data: subject,
        })
    } catch (error) {
        res.status(500).json({ message: error.toString() })
    }
}
async function activeStatus(req,res){
    try {
        const subjectId= req.params.id;
        console.log(subjectId);
        const subject = await subjectService.activeStatus({subjectId});
        res.status(200).json({
            message: 'okok',
            data: subject,
        })
    } catch (error) {
        res.status(500).json({ message: error.toString() })
    }
}
async function deactiveStatus(req,res){
    try {
        const subjectId= req.params.id;
        console.log(req.params.id);
        console.log(subjectId);
        const subject = await subjectService.deactiveStatus({subjectId});
        res.status(200).json({
            message: 'okok',
            data: subject,
        })
    } catch (error) {
        res.status(500).json({ message: error.toString() })
    }
}
export default {createSubject,getSubjectList,assaiSubject,deleteSubjectList,updateSubjectList,getSubjectbyID,deactiveStatus,activeStatus}