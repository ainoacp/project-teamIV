const express = require('express');
const {
    register, 
    login, 
    getAllUsers,
    getUserById,
    putUser,
    deleteUser
} = require('../controllers/users.controller');

const usersRouter = express.Router();

usersRouter.post('/register', register);
usersRouter.post('/login', login);

usersRouter.get('/', getAllUsers);
usersRouter.get('/:id', getUserById);

usersRouter.put('/:id', putUser);

usersRouter.delete('/:id', deleteUser);


module.exports = usersRouter;