const characterModel = require("../models/characterModel");

// GET /characters sender alle karakterer.
function getAll(req, res) {
    const characters = characterModel.getAllCharacters();
    res.status(200).json(characters);
}

// GET /characters/:id sender én karakter, eller 404 hvis den ikke findes.
function getById(req, res) {
    // req.params.id er altid en string, men ID'erne i modellen er tal.
    const id = Number(req.params.id);
    const character = characterModel.getCharacterById(id);

    // return stopper funktionen, så der ikke også sendes et 200-svar.
    if (!character) {
        return res.status(404).json({ error: 'Karakteren findes ikke'});
    }

    res.status(200).json(character);

}

// POST /characters opretter en karakter ud fra JSON i request body.
function create(req, res) {
    const character = characterModel.createCharacter(req.body);
    const characterData = req.body;

    if (!characterData || !characterData.name || !characterData.role || !characterData.planet) {
        return res.status(400).json({ error: 'Name, role og planet skal udfyldes' });
    }

    res.status(201).json(character);
}

// PUT /characters/:id erstatter en eksisterende karakter.
function replace(req, res) {
    const id = Number(req.params.id);
    const characterData = req.body;

    if (!characterData || !characterData.name || !characterData.role || !characterData.planet) {
        return res.status(400).json({ error: 'Name, role og planet skal udfyldes' });
    }
    
    const updatedCharacter = characterModel.replaceCharacter(id, characterData);

    if (!updatedCharacter) {
        return res.status(404).json({ error: 'Karakteren findes ikke' });
    }

    res.status(200).json(updatedCharacter);
}

module.exports = {getAll, getById, create, replace};
