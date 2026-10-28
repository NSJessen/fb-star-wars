// Central fejlhåndtering. Express genkender den som error-middleware, fordi den har 4 parametre.
function errorHandler(err, req, res, next) {
    // Hele fejlen logges på serveren, så den stadig kan fejlfindes. Klienten får kun en kort besked.
    console.error(err);

    // Fejl med en 4xx-status (fx ugyldig JSON fra express.json()) er klientens fejl. Alt andet er 500.
    const status = err.status >= 400 && err.status < 500 ? err.status : 500;
    const message = status === 500 ? 'Der opstod en uventet fejl' : 'Ugyldig request';

    res.status(status).json({error: message});
}

module.exports = errorHandler;