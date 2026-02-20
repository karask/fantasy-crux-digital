import { FULL_CREATURES } from '../data/creatures-full.js';

export function initCreaturesModule() {
  const container = document.getElementById('content-monsters');
  if (!container) return;

  container.innerHTML = `
    <div class="filter-bar" style="margin-bottom: 1.5rem; display: flex; gap: 0.5rem; flex-wrap: wrap; align-items: center;">
      <div style="flex: 1; min-width: 200px;">
        <input type="text" id="monsters-search" class="input-ornate" placeholder="Search monsters...">
      </div>
      <button class="btn btn-filter active" data-filter="all">All</button>
      <button class="btn btn-filter" data-filter="Animals">Animals</button>
      <button class="btn btn-filter" data-filter="Monsters">Monsters</button>
      <button class="btn btn-filter" data-filter="Nymphs">Nymphs</button>
      <button class="btn btn-filter" data-filter="Spirits">Spirits</button>
      <button class="btn btn-filter" data-filter="Undead">Undead</button>
    </div>

    <div id="monsters-list" class="creature-list">
      <!-- Populated via JS -->
    </div>
  `;

  const listContainer = document.getElementById('monsters-list');
  const searchInput = document.getElementById('monsters-search');
  let currentFilter = 'all';

  function renderCreatures(searchTerm = '') {
    listContainer.innerHTML = '';
    const term = searchTerm.toLowerCase();

    // Sort logic
    const sortedCreatures = [...FULL_CREATURES].sort((a, b) => a.name.localeCompare(b.name));

    let hasContent = false;

    sortedCreatures.forEach(c => {
      const matchesSearch = c.name.toLowerCase().includes(term) ||
        (c.description && c.description.toLowerCase().includes(term));

      // Simple Category Logic based on Name or if we had a category field.
      // The dataset `FULL_CREATURES` I created only has name, description, etc.
      // It does NOT have a category field unless I added it in Python. I did NOT.
      // However, the LaTeX file had sections. The parser I wrote tried to extract sections but I didn't verify it added a 'category' field to the root object.
      // Looking at my python script:
      // creature = { 'name': name, 'description': description, ... } - No category.
      // So the filter buttons won't iterate correctly unless I infer category or if I simply show everything for now.
      // Or I can infer category from names for Nymphs/Undead/Spirits.

      // Inference Logic:
      const nymphs = ['Dryad', 'Hag', 'Naiad', 'Oread'];
      const spirits = ['Ancestor Spirit', 'Disease Spirit', 'Ghost', 'Guardian Spirit', 'Healing Spirit', 'Magic Spirit', 'Passion Spirit'];
      const undead = ['Ghoul', 'Mummy', 'Skeleton', 'Vampire', 'Zombie'];
      const animals = ['Ant', 'Bear', 'Bull', 'Crocodile', 'Dog', 'Elephant', 'Hawk', 'Horse', 'Lion', 'Lizard', 'Octupus', 'Octopus', 'Python', 'Raven', 'Rhinoceros', 'Spider', 'Viper', 'Wolf'];
      // Everything else is Monsters

      let category = 'Monsters';
      if (nymphs.includes(c.name)) category = 'Nymphs';
      else if (spirits.includes(c.name) || c.name.includes('Spirit')) category = 'Spirits';
      else if (undead.includes(c.name)) category = 'Undead';
      else if (animals.some(a => c.name === a || c.name.startsWith(a + ' ') || c.name.startsWith(a + ' ('))) category = 'Animals';

      let matchesCategory = false;
      if (currentFilter === 'all') matchesCategory = true;
      else matchesCategory = category === currentFilter;

      if (!matchesSearch || !matchesCategory) return;

      hasContent = true;

      const card = document.createElement('div');
      card.className = 'creature-card';

      // Attributes Table Helper
      const attrs = c.attributes || {};
      const stats = c.characteristics || {};

      // Format Attributes for display
      const attrList = [
        { label: 'HP', val: attrs.hitpoints || '-' },
        { label: 'Major Wound', val: attrs.majorwound || '-' },
        { label: 'Move', val: attrs.movementrate || '-' },
        { label: 'DM', val: attrs.damagemodifier || '-' },
        { label: 'Armor', val: attrs.armor || '-' },
        { label: 'Plunder', val: attrs.plunderrating || '-' },
        { label: 'PP', val: attrs.powerpoints || '-' }
      ];

      const attrHtml = attrList.map(a =>
        `<div class="stat-box" style="font-size: 1.1rem; padding: 0.5rem;">
            <div class="stat-label" style="font-size: 0.9rem; margin-bottom: 0.2rem;">${a.label}</div>
            <div class="stat-value" style="font-size: 1.2rem;">${a.val}</div>
          </div>`
      ).join('');

      // Format Characteristics
      const statList = [
        { label: 'STR', val: stats.STR || '-' },
        { label: 'CON', val: stats.CON || '-' },
        { label: 'DEX', val: stats.DEX || '-' },
        { label: 'SIZ', val: stats.SIZ || '-' },
        { label: 'INT', val: stats.INT || '-' },
        { label: 'POW', val: stats.POW || '-' },
        { label: 'CHA', val: stats.CHA || '-' }
      ];

      const statHtml = statList.map(s =>
        `<div class="stat-box" style="background: rgba(0,0,0,0.2); font-size: 1.1rem; padding: 0.5rem;">
            <div class="stat-label" style="font-size: 0.9rem; margin-bottom: 0.2rem;">${s.label}</div>
            <div class="stat-value" style="font-size: 1.2rem;">${s.val}</div>
          </div>`
      ).join('');

      // Helper for lists
      const formatList = (items) => {
        if (!items || items.length === 0) return '';
        return items.map(i => `<li style="margin-bottom:0.5rem;"><strong>${i.name}:</strong> ${i.description || ''}</li>`).join('');
      };

      card.innerHTML = `
         <div class="creature-header" style="margin-bottom: 1.5rem; display: flex; justify-content: space-between; align-items: baseline; border-bottom: 2px solid var(--border-gold); padding-bottom: 0.5rem;">
           <h2 class="creature-name" style="font-size: 2.2rem; color: var(--gold); margin: 0;">${c.name}</h2>
           <div class="creature-category" style="font-size: 1.2rem; opacity: 0.8; text-transform: uppercase; letter-spacing: 1px;">${category}</div>
         </div>
         <div class="creature-body text-large">
            <div style="display: flex; gap: 1.5rem; margin-bottom: 1.5rem; align-items: flex-start;">
                <div class="creature-description" style="flex: 1; font-style: italic; opacity: 0.9; line-height: 1.6; font-size: 1.2rem;">
                    ${c.description}
                </div>
                ${c.image ? `
                <div style="flex-shrink: 0; width: 250px;">
                    <img src="${c.image}" alt="${c.name}" style="width: 100%; border-radius: 8px; border: 1px solid var(--border-color); box-shadow: 0 4px 6px rgba(0,0,0,0.3);">
                </div>
                ` : ''}
            </div>
             <div style="display: flex; flex-direction: column; gap: 1.5rem; margin-bottom: 1.5rem;">
                 <!-- Attributes -->
                 <div>
                    <h4 style="border-bottom: 1px solid var(--border-color); margin-bottom: 0.8rem; color: var(--gold); font-size: 1.4rem;">Attributes</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(80px, 1fr)); gap: 10px;">
                        ${attrHtml}
                    </div>
                 </div>
                 <!-- Characteristics -->
                 <div>
                    <h4 style="border-bottom: 1px solid var(--border-color); margin-bottom: 0.8rem; color: var(--gold); font-size: 1.4rem;">Characteristics</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(60px, 1fr)); gap: 10px;">
                        ${statHtml}
                    </div>
                 </div>
            </div>

            <!-- Skills -->
            ${c.skills && c.skills.length > 0 ? `
             <div style="margin-bottom: 1.5rem;">
                <h4 style="color: var(--text-highlight); border-bottom: 1px solid var(--border-gold); margin-bottom:0.8rem; font-size: 1.4rem;">Skills / Attacks</h4>
                <ul style="list-style: none; padding-left: 0; font-size: 1.1rem; line-height: 1.6;">
                    ${formatList(c.skills)}
                </ul>
             </div>
            ` : ''}

             <!-- Abilities -->
            ${c.abilities && c.abilities.length > 0 ? `
             <div style="margin-bottom: 1.5rem;">
                <h4 style="color: var(--text-highlight); border-bottom: 1px solid var(--border-gold); margin-bottom:0.8rem; font-size: 1.4rem;">Special Abilities</h4>
                <ul style="list-style: none; padding-left: 0; font-size: 1.1rem; line-height: 1.6;">
                    ${formatList(c.abilities)}
                </ul>
             </div>
            ` : ''}
            
            <!-- Tables -->
            ${c.tables && c.tables.length > 0 ? c.tables.map(t => {
        // Header (first row)
        const headerRow = t.rows[0];
        const dataRows = t.rows.slice(1);

        return `
                <div style="margin-top: 1.5rem; overflow-x: auto;">
                    <table class="module-table text-large" style="width: 100%;">
                        <thead>
                            <tr>
                                ${headerRow.map(h => `<th>${h}</th>`).join('')}
                            </tr>
                        </thead>
                        <tbody>
                            ${dataRows.map(r => `
                                <tr>
                                    ${r.map(cell => `<td>${cell}</td>`).join('')}
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
                `;
      }).join('') : ''}

         </div>
       `;
      listContainer.appendChild(card);
    });

    if (!hasContent) {
      listContainer.innerHTML = '<p class="text-muted" style="text-align: center; padding: 2rem;">No creatures found.</p>';
    }
  }

  // Initial Render
  renderCreatures();

  // Event Listeners
  searchInput.addEventListener('input', (e) => {
    renderCreatures(e.target.value);
  });

  const filters = container.querySelectorAll('.btn-filter');
  filters.forEach(btn => {
    btn.addEventListener('click', () => {
      filters.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      renderCreatures(searchInput.value);
    });
  });
}
