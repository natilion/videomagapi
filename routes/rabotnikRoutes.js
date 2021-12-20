'use strict';

const express = require('express');
const rabotnikController = require('../controllers/rabotnikController');
const router = express.Router();

router.get('/rabotniks', rabotnikController.getAllRabotniks);
router.get('/rabotnik/:id', rabotnikController.getRabotnik);
router.post('/rabotnik', rabotnikController.addRabotnik);
router.put('/rabotnik/:id', rabotnikController.updateRabotnik);
router.delete('/rabotnik/:id', rabotnikController.deleteRabotnik);



module.exports = {
    routes: router
}