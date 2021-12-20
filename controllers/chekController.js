'use strict';

const chekData = require('../data/cheks');

const getAllCheks = async (req, res, next) => {
    try {
        const cheklist = await chekData.getCheks();
        res.send(cheklist);        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getChek = async (req, res, next) => {
    try{
        const Id = req.params.id;
        const chek = await chekData.getById(Id);
        res.send(chek);
    }catch(error) {
        res.status(400).send(error.message);
    }
}

const addChek = async (req, res, next) => {
    try {
        const data = req.body;
        const insert = await chekData.createChek(data);
        res.send(insert);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateChek = async (req, res, next) => {
    try {
        const ID_Chek =  req.params.id;
        const Data = req.body;
        const updated = await chekData.updateChek(ID_Chek, Data);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteChek = async (req, res, next) => {
    try {
        const ID_Chek = req.params.id;
        const deleteChek = await chekData.deleteChek(ID_Chek);
        res.send(deleteChek);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getAllCheks,
    getChek,
    addChek,
    updateChek,
    deleteChek
};