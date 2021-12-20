'use strict';
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getClients = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('clients');
        const clientsList = await pool.request().query(sqlQueries.clientslist);
        return clientsList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

const getById = async(Id) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('clients');
        const client = await pool.request()
                .input('ID_Client', sql.Int, Id)
                .query(sqlQueries.clientbyId);
        return client.recordset;
    } catch (error) {
        return error.message;
    }
}

const createClient = async(clientData) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('clients');
        const insertClient = await pool.request()
            .input('Name_Client', sql.NVarChar(30), clientData.Name_Client)
            .input('Last_Name_Client', sql.NVarChar(30), clientData.Last_Name_Client)
            .input('Nomber_Phone', sql.NVarChar(30), clientData.Nomber_Phone)
                .query(sqlQueries.createClient);                            
        return insertClient.recordset;
    } catch (error) {
        return error.message;
    }
}

const updateClient = async(ID_Client, Data) =>{
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('clients');
        const update = await pool.request()
                .input('ID_Client', sql.Int, ID_Client)
                .input('Name_Client', sql.NVarChar(30), Data.Name_Client)
                .input('Last_Name_Client', sql.NVarChar(30), Data.Last_Name_Client)
                .input('Nomber_Phone', sql.NVarChar(30), Data.Nomber_Phone)
                .query(sqlQueries.updateClient);
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}

const deleteClient = async (ID_Client) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('clients');
        const deleteClient = await pool.request()
                .input('ID_Client', sql.Int, ID_Client)
                .query(sqlQueries.deleteClient);
        return deleteClient.recordset;
    } catch (error) {
        return error.message;
    }
}

module.exports = {
    getClients,
    getById,
    createClient,
    updateClient,
    deleteClient
}