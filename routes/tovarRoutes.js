'use strict';

const express = require('express');
const tovarController = require('../controllers/tovarController');
const router = express.Router();

router.get('/tovars', tovarController.getAllTovars);
router.get('/tovar/:id', tovarController.getTovar);
router.post('/tovar', tovarController.addTovar);
router.put('/tovar/:id', tovarController.updateTovar);
router.delete('/tovar/:id', tovarController.deleteTovar);



module.exports = {
    routes: router
}