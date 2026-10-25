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

module.exports = {getAll, getById};