const ROLES = ['Jedi', 'Sith', 'Rebel', 'Smuggler'];

// Validerer request body for POST og PUT. Sender 400 med en forståelig besked, ellers videre til controlleren
function validateCharacter(req, res, next) {
    // express sætter req.body til undefined hvis der ikke er nogen body.
    const { name, role, planet } = req.body || {};

    if (typeof name !== 'string' || name.trim().length < 2) {
        return res.status(400).json({ error: 'Name must be at least 2 characters' });
    }

    if (!ROLES.includes(role)) {
        return res.status(400).json({ error: 'Role must be Jedi, Sith, Rebel or Smuggler' });
    }

    if (typeof planet !== 'string' || planet.trim() === '') {
        return res.status(400).json({ error: 'Planet must not be empty' });
    }

    next();
}

module.exports = validateCharacter;