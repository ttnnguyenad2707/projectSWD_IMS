const mongoose = require('mongoose');

const Student = mongoose.model('Student', 
    new mongoose.Schema({
        name : {
            type : String,
            require,
        },
        gender: {
            type: String,
            enum: { 
                values: ["Male","Female"],
                message: "{VALUE} is not sp",
            }
        },
    })
)
module.exports = Student