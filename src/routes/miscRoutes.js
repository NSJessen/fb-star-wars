const express = require('express');
const router = express.Router();
const { downloadFile, goToLuke } = require('../controllers/miscController');

router.get('/download', downloadFile);

router.get('/go-to-luke', goToLuke);

module.exports = router;
