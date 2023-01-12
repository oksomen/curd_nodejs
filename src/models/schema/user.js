const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    name : {
        type:String,
        },
    email : {
        type:String,
    },
    phone : {
        type:Number,
    },
    address: {
        type:String,
    },
    
})


module.exports = new mongoose.model('User', userSchema);

// module.exports = User;