import { FULL_SPOT_RULES } from '../data/spot-rules-full.js';

export function initSpotRulesModule() {
  const container = document.getElementById('content-spot-rules');
  if (!container) return;

  container.innerHTML = `
    <div class="filter-bar" style="margin-bottom: 1.5rem;">
      <input type="text" id="spot-rules-search" class="input-ornate" placeholder="Search rules (falling, fire, suffocation, etc)..." style="width: 100%; max-width: 400px;">
    </div>

    <div id="spot-rules-list" class="spot-rules-list">
      <!-- Populated by JS -->
    </div>
  `;

  const searchInput = document.getElementById('spot-rules-search');
  const listContainer = document.getElementById('spot-rules-list');

  function renderSpotRules(searchTerm = '') {
    listContainer.innerHTML = '';
    const term = searchTerm.toLowerCase();
    let hasContent = false;

    for (const [category, rules] of Object.entries(FULL_SPOT_RULES)) {
      const filteredRules = rules.filter(rule => {
        return rule.name.toLowerCase().includes(term) ||
          (rule.description && rule.description.toLowerCase().includes(term)) ||
          (rule.effect && rule.effect.toLowerCase().includes(term));
      });

      if (filteredRules.length > 0) {
        hasContent = true;
        const sectionHeader = document.createElement('h3');
        sectionHeader.className = 'section-header-large';
        sectionHeader.textContent = category;
        listContainer.appendChild(sectionHeader);

        const table = document.createElement('table');
        table.className = 'module-table';
        table.innerHTML = `
                  <thead>
                    <tr>
                      <th style="width: 25%;">Rule</th>
                      <th style="width: 75%;">Effect & Description</th>
                    </tr>
                  </thead>
                  <tbody></tbody>
                `;
        const tbody = table.querySelector('tbody');

        filteredRules.forEach(rule => {
          const tr = document.createElement('tr');

          let mechanicsHtml = '';
          if (rule.rate) mechanicsHtml += `<div style="margin-bottom: 0.3rem;"><strong style="color:var(--text-muted)">Rate:</strong> ${rule.rate}</div>`;
          if (rule.limit) mechanicsHtml += `<div style="margin-bottom: 0.3rem;"><strong style="color:var(--text-muted)">Limit:</strong> ${rule.limit}</div>`;
          if (rule.effect) mechanicsHtml += `<div style="margin-bottom: 0.5rem; color: var(--gold);">${rule.effect}</div>`;

          tr.innerHTML = `
                      <td class="col-name">${rule.name}</td>
                      <td class="col-desc">
                        ${mechanicsHtml}
                        ${rule.description ? `<div>${rule.description}</div>` : ''}
                      </td>
                    `;
          tbody.appendChild(tr);
        });

        listContainer.appendChild(table);
      }
    }

    if (!hasContent) {
      listContainer.innerHTML = '<p class="text-muted" style="text-align: center; padding: 2rem;">No rules found matching criteria.</p>';
    }
  }

  // Event Listeners
  searchInput.addEventListener('input', (e) => {
    renderSpotRules(e.target.value);
  });

  // Initial Render
  renderSpotRules();
}
