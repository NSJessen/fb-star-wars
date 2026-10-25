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

function getAllCharacters() {
    return characters;
}

module.exports = {generateId, getAllCharacters};