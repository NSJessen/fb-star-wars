const fs = require('fs');
const path = require('path');
const characterModel = require('../models/characterModel');

const downloadFilePath = path.join(__dirname, '..', '..', 'rebel-alliance.txt');

// GET /download gemmer de aktuelle Jedi-karakterer i en tekstfil og downloader den.
function downloadJedis(req, res, next) {
    const jedis = characterModel.getAllCharacters().filter(character => character.role === 'Jedi');
    const fileContents = jedis.map(jedi => JSON.stringify(jedi)).join('\n');

    fs.writeFile(downloadFilePath, fileContents, 'utf8', error => {
        if (error) {
            return next(error);
        }

        res.download(downloadFilePath, 'rebel-alliance.txt', error => {
            if (error) {
                next(error);
            }
        });
    });
}

module.exports = { downloadJedis };
