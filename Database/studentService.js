// const MongoClient = require('mongodb').MongoClient
const connectionString = 'mongodb+srv://adeel:w1TVgGuJ3364OJ8f@studentcluster.ycixr.mongodb.net/StudentDB?retryWrites=true&w=majority';

// MongoClient.connect(connectionString, (err, client) =>{
//     if(err) return console.error(err)
//     console.log('Connected to Database')
// })
const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(connectionString,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((e) =>{
    console.log('Could not connect to MongoDB' + e);
});