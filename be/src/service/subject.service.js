import  Subject  from "../models/Subject.js"
async function createSubject ({assignment, name, description, status}) {
    try {
        const subject = await Subject.create({name, description, status});
        return subject;
    } catch (error) {
        return error.message;
    }
}

async function updateSubject ({id, name, description, status}) {
    try {
        const subject = await Subject.update({name, description, status},{ where: { id }, returning: true })
        return subject;
    } catch (error) {
        return error.message;
    }
}

async function deleteSubject ({subjectId}) {
    try {
        const subject = await Subject.destroy({where: {id: subjectId}})
        return true;
    } catch (error) {
        return error.message;
    }
}

async function assaiSubject ({assignment}){
    try {
        
    } catch (error) {
        return error.message;
    }
}

async function getSubjectlist () {
    try {
        const subject = await Subject.findAll();
        console.log(subject);
        return subject
    } catch (error) {
        return error.message;
    }
}

async function getSubjectbyID ({subjectId}) {
    try {
        const subject = await Subject.findOne({where:{id: subjectId}});
        console.log(subject);
        return subject;
    } catch (error) {
        return error.message;
    }
}
export default {createSubject, updateSubject, deleteSubject, assaiSubject,getSubjectlist,getSubjectbyID}