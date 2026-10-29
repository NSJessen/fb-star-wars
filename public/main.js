const tbody = document.getElementById('characters');

fetch('/characters')
  .then((res) => res.json())
  .then((characters) => {
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
