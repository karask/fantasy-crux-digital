import { FULL_EQUIPMENT } from '../data/equipment-full.js';

export function initEquipmentModule() {
  const container = document.getElementById('content-equipment');
  if (!container) return;

  // Render initialization
  container.innerHTML = `
    <div class="filter-bar" style="margin-bottom: 1.5rem; display: flex; gap: 0.5rem; flex-wrap: wrap; align-items: center;">
      <div style="flex: 1; min-width: 200px;">
        <input type="text" id="equipment-search" class="input-ornate" placeholder="Search equipment...">
      </div>
      <button class="btn btn-filter active" data-filter="all">All</button>
      <button class="btn btn-filter" data-filter="Weapons">Weapons</button>
      <button class="btn btn-filter" data-filter="Armor">Armor</button>
      <button class="btn btn-filter" data-filter="General">General</button>
      <button class="btn btn-filter" data-filter="Transport">Transport</button>
    </div>

    <div id="equipment-container">
      <!-- Populated via JS -->
    </div>
  `;

  const listContainer = document.getElementById('equipment-container');
  const searchInput = document.getElementById('equipment-search');
  let currentFilter = 'all';

  function renderEquipment(searchTerm = '') {
    listContainer.innerHTML = '';
    const term = searchTerm.toLowerCase();

    // Iterate through all categories in data
    for (const [sectionName, items] of Object.entries(FULL_EQUIPMENT)) {
      // Filter items based on search and category filter
      const filteredItems = items.filter(item => {
        const matchesSearch = item.name.toLowerCase().includes(term) ||
          (item.description && item.description.toLowerCase().includes(term));

        let matchesFilter = true;
        if (currentFilter !== 'all') {
          if (currentFilter === 'Weapons' && item.category !== 'Weapons') matchesFilter = false;
          else if (currentFilter === 'Armor' && item.category !== 'Armor') matchesFilter = false;
          else if (currentFilter === 'General' && item.category !== 'General') matchesFilter = false;
          else if (currentFilter === 'Transport' && (item.category !== 'Animals/Transport' && item.category !== 'Food/Lodging')) matchesFilter = false;
        }

        return matchesSearch && matchesFilter;
      });

      if (filteredItems.length > 0) {
        // Create Section Header
        const sectionHeader = document.createElement('h3');
        sectionHeader.className = 'section-header-large';
        sectionHeader.textContent = sectionName;
        listContainer.appendChild(sectionHeader);

        // Create Table
        const table = document.createElement('table');
        table.className = 'module-table';

        // Determine columns based on section (General vs Weapons/Armor)
        let headerHtml = '';
        if (sectionName.includes('Weapons')) {
          headerHtml = `
                        <tr>
                            <th style="width: 25%;">Item</th>
                            <th style="width: 15%;">Damage</th>
                            <th style="width: 30%;">Properties / Range</th>
                            <th style="width: 10%;">Cost</th>
                            <th style="width: 10%;">ENC</th>
                        </tr>`;
        } else if (sectionName.includes('Armour') || sectionName.includes('Armor')) {
          headerHtml = `
                        <tr>
                            <th style="width: 25%;">Item</th>
                            <th style="width: 15%;">AP</th>
                            <th style="width: 40%;">Description</th>
                            <th style="width: 10%;">Cost</th>
                            <th style="width: 10%;">ENC</th>
                        </tr>`;
        } else {
          headerHtml = `
                        <tr>
                            <th style="width: 25%;">Item</th>
                            <th style="width: 55%;">Description</th>
                            <th style="width: 10%;">Cost</th>
                            <th style="width: 10%;">ENC</th>
                        </tr>`;
        }

        table.innerHTML = `<thead>${headerHtml}</thead><tbody></tbody>`;
        const tbody = table.querySelector('tbody');

        filteredItems.forEach(item => {
          const tr = document.createElement('tr');

          let rowHtml = '';

          if (sectionName.includes('Weapons')) {
            let props = [];
            if (item.type) props.push(`Type: ${item.type}`);
            if (item.range) props.push(`Range: ${item.range}`);
            if (item.ap) props.push(`AP: ${item.ap}`);
            if (item.str_dex && item.str_dex !== '-/-') props.push(`Req: ${item.str_dex}`);

            rowHtml = `
                            <td class="col-name">${item.name}</td>
                            <td style="color: var(--accent-blue); font-weight: bold;">${item.damage || '-'}</td>
                            <td>${props.join(', ')}</td>
                            <td style="color: var(--gold);">${item.cost}</td>
                            <td>${item.enc || '-'}</td>
                         `;
          } else if (sectionName.includes('Armour') || sectionName.includes('Armor')) {
            rowHtml = `
                            <td class="col-name">${item.name}</td>
                            <td style="color: var(--accent-blue); font-weight: bold;">${item.ap}</td>
                            <td>${item.description || '-'}</td>
                            <td style="color: var(--gold);">${item.cost}</td>
                            <td>${item.enc}</td>
                        `;
          } else {
            rowHtml = `
                            <td class="col-name">${item.name}</td>
                            <td>${item.description || '-'}</td>
                            <td style="color: var(--gold);">${item.cost}</td>
                            <td>${item.enc || '-'}</td>
                        `;
          }

          tr.innerHTML = rowHtml;
          tbody.appendChild(tr);
        });

        listContainer.appendChild(table);
      }
    }
  }

  // Initial Render
  renderEquipment();

  // Event Listeners
  searchInput.addEventListener('input', (e) => {
    renderEquipment(e.target.value);
  });

  const filters = container.querySelectorAll('.btn-filter');
  filters.forEach(btn => {
    btn.addEventListener('click', () => {
      filters.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      renderEquipment(searchInput.value);
    });
  });
}
