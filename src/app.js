const express = require('express');
const app = express();
const characterRouter = require('./routes/characterRoutes');
const notFound = require('./middleware/notFound');
const errorHandler = require('./middleware/errorHandler');

// Middleware og routes køres i den rækkefølge, de registreres. JSON-parseren skal stå før routes.
app.use(express.json());

app.use('/characters', characterRouter);

app.use(notFound);
app.use(errorHandler);

module.exports = app;