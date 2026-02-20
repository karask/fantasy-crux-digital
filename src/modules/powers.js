import { FULL_POWERS } from '../data/powers-full.js';
import { POWERS_RULES } from '../data/powers-rules.js';

export function initPowersModule() {
  const container = document.getElementById('content-powers');
  if (!container) return;

  container.innerHTML = `
    <!-- Tabs Nav -->
    <div class="tab-nav">
      <button class="tab-btn active" data-tab="powers-list">
        <span class="tab-icon">✨</span> Powers List
      </button>
      <button class="tab-btn" data-tab="spot-rules">
        <span class="tab-icon">📜</span> Spot Rules
      </button>
    </div>

    <!-- Filter Bar -->
    <div class="filter-bar" style="margin-bottom: 1.5rem; display: flex; gap: 0.5rem; flex-wrap: wrap; align-items: center;">
      <div id="search-container" style="flex: 1; min-width: 200px;">
        <input type="text" id="powers-search" class="input-ornate" placeholder="Search spells (name, type, description)...">
      </div>
      <button class="btn btn-filter active" data-filter="all">All</button>
      <button class="btn btn-filter" data-filter="Battle">Battle</button>
      <button class="btn btn-filter" data-filter="Folk Magic">Folk Magic</button>
      <button class="btn btn-filter" data-filter="Arcane Magic">Arcane Magic</button>
      <button class="btn btn-filter" data-filter="Divine Magic">Divine Magic</button>
    </div>

    <div id="ref-powers-list" class="powers-list">
      <!-- Populated via JS -->
    </div>
    
    <div id="ref-spot-rules" class="spot-rules-list" style="display: none; padding-bottom: 2rem;">
      <!-- Populated via JS -->
    </div>
  `;

  // References
  const listContainer = document.getElementById('ref-powers-list');
  const rulesContainer = document.getElementById('ref-spot-rules');
  const searchInput = document.getElementById('powers-search');
  const searchContainer = document.getElementById('search-container');
  const tabBtns = container.querySelectorAll('.tab-btn');
  const filters = container.querySelectorAll('.btn-filter');

  let currentTab = 'powers-list';
  let currentFilter = 'all';

  function renderPowers(searchTerm = '') {
    listContainer.innerHTML = '';
    const term = searchTerm.toLowerCase();

    // Sort powers by Type then Name
    const sortedPowers = [...FULL_POWERS].sort((a, b) => {
      if (a.type < b.type) return -1;
      if (a.type > b.type) return 1;
      return a.name.localeCompare(b.name);
    });

    // Group by Type
    const grouped = {};
    sortedPowers.forEach(power => {
      const type = power.type || 'General';
      if (!grouped[type]) grouped[type] = [];
      grouped[type].push(power);
    });

    let hasContent = false;

    // Iterate over specific types to maintain order
    const typesOrder = ['Battle', 'Folk', 'Arcane', 'Divine'];

    // Only iterate types that exist in data
    const typesToRender = typesOrder.filter(t => grouped[t]);

    typesToRender.forEach(type => {
      // Filter by currentFilter
      let match = false;
      if (currentFilter === 'all') match = true;
      else if (currentFilter === 'Battle' && type === 'Battle') match = true;
      else if (currentFilter === 'Folk Magic' && type === 'Folk') match = true;
      else if (currentFilter === 'Arcane Magic' && type === 'Arcane') match = true;
      else if (currentFilter === 'Divine Magic' && type === 'Divine') match = true;

      if (!match) return;

      // Filter by Search within this group
      const filteredPowers = grouped[type].filter(p =>
        p.name.toLowerCase().includes(term) ||
        (p.description && p.description.toLowerCase().includes(term))
      );

      if (filteredPowers.length > 0) {
        hasContent = true;

        const header = document.createElement('h3');
        header.className = 'section-header-large';
        header.textContent = type + (type === 'Battle' ? ' Techniques' : ' Magic');
        header.style.marginTop = '1.5rem';
        header.style.borderBottom = '1px solid var(--border-color)';
        header.style.paddingBottom = '0.5rem';
        listContainer.appendChild(header);

        const table = document.createElement('table');
        table.className = 'module-table';
        table.style.marginBottom = '2rem';
        table.innerHTML = `
              <thead>
                <tr>
                  <th style="width: 20%;">Name</th>
                  <th style="width: 20%; text-align:center;">Traits</th>
                  <th style="width: 60%;">Description</th>
                </tr>
              </thead>
              <tbody></tbody>
            `;
        const tbody = table.querySelector('tbody');

        filteredPowers.forEach(p => {
          const tr = document.createElement('tr');
          tr.innerHTML = `
                  <td class="col-name" style="font-weight:bold; color:var(--text-highlight); vertical-align: top;">${p.name}</td>
                  <td style="color: var(--gold); text-align:center; vertical-align: top; font-size: 0.85rem;">${p.magnitude || '-'}</td>
                  <td class="col-desc" style="line-height: 1.5;">${p.description}</td>
              `;
          tbody.appendChild(tr);
        });
        listContainer.appendChild(table);
      }
    });

    if (!hasContent) {
      listContainer.innerHTML = '<p class="text-muted" style="text-align: center; padding: 2rem;">No powers found matching criteria.</p>';
    }
  }

  function renderSpotRules() {
    rulesContainer.innerHTML = '';
    const typesOrder = ['Battle', 'Folk Magic', 'Arcane Magic', 'Divine Magic'];

    let hasContent = false;

    typesOrder.forEach(type => {
      let match = false;
      if (currentFilter === 'all') match = true;
      else if (currentFilter === type) match = true;

      if (!match || !POWERS_RULES[type]) return;

      hasContent = true;
      const ruleBlock = document.createElement('div');
      ruleBlock.className = 'text-large';
      ruleBlock.innerHTML = `
        <h2 class="section-header" style="color: var(--accent); border-bottom: 2px solid var(--accent); padding-bottom: 0.5rem; margin-top: 2rem; margin-bottom: 1.5rem; font-size: 2.2rem; font-weight: bold;">${type} Rules</h2>
        ${POWERS_RULES[type]}
      `;
      rulesContainer.appendChild(ruleBlock);
    });

    if (!hasContent) {
      rulesContainer.innerHTML = '<p class="text-muted" style="text-align: center; padding: 2rem;">No rules found matching criteria.</p>';
    }
  }

  function updateView() {
    if (currentTab === 'powers-list') {
      searchContainer.style.display = 'block';
      listContainer.style.display = 'block';
      rulesContainer.style.display = 'none';
      renderPowers(searchInput.value);
    } else {
      searchContainer.style.display = 'none';
      listContainer.style.display = 'none';
      rulesContainer.style.display = 'block';
      renderSpotRules();
    }
  }

  // Initial Render
  updateView();

  // Event Listeners
  searchInput.addEventListener('input', (e) => {
    if (currentTab === 'powers-list') {
      renderPowers(e.target.value);
    }
  });

  filters.forEach(btn => {
    btn.addEventListener('click', () => {
      filters.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      updateView();
    });
  });

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentTab = btn.dataset.tab;
      updateView();
    });
  });
}
