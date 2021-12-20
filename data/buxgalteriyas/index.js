'use strict';
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getBuxgalteriyas = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('buxgalteriyas');
        const buxgalteriyasList = await pool.request().query(sqlQueries.buxgalteriyaslist);
        return buxgalteriyasList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

const getById = async(Id) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('buxgalteriyas');
        const buxgalteriya = await pool.request()
                .input('ID_Buxgalteriya', sql.Int, Id)
                .query(sqlQueries.buxgalteriyabyId);
        return buxgalteriya.recordset;
    } catch (error) {
        return error.message;
    }
}

const createBuxgalteriya = async(buxgalteriyaData) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('buxgalteriyas');
        const insertBuxgalteriya = await pool.request()
                .input('ID_Buxgalteriya', sql.Int, buxgalteriyaData.ID_Buxgalteriya)
                .input('date', sql.NVarChar(15), buxgalteriyaData.date)
                .input('Salary', sql.Int, buxgalteriyaData.Salary)
                .input('Rabotnik_ID', sql.Int, buxgalteriyaData.Rabotnik_ID)
                .query(sqlQueries.createBuxgalteriya);                            
        return insertBuxgalteriya.recordset;
    } catch (error) {
        return error.message;
    }
}

const updateBuxgalteriya = async(ID_Buxgalteriya, Data) =>{
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('buxgalteriyas');
        const update = await pool.request()
                .input('ID_Buxgalteriya', sql.Int, ID_Buxgalteriya)
                .input('date', sql.NVarChar(15), Data.date)
                .input('Salary', sql.Int, Data.Salary)
                .input('Rabotnik_ID', sql.Int, Data.Rabotnik_ID)
                .query(sqlQueries.updateBuxgalteriya);
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}

const deleteBuxgalteriya = async (ID_Buxgalteriya) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('buxgalteriyas');
        const deleteBuxgalteriya = await pool.request()
                .input('ID_Buxgalteriya', sql.Int, ID_Buxgalteriya)
                .query(sqlQueries.deleteBuxgalteriya);
        return deleteBuxgalteriya.recordset;
    } catch (error) {
        return error.message;
    }
}

module.exports = {
    getBuxgalteriyas,
    getById,
    createBuxgalteriya,
    updateBuxgalteriya,
    deleteBuxgalteriya
}