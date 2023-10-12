const Student = require("../models/student")



const student = {
    createStudent : async (req,res) => {
        try {
            const {name,gender} =await req.body;
            const newStudent = await Student.create({name,gender});
            return res.status(200).json(newStudent);
        } catch (error) {
            throw new Error("error create")
        }

    },
    getStudent: async (req,res) => { 
        try {
            const allStudent = await Student.find({});
            return res.status(200).json(allStudent);
        } catch (error) {
            throw new Error("error get")
            
        }
    }
}

module.exports = student