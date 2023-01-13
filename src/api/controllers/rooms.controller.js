const Room = require('../models/room.model');

const  getRooms = async (req, res) => {
    try {
        const myRoom = await Room.find().populate("teacher student"); 
        return res.status(200).json(myRoom)
    } catch (error) {
        return res.status(500).json(error);
    }
};

const postRoom = async (req, res) => {
    try {
        const newRoom = new Room(req.body);
        const createdRoom = await newRoom.save();
        return res.status(201).json(createdRoom);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const putRoom = async (req, res) => {
    try {
        const {id} = req.params;
        const putRoom = new Room(req.body);
        putRoom._id = id;
        const updatedRoom = await Room.findByIdAndUpdate(id, putRoom, {new: true});
        return res.status(200).json(updatedRoom);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const deleteRoom = async(req, res) => {
    try {
        const {id} = req.params;
        const deletedRoom = await Room.findByIdAndDelete(id);
        return res.status(200).json('Room successfully deleted');
    } catch (error) {
        return res.status(500).json(error);
    }
};


module.exports = {
    getRooms, 
    postRoom, 
    putRoom,
    deleteRoom
};