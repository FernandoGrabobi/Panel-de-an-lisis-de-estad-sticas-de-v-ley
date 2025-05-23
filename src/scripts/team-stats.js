// Espera a que cargue el DOM
document.addEventListener('DOMContentLoaded', () => {
  const tbody = document.querySelector('#team-table tbody');
  const btnAdd = document.getElementById('add-row');
  const teamTotalSaques = document.getElementById('team-total-saques');
  const teamTotalAtq = document.getElementById('team-total-ataq');

  // Función para recalcular totales de una fila y actualizar footer
  function updateRowAndFooter(row) {
    const toNum = el => Number(el.value) || 0;

    // Saques
    const pos = toNum(row.querySelector('input[name="saquePos"]'));
    const ace = toNum(row.querySelector('input[name="ace"]'));
    const err = toNum(row.querySelector('input[name="saqueErr"]'));
    const totalSaques = pos + ace + err;
    row.querySelector('input[name="totalSaques"]').value = totalSaques;

    // Rotación (fila)
    const rot = toNum(row.querySelector('input[name="ataqRot"]'));
    row.querySelector('input[name="totalAtq"]').value = rot;

    // Totales de equipo (footer)
    let sumSa = 0, sumAtq = 0;
    tbody.querySelectorAll('input[name="totalSaques"]').forEach(i => sumSa += toNum(i));
    tbody.querySelectorAll('input[name="ataqRot"]').forEach(i => sumAtq += toNum(i));

    teamTotalSaques.textContent = sumSa;
    teamTotalAtq.textContent = sumAtq;
  }

  // Función para obtener el siguiente número de jugador
  function getNextPlayerNumber() {
    const existingNumbers = Array.from(tbody.querySelectorAll('input[name="num"]'))
      .map(input => Number(input.value))
      .filter(num => num > 0);
    
    if (existingNumbers.length === 0) return 1;
    return Math.max(...existingNumbers) + 1;
  }

  // Crea una fila con inputs y bindings
  function addRow(playerNumber = null) {
    const playerNum = playerNumber || getNextPlayerNumber();
    
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td class="px-1 py-1">
        <input type="number" name="num" min="1" value="${playerNum}" class="w-12 border rounded px-1 py-0.5 text-center"/>
      </td>
      <td class="px-1 py-1"><input type="number" name="saquePos" class="w-12 border rounded px-1 py-0.5 text-center"/></td>
      <td class="px-1 py-1"><input type="number" name="ace" class="w-12 border rounded px-1 py-0.5 text-center"/></td>
      <td class="px-1 py-1"><input type="number" name="saqueErr" class="w-12 border rounded px-1 py-0.5 text-center"/></td>
      <td class="px-1 py-1"><input type="number" name="recDoblePos" class="w-12 border rounded px-1 py-0.5 text-center"/></td>
      <td class="px-1 py-1"><input type="number" name="recPos" class="w-12 border rounded px-1 py-0.5 text-center"/></td>
      <td class="px-1 py-1"><input type="number" name="recNeg" class="w-12 border rounded px-1 py-0.5 text-center"/></td>
      <td class="px-1 py-1"><input type="number" name="recExcl" class="w-12 border rounded px-1 py-0.5 text-center"/></td>
      <td class="px-1 py-1"><input type="number" name="bloqEx" class="w-12 border rounded px-1 py-0.5 text-center"/></td>
      <td class="px-1 py-1"><input type="number" name="ataqRot" class="w-12 border rounded px-1 py-0.5 text-center"/></td>
      <td class="px-1 py-1"><input type="number" name="totalSaques" class="w-12 border rounded px-1 py-0.5 text-center" readonly/></td>
      <td class="px-1 py-1"><input type="number" name="totalAtq" class="w-12 border rounded px-1 py-0.5 text-center" readonly/></td>
    `;

    // Binding inputs excepto totales
    tr.querySelectorAll('input[type="number"]').forEach(input => {
      if (!['totalSaques', 'totalAtq'].includes(input.name)) {
        input.addEventListener('input', () => updateRowAndFooter(tr));
      }
    });

    tbody.appendChild(tr);
    return tr;
  }

  // Inicializar tabla con 6 filas
  function initializeTable() {
    for (let i = 1; i <= 6; i++) {
      addRow(i);
    }
  }

  // Inicializa la tabla con 6 filas
  initializeTable();

  // Botón para agregar más filas
  btnAdd.addEventListener('click', e => {
    e.preventDefault();
    const newRow = addRow();
    newRow.scrollIntoView({ behavior: 'smooth' });
  });
});

// sidebar
document.addEventListener('DOMContentLoaded', () => {
  fetch('../partials/sidebar.html') // cambia la ruta si es necesario
    .then(res => res.text())
    .then(html => {
      document.getElementById('sidebar-container').innerHTML = html;
    })
    .catch(err => console.error('Error loading sidebar:', err));
});