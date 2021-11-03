const mongoose = require('mongoose');
const Student = require('../Models/student');

mongoose.connect('mongodb+srv://adeel:w1TVgGuJ3364OJ8f@studentcluster.ycixr.mongodb.net/StudentDB?retryWrites=true&w=majority',{
    useNewUrlParser: true, useUnifiedToplogy: true
}).then(() => {
    console.log('Mongo Connection Open');
}).catch((e) =>{
    console.log(e);
});

const seedStudents =
[
    {
        firstName: 'Jane',
        lastName: 'Doe',
        studentNumber:'100110'
    },
    {
        firstName: 'Mary',
        lastName: 'Moe',
        studentNumber:'100111'
    },
    {
        firstName: 'John',
        lastName: 'Dee',
        studentNumber:'101000'
    }
];

const seedDB = async () => {
    await Student.deleteMany({});
    await Student.insertMany(seedStudents);
};

seedDB().then(() => {
    mongoose.connection.close();
    console.log('Mongo connection close');
})