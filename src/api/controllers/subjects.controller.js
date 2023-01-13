const Subject = require('../models/subject.model');

const  getSubjects = async (req, res) => {
    try {
        const mySubject = await Subject.find().populate("teacher student"); 
        return res.status(200).json(mySubject)
    } catch (error) {
        return res.status(500).json(error);
    }
};

const postSubject = async (req, res) => {
    try {
        const newSubject = new Subject(req.body);
        const createdSubject = await newSubject.save();
        return res.status(201).json(createdSubject);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const putSubject = async (req, res) => {
    try {
        const {id} = req.params;
        const putSubject = new Subject(req.body);
        putSubject._id = id;
        const updatedSubject = await Subject.findByIdAndUpdate(id, putSubject, {new: true});
        return res.status(200).json(updatedSubject);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const deleteSubject = async(req, res) => {
    try {
        const {id} = req.params;
        const deletedSubject = await Subject.findByIdAndDelete(id);
        return res.status(200).json('Subject successfully deleted');
    } catch (error) {
        return res.status(500).json(error);
    }
};


module.exports = {
    getSubjects, 
    postSubject, 
    putSubject,
    deleteSubject
};