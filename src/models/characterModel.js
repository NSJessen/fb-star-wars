const characters = [
    { id: 1, name: 'Luke Skywalker', role: 'Jedi', planet: 'Tatooine'},
    { id: 2, name: 'Darth Vader', role: 'Sith', planet: 'Tatooine'},
    { id: 3, name: 'Leia Organa', role: 'Rebel', planet: 'Alderaan'},
    { id: 4, name: 'Han Solo', role: 'Smuggler', planet: 'Corellia'},
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

module.exports = {generateId, getAllCharacters, getCharacterById};