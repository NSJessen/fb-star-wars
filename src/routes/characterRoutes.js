const express = require('express');
const router = express.Router();
const characterController = require('../controllers/characterController');


router.get('/', characterController.getAll);

router.get( '/:id', characterController.getById);

module.exports = router;

