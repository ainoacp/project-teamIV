const express = require('express');
const {
    getSubjects, 
    postSubject, 
    putSubject,
    deleteSubject
} = require('../controllers/subjects.controller');

const {
    isAuth, 
    isTeacher
} = require('../../middleware/auth');


const subjectsRouter = express.Router();

subjectsRouter.post('/', [isTeacher], postSubject);

subjectsRouter.get('/', getSubjects);

subjectsRouter.put('/:id', [isAuth], putSubject);

subjectsRouter.delete('/:id', [isAuth], deleteSubject);


module.exports = subjectsRouter;