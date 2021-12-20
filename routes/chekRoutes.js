'use strict';

const express = require('express');
const chekController = require('../controllers/chekController');
const router = express.Router();


router.get('/cheks', chekController.getAllCheks);
router.get('/chek/:id', chekController.getChek);
router.post('/chek', chekController.addChek);
router.put('/chek/:id', chekController.updateChek);
router.delete('/chek/:id', chekController.deleteChek);

module.exports = {
    routes: router
}