const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const port = 3001;
const mongoose = require("mongoose");
const studentConnection = require('../../connections/studentConnection');
require("../../models/student");
const Student = mongoose.model("student");



app.use(bodyParser.json());


app.get('/getStudents', (req,res) => {
    Student.find().then((students) => {
        res.json(students)
    }).catch(e => {
        console.log("BAD REQUEST" + e);
    })
});
app.get('/getStudent/:id',(req,res) =>{
    Student.findById(req.params.id).then((student) => {
        if(student)
        {
            res.json(student)
        }
        else
        {
            res.sendStatus(404);
        }
    }).catch(e => {
        console.log("BAD REQUEST" + e);
    })
})

app.post("/addStudent",(req,res) =>{
    let newStudent = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        studentNum:req.body.studentNum
    }

    let student = new Student(newStudent);

    student.save().then(() =>{
        console.log("student record added");
    }).catch((e) => {
        console.log("BAD REQUEST" + e);
    })
    res.send();
})

app.delete("/removeStudent/:id",(req,res) =>{
    Student.findOneAndRemove(req.params.id).then(() =>{
        res.send("student record was removed");
    }).catch(e =>{
        console.log("BAD REQUEST" + e);
    })
})

app.listen(port, () =>{
    console.log(`Student service running at ${port}`);
}); 