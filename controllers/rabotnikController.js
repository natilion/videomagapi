'use strict';

const rabotnikData = require('../data/rabotniks');

const getAllRabotniks = async (req, res, next) => {
    try {
        const rabotniklist = await rabotnikData.getRabotniks();
        res.send(rabotniklist);        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getRabotnik = async (req, res, next) => {
    try{
        const Id = req.params.id;
        const rabotnik = await rabotnikData.getById(Id);
        res.send(rabotnik);
    }catch(error) {
        res.status(400).send(error.message);
    }
}

const addRabotnik = async (req, res, next) => {
    try {
        const data = req.body;
        const insert = await rabotnikData.createRabotnik(data);
        res.send(insert);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateRabotnik = async (req, res, next) => {
    try {
        const ID_Rabotnik =  req.params.id;
        const Data = req.body;
        const updated = await rabotnikData.updateRabotnik(ID_Rabotnik, Data);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteRabotnik = async (req, res, next) => {
    try {
        const ID_Rabotnik = req.params.id;
        const deleteRabotnik = await rabotnikData.deleteRabotnik(ID_Rabotnik);
        res.send(deleteRabotnik);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getAllRabotniks,
    getRabotnik,
    addRabotnik,
    updateRabotnik,
    deleteRabotnik
};