const express = require('express');
const {
    getRooms, 
    postRoom, 
    putRoom,
    deleteRoom
} = require('../controllers/rooms.controller');

const {
    isAuth, 
    isTeacher
} = require('../../middleware/auth');

const roomsRouter = express.Router();

roomsRouter.post('/', [isTeacher], postRoom);

roomsRouter.get('/', getRooms);

roomsRouter.put('/:id', [isTeacher], putRoom);

roomsRouter.delete('/:id', [isAuth], deleteRoom);


module.exports = roomsRouter;