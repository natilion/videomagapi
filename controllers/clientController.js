'use strict';

const clientData = require('../data/clients');

const getAllClients = async (req, res, next) => {
    try {
        const clientlist = await clientData.getClients();
        res.send(clientlist);        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getClient = async (req, res, next) => {
    try{
        const Id = req.params.id;
        const client = await clientData.getById(Id);
        res.send(client);
    }catch(error) {
        res.status(400).send(error.message);
    }
}

const addClient = async (req, res, next) => {
    try {
        const data = req.body;
        const insert = await clientData.createClient(data);
        res.send(insert);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateClient = async (req, res, next) => {
    try {
        const ID_Client =  req.params.id;
        const Data = req.body;
        const updated = await clientData.updateClient(ID_Client, Data);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteClient = async (req, res, next) => {
    try {
        const ID_Client = req.params.id;
        const deleteClient = await clientData.deleteClient(ID_Client);
        res.send(deleteClient);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getAllClients,
    getClient,
    addClient,
    updateClient,
    deleteClient
};