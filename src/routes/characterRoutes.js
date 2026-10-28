const express = require('express');
const router = express.Router();
const characterController = require('../controllers/characterController');
const validateCharacter = require('../middleware/validateCharacter');


router.get('/', characterController.getAll);

router.get('/:id', characterController.getById);

router.post('/', validateCharacter, characterController.create);

router.put('/:id', validateCharacter, characterController.replace);

router.delete('/:id', characterController.remove);

module.exports = router;

