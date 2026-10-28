const characters = [
    {id: 1, name: 'Luke Skywalker', role: 'Jedi', planet: 'Tatooine'},
    {id: 2, name: 'Darth Vader', role: 'Sith', planet: 'Tatooine'},
    {id: 3, name: 'Leia Organa', role: 'Rebel', planet: 'Alderaan'},
    {id: 4, name: 'Han Solo', role: 'Smuggler', planet: 'Corellia'},
];

// Beregnes én gang når programmet startes. Tælleren går kun op, så et ID genbruges aldrig efter sletning.
let nextId = Math.max(...characters.map(c => c.id)) + 1;

// Returnerer næste ledige ID og tæller op til det næste.
function generateId() {
    const id = nextId;
    nextId = nextId + 1;
    return id;
}

// Returnerer alle karakterer.
function getAllCharacters() {
    return characters;
}

// Tager et Id og returnerer den karakter, det har det Id, eller undefined hvis den ikke findes.
function getCharacterById(id) {
    return characters.find(c => c.id === id);
}

// Opretter en karakter, objektet characterData indeholder data fra POST-request body. Returnerer den oprettede karakter med nyt ID.
function createCharacter(characterData) {
    const character = {
        ...characterData,
        id: generateId()
    };

    characters.push(character);
    return character;
}

// Erstatter en karakter. Returnerer undefined, hvis ID'et ikke findes.
function replaceCharacter(id, characterData) {
    // Find indekset for karakteren med det givne ID
    const index = characters.findIndex(character => character.id === id);

    if (index === -1) {
        return undefined;
    }

    const updatedCharacter = {
        ...characterData,
        id: id
    };

    // Erstat karakteren i arrayet med den opdaterede karakter
    characters[index] = updatedCharacter;
    return updatedCharacter;
}

// fjerner en karakter med id og returnerer true hvis det lykkedes ellers, flase
function deleteCharacter(id) {
    const index = characters.findIndex(character => character.id === id);

    if (index === -1) {
        return false;
    }

    characters.splice(index, 1);
    return true;
}

module.exports = {generateId, getAllCharacters, getCharacterById, createCharacter, replaceCharacter, deleteCharacter};
