'use strict';
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getCheks = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('cheks');
        const cheksList = await pool.request().query(sqlQueries.chekslist);
        return cheksList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

const getById = async(Id) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('cheks');
        const client = await pool.request()
                .input('ID_Chek', sql.Int, Id)
                .query(sqlQueries.chekbyId);
        return chek.recordset;
    } catch (error) {
        return error.message;
    }
}

const createChek = async(chekData) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('cheks');
        const insertChek = await pool.request()
                .input('date', sql.NVarChar(15), chekData.date)
                .input('Rabotnik_ID', sql.Int, chekData.Rabotnik_ID)
                .input('Client_ID', sql.Int, chekData.Client_ID)
                .input('Tovar_ID', sql.Int, chekData.Tovar_ID)
                .query(sqlQueries.createChek);                            
        return insertChek.recordset;
    } catch (error) {
        return error.message;
    }
}

const updateChek = async(ID_Chek, Data) =>{
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('cheks');
        const update = await pool.request()
                .input('ID_Chek', sql.Int, ID_Chek)
                .input('date', sql.NVarChar(15), Data.date)
                .input('Rabotnik_ID', sql.Int, Data.Rabotnik_ID)
                .input('Client_ID', sql.Int, Data.Client_ID)
                .input('Tovar_ID', sql.Int, Data.Tovar_ID)
                .query(sqlQueries.updateChek);
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}

const deleteChek = async (ID_Chek) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('cheks');
        const deleteChek = await pool.request()
                .input('ID_Chek', sql.Int, ID_Chek)
                .query(sqlQueries.deleteChek);
        return deleteChek.recordset;
    } catch (error) {
        return error.message;
    }
}

module.exports = {
    getCheks,
    getById,
    createChek,
    updateChek,
    deleteChek
}