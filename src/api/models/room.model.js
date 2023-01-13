const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const roomSchema = new Schema(
    {
        level: {type: 'number', required: true, enum:[ 1, 2 ], default:1},
        letter: {type: 'string', required: true, enum:[ "A", "B" ], default:'A'},
        teacher: [{type: Schema.Types.ObjectId, ref: 'User'}],
        student: [{type: Schema.Types.ObjectId, ref: 'User'}],

    },{
        timestamps: true
    }
);

const Room = mongoose.model('Room', roomSchema);

module.exports = Room;