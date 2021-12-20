'use strict';
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getPositions = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('positions');
        const positionsList = await pool.request().query(sqlQueries.positionslist);
        return positionsList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

const getById = async(Id) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('positions');
        const position = await pool.request()
                .input('ID_Position', sql.Int, Id)
                .query(sqlQueries.positionbyId);
        return position.recordset;
    } catch (error) {
        return error.message;
    }
}

const createPosition = async(positionData) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('positions');
        const insertPosition = await pool.request()
                .input('Name_Position', sql.NVarChar(30), positionData.Name_Position)
                .query(sqlQueries.createPosition);                            
        return insertPosition.recordset;
    } catch (error) {
        return error.message;
    }
}

const updatePosition = async(ID_Position, Data) =>{
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('positions');
        const update = await pool.request()
                .input('ID_Position', sql.Int, ID_Position)
                .input('Name_Position', sql.NVarChar(30), Data.Name_Position)
                .query(sqlQueries.updatePosition);
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}

const deletePosition = async (ID_Position) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('positions');
        const deletePosition = await pool.request()
                .input('ID_Position', sql.Int, ID_Position)
                .query(sqlQueries.deletePosition);
        return deletePosition.recordset;
    } catch (error) {
        return error.message;
    }
}

module.exports = {
    getPositions,
    getById,
    createPosition,
    updatePosition,
    deletePosition
}