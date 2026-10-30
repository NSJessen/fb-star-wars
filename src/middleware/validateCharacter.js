const ROLES = ['Jedi', 'Sith', 'Rebel', 'Smuggler'];

// Validerer request body for POST og PUT. Sender 400 med en forståelig besked, ellers videre til controlleren
function validateCharacter(req, res, next) {
    // express sætter req.body til undefined hvis der ikke er nogen body.
    const { name, role, planet } = req.body || {};

    if (typeof name !== 'string' || name.trim().length < 2) {
        return res.status(400).json({ error: 'Navn skal være mindst 2 tegn' });
    }

    if (!ROLES.includes(role)) {
        return res.status(400).json({ error: 'Rolle skal være Jedi, Sith, Rebel eller Smuggler' });
    }

    if (typeof planet !== 'string' || planet.trim() === '') {
        return res.status(400).json({ error: 'Planet må ikke være tom' });
    }

    next();
}

module.exports = validateCharacter;