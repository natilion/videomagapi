'use strict';

const express = require('express');
const positionController = require('../controllers/positionController');
const router = express.Router();


router.get('/positions', positionController.getAllPositions);
router.get('/position/:id', positionController.getPosition);
router.post('/position', positionController.addPosition);
router.put('/position/:id', positionController.updatePosition);
router.delete('/position/:id', positionController.deletePosition);

module.exports = {
    routes: router
}