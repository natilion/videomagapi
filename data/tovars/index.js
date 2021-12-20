'use strict';
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getTovars = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('tovars');
        const tovarsList = await pool.request().query(sqlQueries.tovarslist);
        return tovarsList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

const getById = async(Id) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('tovars');
        const tovar = await pool.request()
                .input('ID_Tovara', sql.Int, Id)
                .query(sqlQueries.tovarbyId);
        return tovar.recordset;
    } catch (error) {
        return error.message;
    }
}

const createTovar = async(tovarData) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('tovars');
        const insertPosition = await pool.request()
                .input('Name', sql.NVarChar(30), tovarData.Name)
                .input('Price', sql.Int, tovarData.Price)
                .input('release_year', sql.Int, tovarData.release_year)
                .input('Number_V', sql.Int, tovarData.Number_V)
                .input('genre', sql.NVarChar(30), tovarData.genre)
                .input('duration', sql.Int, tovarData.duration)
                .input('name_proiz', sql.NVarChar(30), tovarData.name_proiz)
                .input('media_type', sql.NVarChar(30), tovarData.media_type)
                .input('amount', sql.Int, tovarData.amount)
                .input('delete', sql.Bit, tovarData.delete)
                .query(sqlQueries.createTovar);                            
        return insertPosition.recordset;
    } catch (error) {
        return error.message;
    }
}

const updateTovar = async(ID_Tovara, Data) =>{
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('tovars');
        const update = await pool.request()
                .input('ID_Tovara', sql.Int, ID_Tovara)
                .input('Name', sql.NVarChar(30), Data.Name)
                .input('Price', sql.Int, Data.Price)
                .input('release_year', sql.Int, Data.release_year)
                .input('Number_V', sql.Int, Data.Number_V)
                .input('genre', sql.NVarChar(30), Data.genre)
                .input('duration', sql.Int, Data.duration)
                .input('name_proiz', sql.NVarChar(30), Data.name_proiz)
                .input('media_type', sql.NVarChar(30), Data.media_type)
                .input('amount', sql.Int, Data.amount)
                .input('delete', sql.Bit, Data.delete)
                .query(sqlQueries.updateTovar);
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}

const deleteTovar = async (ID_Tovara) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('tovars');
        const deleteTovar = await pool.request()
                .input('ID_Tovara', sql.Int, ID_Tovara)
                .query(sqlQueries.deleteTovar);
        return deleteTovar.recordset;
    } catch (error) {
        return error.message;
    }
}

module.exports = {
    getTovars,
    getById,
    createTovar,
    updateTovar,
    deleteTovar
}