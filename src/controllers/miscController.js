const path = require('path');

const downloadFilePath = path.join(__dirname, '..', '..', 'rebel-alliance.txt');

function downloadFile(req, res, next) {
    res.download(downloadFilePath, 'rebel-alliance.txt', error => {
        if (error) {
            next(error);
        }
    });
}

function goToLuke(req, res) {
    res.redirect('/characters/1');
}

module.exports = { downloadFile, goToLuke };
