const express = require('express');
const path = require('path');
const app = express();
const characterRouter = require('./routes/characterRoutes');
const { downloadJedis } = require('./controllers/downloadController');
const notFound = require('./middleware/notFound');
const errorHandler = require('./middleware/errorHandler');
const logger = require('./middleware/logger');

// logger står først så alt logges
app.use(logger);

// Middleware og routes køres i den rækkefølge, de registreres. JSON-parseren skal stå før routes.
app.use(express.json());

app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/characters', characterRouter);

app.get('/download', downloadJedis);

app.get('/go-to-luke', (req, res) => {
    res.redirect('/characters/1');
});

app.use(notFound);
app.use(errorHandler);

module.exports = app;
