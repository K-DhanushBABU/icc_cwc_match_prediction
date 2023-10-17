const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
    email:
    {
        type: String,
       
    },
    username:
    {
        type: String,
        unique: true,
        required:true,
        },
    password:
    {
        type: String,
        required:true,
    },
    cpassword:
    {
        type: String,
        required:true,
    }
})

const formCollection = new mongoose.model('formcollection', formSchema);


module.exports = formCollection;