'use strict';

const express = require('express');
const clientController = require('../controllers/clientController');
const router = express.Router();


router.get('/clients', clientController.getAllClients);
router.get('/client/:id', clientController.getClient);
router.post('/client', clientController.addClient);
router.put('/client/:id', clientController.updateClient);
router.delete('/client/:id', clientController.deleteClient);

module.exports = {
    routes: router
}