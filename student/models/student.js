const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    firstName: { type: String, require: true },
    lastName: { type: String, require: true },
    studentNum: { type: String, require: true }
});

module.exports = mongoose.model('student', studentSchema);
