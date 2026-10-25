const express = require('express');
const router = express.Router();
const characterController = require('../controllers/characterController');


router.get('/', characterController.getAll);

router.get( '/:id', characterController.getById);

router.post('/', characterController.create);

module.exports = router;

