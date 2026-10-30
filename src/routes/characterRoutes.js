const express = require('express');
const router = express.Router();
const characterController = require('../controllers/characterController');
const validateCharacter = require('../middleware/validateCharacter');
const validateId = require('../middleware/validateId');


router.get('/', characterController.getAll);

router.get('/:id', validateId, characterController.getById);

router.post('/', validateCharacter, characterController.create);

router.put('/:id', validateId, validateCharacter, characterController.replace);

router.delete('/:id', validateId, characterController.remove);

module.exports = router;

