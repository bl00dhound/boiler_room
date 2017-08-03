const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    login: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    firstame: {
        type: String,
    },
    lastname: {
        type: String
    },
});


module.exports = mongoose.model('user', userSchema);
