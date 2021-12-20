'use strict';

const express = require('express');
const buxgalteriyaController = require('../controllers/buxgalteriyaController');
const router = express.Router();

router.get('/buxgalteriyas', buxgalteriyaController.getAllBuxgalteriyas);
router.get('/buxgalteriya/:id', buxgalteriyaController.getBuxgalteriya);
router.post('/buxgalteriya', buxgalteriyaController.addBuxgalteriya);
router.put('/buxgalteriya/:id', buxgalteriyaController.updateBuxgalteriya);
router.delete('/buxgalteriya/:id', buxgalteriyaController.deleteBuxgalteriya);



module.exports = {
    routes: router
}