'use strict';

const tovarData = require('../data/tovars');

const getAllTovars = async (req, res, next) => {
    try {
        const tovarlist = await tovarData.getTovars();
        res.send(tovarlist);        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getTovar = async (req, res, next) => {
    try{
        const Id = req.params.id;
        const tovar = await tovarData.getById(Id);
        res.send(tovar);
    }catch(error) {
        res.status(400).send(error.message);
    }
}

const addTovar = async (req, res, next) => {
    try {
        const data = req.body;
        const insert = await tovarData.createTovar(data);
        res.send(insert);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateTovar = async (req, res, next) => {
    try {
        const ID_Tovara =  req.params.id;
        const Data = req.body;
        const updated = await tovarData.updateTovar(ID_Tovara, Data);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteTovar = async (req, res, next) => {
    try {
        const ID_Tovara = req.params.id;
        const deleteTovar = await tovarData.deleteTovar(ID_Tovara);
        res.send(deleteTovar);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getAllTovars,
    getTovar,
    addTovar,
    updateTovar,
    deleteTovar
};