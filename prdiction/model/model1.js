const mongoose = require('mongoose');

const formSchema1 = new mongoose.Schema({
    username:
    {
        type: String,
        unique: true,
        required: true,
        
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

const formCollection1 = new mongoose.model('form', formSchema1);

module.exports = formCollection1;