'use strict';

const positionData = require('../data/positions');

const getAllPositions = async (req, res, next) => {
    try {
        const positionlist = await positionData.getPositions();
        res.send(positionlist);        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getPosition = async (req, res, next) => {
    try{
        const Id = req.params.id;
        const position = await positionData.getById(Id);
        res.send(position);
    }catch(error) {
        res.status(400).send(error.message);
    }
}

const addPosition = async (req, res, next) => {
    try {
        const data = req.body;
        const insert = await positionData.createPosition(data);
        res.send(insert);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updatePosition = async (req, res, next) => {
    try {
        const ID_Position =  req.params.id;
        const Data = req.body;
        const updated = await positionData.updatePosition(ID_Position, Data);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deletePosition = async (req, res, next) => {
    try {
        const ID_Position = req.params.id;
        const deletePosition = await positionData.deletePosition(ID_Position);
        res.send(deletePosition);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getAllPositions,
    getPosition,
    addPosition,
    updatePosition,
    deletePosition
};