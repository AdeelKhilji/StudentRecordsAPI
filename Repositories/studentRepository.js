require("dotenv").config();
const express = require('express');

require('../Database/studentService');

const Student = require('../Models/student');

const app = express();
const port = 3001;
app.use(express.json)

app.post('/',(req,res)=>{
    const {firstName, lastName, studentNumber} = req.body;
    let student = {};
    student.firstName = firstName;
    student.lastName = lastName;
    student.studentNumber = studentNumber;
    
    let studentModel = new Student(student);
    studentModel.save();
    res.json(studentModel);
});
//ADD A LISTEN
app.listen(port, () =>{
    console.log(`Started and running on port ${port} - This is a Student service`);
})