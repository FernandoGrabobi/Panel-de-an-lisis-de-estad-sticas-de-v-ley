// team-stats.js
document.addEventListener('DOMContentLoaded', () => {
    const tbody = document.querySelector('#team-table tbody');
    const btnAdd = document.getElementById('add-row');
  
    // función que crea una fila con inputs
    function addRow() {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td class="px-1 py-1">
          <input type="number" name="num" min="1" class="w-12 border rounded px-1 py-0.5"/>
        </td>
        <td class="px-1 py-1">
          <input type="number" name="saquePos" class="w-12 border rounded px-1 py-0.5"/>
        </td>
        <td class="px-1 py-1">
          <input type="number" name="ace" class="w-12 border rounded px-1 py-0.5"/>
        </td>
        <td class="px-1 py-1">
          <input type="number" name="saqueErr" class="w-12 border rounded px-1 py-0.5"/>
        </td>
        <td class="px-1 py-1">
          <input type="number" name="recDoblePos" class="w-12 border rounded px-1 py-0.5"/>
        </td>
        <td class="px-1 py-1">
          <input type="number" name="recPos" class="w-12 border rounded px-1 py-0.5"/>
        </td>
        <td class="px-1 py-1">
          <input type="number" name="recNeg" class="w-12 border rounded px-1 py-0.5"/>
        </td>
        <td class="px-1 py-1">
          <input type="number" name="recExcl" class="w-12 border rounded px-1 py-0.5"/>
        </td>
        <td class="px-1 py-1">
          <input type="number" name="bloqEx" class="w-12 border rounded px-1 py-0.5"/>
        </td>
        <td class="px-1 py-1">
          <input type="number" name="ataqRot" class="w-12 border rounded px-1 py-0.5"/>
        </td>
      `;
      tbody.appendChild(tr);
    }
  
    // Agrega una fila inicial
    addRow();
  
    // Agregar más filas al click
    btnAdd.addEventListener('click', e => {
      e.preventDefault();
      addRow();
      // opcional: hacer scroll a la nueva fila
      tbody.lastElementChild.scrollIntoView({ behavior: 'smooth' });
    });
  });
  