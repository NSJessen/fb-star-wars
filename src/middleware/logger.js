// Logger HTTP-metode og URL for hver request, og sender den videre med next();
function logger(req, res, next) {
    console.log(`${req.method} ${req.originalUrl}`);
    next();
}

module.exports = logger;