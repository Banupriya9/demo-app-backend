const mongoose = require('mongoose');

const URL = 'mongodb+srv://vbanupriyalak:12345@april28.cbtyubu.mongodb.net/test';

const db = async () => {
    try {
        await mongoose.connect(URL);
        console.log('DB connected');
    } catch(error) {
        console.log('Connectivity failed');
    }
}

module.exports = db;