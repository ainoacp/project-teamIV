const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        name: {type: 'string', required: true},
        surname: {type: 'string'},
        email: {type: 'string', required: true},
        password: {type: String, required: true},
        role: {type: String, required: true, enum:[ "teacher", "student" ], default:'student'},
    },{
        timestamps: true
    }
);

const User = mongoose.model('User', userSchema);

module.exports = User;