const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        trim : true
    },
    email : {
        type : String,
        required : true,
        trim : true,
        unique : true
    },
    address : {
        type : String,
        required : true,
        trim : true
    },
    phone : {
        type : Number,
        required : true,
        trim : true,
        unique : true
    }
})

module.exports = mongoose.model('Users', userSchema);