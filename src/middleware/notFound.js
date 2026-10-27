// Rammes kun, hvis ingen route matchede requesten. Sender 404 i det fælles fejlformat
function notFound(req, res) {
    res.status(404).json({ error: 'route findes ikke' });
}

module.exports = notFound;