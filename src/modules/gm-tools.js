import { GM_TOOLS_DATA } from '../data/gm-tools-full.js';

export function initGMToolsModule() {
  const container = document.getElementById('content-gm-tools');
  if (!container) return;

  container.innerHTML = `
    <!-- Tab Navigation -->
    <div class="tab-nav" style="flex-wrap: wrap;">
      <button class="tab-btn active" data-tab="gm-plunder">Plunder</button>
      <button class="tab-btn" data-tab="gm-ships">Ships</button>
      <button class="tab-btn" data-tab="gm-mass-combat">Mass Combat</button>
      <button class="tab-btn" data-tab="gm-races">Races</button>
      <button class="tab-btn" data-tab="gm-archetypes">Archetypes</button>
      <button class="tab-btn" data-tab="gm-traits">Traits</button>
      <button class="tab-btn" data-tab="gm-npcs">NPCs</button>
      <button class="tab-btn" data-tab="gm-epic">Epic</button>
    </div>

    <!-- Plunder Tab -->
    <div id="gm-plunder" class="tab-panel active">
      <h3 class="section-header-large">Plunder Ratings</h3>
      <table class="module-table">
        <thead>
          <tr>
            <th style="width: 15%;">Rating</th>
            <th style="width: 85%;">Treasure Found</th>
          </tr>
        </thead>
        <tbody>
          ${GM_TOOLS_DATA.plunder.map(p => `
            <tr>
              <td style="font-weight: bold; color: var(--gold); text-align: center;">${p.rating}</td>
              <td>${p.description}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>

    <!-- Ships Tab -->
    <div id="gm-ships" class="tab-panel">
      <h3 class="section-header-large">Ships & Sailing</h3>
      <table class="module-table">
        <thead>
          <tr>
            <th>Type</th>
            <th>Crew</th>
            <th>Cost</th>
            <th>Manoeuvre</th>
            <th>Speed</th>
            <th>SP</th>
            <th>Cargo</th>
          </tr>
        </thead>
        <tbody>
          ${GM_TOOLS_DATA.ships.map(s => `
            <tr>
              <td class="col-name">${s.type}</td>
              <td>${s.crew}</td>
              <td style="color: var(--gold);">${s.cost}</td>
              <td>${s.man}</td>
              <td>${s.speed}</td>
              <td>${s.sp}</td>
              <td>${s.cargo}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>

    <!-- Mass Combat Tab -->
    <div id="gm-mass-combat" class="tab-panel">
       <h3 class="section-header-large">Mass Combat Rules</h3>
       <div class="card text-large" style="margin-bottom: 2rem;">
         <div class="card-body">
           <p>${GM_TOOLS_DATA.massCombat.description}</p>
         </div>
       </div>

       <h3 class="section-header-large">Tactical Modifiers</h3>
       <table class="module-table">
         <thead>
           <tr>
             <th style="width: 70%;">Condition</th>
             <th style="width: 30%;">Modifier</th>
           </tr>
         </thead>
         <tbody>
           ${GM_TOOLS_DATA.massCombat.modifiers.map(m => `
             <tr>
               <td>${m.condition}</td>
               <td style="font-weight: bold; color: var(--accent-blue);">${m.mod}</td>
             </tr>
           `).join('')}
         </tbody>
       </table>
    </div>

    <!-- Races Tab -->
    <div id="gm-races" class="tab-panel">
      <h3 class="section-header-large">Fantasy Races</h3>
      ${GM_TOOLS_DATA.races.map(race => `
        <div class="card" style="margin-bottom: 2rem;">
          <div class="card-header">
            <h3>${race.name}</h3>
          </div>
          <div class="card-body text-large">
            <p><strong style="color: var(--gold);">Characteristics:</strong> ${race.stats}</p>
            <p><strong style="color: var(--gold);">Traits:</strong> ${race.traits}</p>
          </div>
        </div>
      `).join('')}
    </div>

    <!-- Archetypes Tab -->
    <div id="gm-archetypes" class="tab-panel">
      <h3 class="section-header-large">Player Archetypes</h3>
      ${GM_TOOLS_DATA.archetypes.map(arch => `
        <div class="card" style="margin-bottom: 2rem;">
          <div class="card-header">
            <h3>${arch.name}</h3>
          </div>
          <div class="card-body text-large">
            <p>${arch.description}</p>
          </div>
        </div>
      `).join('')}
    </div>

    <!-- Traits Tab -->
    <div id="gm-traits" class="tab-panel">
      <h3 class="section-header-large">Traits & Talents</h3>
      <table class="module-table">
        <thead>
          <tr>
            <th style="width: 25%;">Trait</th>
            <th style="width: 20%;">Cost</th>
            <th style="width: 55%;">Effect</th>
          </tr>
        </thead>
        <tbody>
           ${GM_TOOLS_DATA.traits.map(t => `
             <tr>
               <td class="col-name">${t.name}</td>
               <td style="color: var(--gold);">${t.cost}</td>
               <td>${t.description}</td>
             </tr>
           `).join('')}
        </tbody>
      </table>
    </div>

    <!-- NPCs Tab -->
    <div id="gm-npcs" class="tab-panel">
       <h3 class="section-header-large">Quick NPCs</h3>
       <table class="module-table">
        <thead>
          <tr>
            <th style="width: 30%;">NPC</th>
            <th style="width: 70%;">Description & Stats</th>
          </tr>
        </thead>
        <tbody>
           ${GM_TOOLS_DATA.npcs.map(n => `
             <tr>
               <td class="col-name">${n.name}</td>
               <td>${n.desc}</td>
             </tr>
           `).join('')}
        </tbody>
      </table>
    </div>

    <!-- Epic Tab -->
    <div id="gm-epic" class="tab-panel">
      <h3 class="section-header-large">Epic Character Rules</h3>
      <div class="card">
        <div class="card-body text-large">
          ${GM_TOOLS_DATA.epic.map(e => `
            <p style="margin-bottom: 0.5rem;">- ${e}</p>
          `).join('')}
        </div>
      </div>
    </div>
  `;

  // Tab Logic
  const tabs = container.querySelectorAll('.tab-btn');
  const sections = container.querySelectorAll('.tab-panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      sections.forEach(s => s.classList.remove('active'));

      tab.classList.add('active');
      const target = document.getElementById(tab.dataset.tab);
      if (target) target.classList.add('active');
    });
  });
}
