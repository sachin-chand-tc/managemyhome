const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://sachin:1234@cluster0-bdjgz.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})
// const MongoClient = require(‘mongodb’).MongoClient;
// const uri = "mongodb+srv://dbuser:1234@cluster0-bdjgz.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//     const collection = client.db("test").collection("devices");
//     // perform actions on the collection object
//     client.close();
// });
// const MongoClient = require(‘mongodb’).MongoClient;
// const uri = "mongodb+srv://dbuser:1234@cluster0-bdjgz.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//     const collection = client.db("test").collection("devices");
//     // perform actions on the collection object
//     client.close();
// });