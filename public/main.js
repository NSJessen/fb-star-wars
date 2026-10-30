const tbody = document.getElementById('characters');
const form = document.getElementById('character-form');
const formError = document.getElementById('form-error');

// Henter alle karakterer og bygger tabellen forfra, så den også kan bruges efter oprettelse.
function loadCharacters() {
  fetch('/characters')
    .then((res) => res.json())
    .then((characters) => {
      tbody.replaceChildren();
      characters.forEach((c) => {
        const tr = document.createElement('tr');
        [c.name, c.role, c.planet].forEach((value) => {
          const td = document.createElement('td');
          td.textContent = value;
          tr.appendChild(td);
        });
        tbody.appendChild(tr);
      });
    });
}

// Viser en fejlbesked under formularen. textContent, så beskeden aldrig tolkes som HTML.
function showError(message) {
  formError.textContent = message;
  formError.hidden = false;
}

function hideError() {
  formError.textContent = '';
  formError.hidden = true;
}

form.addEventListener('submit', (event) => {
  // Uden preventDefault genindlæser browseren siden.
  event.preventDefault();

  const data = Object.fromEntries(new FormData(form));

  fetch('/characters', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
    .then((res) => {
      if (res.ok) {
        hideError();
        form.reset();
        loadCharacters();
        return;
      }

      // Serveren sender { error: '...' } ved 400. Fallback hvis svaret ikke er JSON.
      return res.json()
        .then((body) => showError(body.error || 'Karakteren kunne ikke oprettes'))
        .catch(() => showError('Karakteren kunne ikke oprettes'));
    })
    .catch(() => showError('Kunne ikke kontakte serveren'));
});

loadCharacters();
