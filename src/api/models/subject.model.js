const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const subjectSchema = new Schema(
    {
        name: {type: 'string', required: true},
        teacher: [{type: Schema.Types.ObjectId, ref: 'User'}], // solo pueden ser los que tengan role teacher
        student: [{type: Schema.Types.ObjectId, ref: 'User'}], // solo pueden ser los que tengan role student
    },{
        timestamps: true
    }
);

const Subject = mongoose.model('Subject', subjectSchema);

module.exports = Subject;