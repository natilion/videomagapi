'use strict';
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getRabotniks = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('rabotniks');
        const rabotniksList = await pool.request().query(sqlQueries.rabotnikslist);
        return rabotniksList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

const getById = async(Id) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('rabotniks');
        const rabotnik = await pool.request()
                .input('ID_Rabotnik', sql.Int, Id)
                .query(sqlQueries.rabotnikbyId);
        return rabotnik.recordset;
    } catch (error) {
        return error.message;
    }
}

const createRabotnik = async(rabotnikData) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('rabotniks');
        const insertRabotnik = await pool.request()
                .input('Name_Rabotnik', sql.NVarChar(30), rabotnikData.Name_Rabotnik)
                .input('Last_Name_Rabotnik', sql.NVarChar(30), rabotnikData.Last_Name_Rabotnik)
                .input('Midlle_Name_Rabotnik', sql.NVarChar(30), rabotnikData.Midlle_Name_Rabotnik)
                .input('Series', sql.Int, rabotnikData.Series)
                .input('Nomber_P', sql.Int, rabotnikData.Nomber_P)
                .input('Nomber_Phone', sql.NVarChar(30), rabotnikData.Nomber_Phone)
                .input('Login', sql.NVarChar(30), rabotnikData.Login)
                .input('Password', sql.NVarChar(30), rabotnikData.Password)
                .input('Dismissed', sql.Bit, rabotnikData.Dismissed)
                .input('Position_FK', sql.Int, rabotnikData.Position_FK)
                .query(sqlQueries.createRabotnik);                            
        return insertRabotnik.recordset;
    } catch (error) {
        return error.message;
    }
}

const updateRabotnik = async(ID_Rabotnik, Data) =>{
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('rabotniks');
        const update = await pool.request()
                .input('ID_Rabotnik', sql.Int, ID_Rabotnik)
                .input('Name_Rabotnik', sql.NVarChar(30), Data.Name_Rabotnik)
                .input('Last_Name_Rabotnik', sql.NVarChar(30), Data.Last_Name_Rabotnik)
                .input('Midlle_Name_Rabotnik', sql.NVarChar(30), Data.Midlle_Name_Rabotnik)
                .input('Series', sql.Int, Data.Series)
                .input('Nomber_P', sql.Int, Data.Nomber_P)
                .input('Nomber_Phone', sql.NVarChar(30), Data.Nomber_Phone)
                .input('Login', sql.NVarChar(30), Data.Login)
                .input('Password', sql.NVarChar(30), Data.Password)
                .input('Dismissed', sql.Bit, Data.Dismissed)
                .input('Position_FK', sql.Int, Data.Position_FK)
                .query(sqlQueries.updateRabotnik);
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}

const deleteRabotnik = async (ID_Rabotnik) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('rabotniks');
        const deleteRabotnik = await pool.request()
                .input('ID_Rabotnik', sql.Int, ID_Rabotnik)
                .query(sqlQueries.deleteRabotnik);
        return deleteRabotnik.recordset;
    } catch (error) {
        return error.message;
    }
}

module.exports = {
    getRabotniks,
    getById,
    createRabotnik,
    updateRabotnik,
    deleteRabotnik
}