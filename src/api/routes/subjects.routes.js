const express = require('express');
const {
    getSubjects, 
    postSubject, 
    putSubject,
    deleteSubject
} = require('../controllers/subjects.controller');

const subjectsRouter = express.Router();

subjectsRouter.post('/', postSubject);

subjectsRouter.get('/', getSubjects);

subjectsRouter.put('/:id', putSubject);

subjectsRouter.delete('/:id', deleteSubject);


module.exports = subjectsRouter;