const { Schema, model } = require('mongoose');

const { ADMIN, USER } = require('../configs/usersRoles.enum');

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    role: {
        type: String,
        default: USER,
        enum: [
            USER,
            ADMIN
        ]
    }
}, { timestamps: true });

module.exports = model('User', userSchema);
