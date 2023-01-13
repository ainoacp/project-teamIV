const express = require('express');
const {
    getRooms, 
    postRoom, 
    putRoom,
    deleteRoom
} = require('../controllers/rooms.controller');

const roomsRouter = express.Router();

roomsRouter.post('/', postRoom);

roomsRouter.get('/', getRooms);

roomsRouter.put('/:id', putRoom);

roomsRouter.delete('/:id', deleteRoom);


module.exports = roomsRouter;