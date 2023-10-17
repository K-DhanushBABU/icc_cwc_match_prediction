const mongoose = require('mongoose');

mongoose.connect('mongodb://0.0.0.0:27017/loginForm', { useNewUrlParser: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        // Catch the error here
        console.error('Error connecting to MongoDB:', error);
    });
