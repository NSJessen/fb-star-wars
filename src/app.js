const express = require('express');
const app = express();
const characterRouter = require('./routes/characterRoutes');


// Middleware og routes køres i den rækkefølge, de registreres. JSON-parseren skal stå før routes.
app.use(express.json());

app.use('/characters', characterRouter);


module.exports = app;