const mongoose = require('mongoose');


const instructorSchema= mongoose.Schema({
    code: {
        type: String,
        unique:true,
        required:true
    },
    name: {
        type: String,
        required:true
    },
    username: {
        type: String,
        required:true
    },
    password: {
        type: String,
        required:true
    },
    degree:
        {
            required:true,
            type:String

        }
    ,
    courses:[
        {
            required:true,
            type:String
        }
    ],
    email: {
        type: String,
        required:true
    },
    address: {
        type: String,
        required:true
    },
    phone: {
        type: String,
        required:true
    }
});

module.exports=mongoose.model('Instructor',instructorSchema);