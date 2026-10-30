// AI Agentens forslag #2
// Tjekker at :id er et positivt heltal. Ellers 400, så klienten kan se forskel på ugyldigt ID og "findes ikke" (404).
function validateId(req, res, next) {
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id < 1) {
        return res.status(400).json({ error: 'ID skal være et positivt heltal' });
    }

    next();
}

module.exports = validateId;
