'use strict';

const buxgalteriyaData = require('../data/buxgalteriyas');

const getAllBuxgalteriyas = async (req, res, next) => {
    try {
        const buxgalteriyalist = await buxgalteriyaData.getBuxgalteriyas();
        res.send(buxgalteriyalist);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getBuxgalteriya = async (req, res, next) => {
    try{
        const Id = req.params.id;
        const buxgalteriya = await buxgalteriyaData.getById(Id);
        res.send(buxgalteriya);
    }catch(error) {
        res.status(400).send(error.message);
    }
}

const addBuxgalteriya = async (req, res, next) => {
    try {
        const data = req.body;
        const insert = await buxgalteriyaData.createBuxgalteriya(data);
        res.send(insert);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateBuxgalteriya = async (req, res, next) => {
    try {
        const ID_Buxgalteriya =  req.params.id;
        const Data = req.body;
        const updated = await buxgalteriyaData.updateBuxgalteriya(ID_Buxgalteriya, Data);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteBuxgalteriya = async (req, res, next) => {
    try {
        const ID_Buxgalteriya = req.params.id;
        const deleteBuxgalteriya = await buxgalteriyaData.deleteBuxgalteriya(ID_Buxgalteriya);
        res.send(deleteBuxgalteriya);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getAllBuxgalteriyas,
    getBuxgalteriya,
    addBuxgalteriya,
    updateBuxgalteriya,
    deleteBuxgalteriya
};