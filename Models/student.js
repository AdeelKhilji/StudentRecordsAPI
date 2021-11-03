const mongoose = require('mongoose');
const studentSchema = mongoose.Schema({
    firstName:{
        type: String,
        require: true
    },
    LastName:{
        type: String,
        require: true
    },
    studentNumber:{
        type: String,
        require: true
    }
})

const Student = mongoose.model("student", studentSchema);

module.exports = Student;