import { FULL_SKILLS } from '../data/skills-full.js';

export function initSkillsModule() {
  const container = document.getElementById('content-skills');
  if (!container) return;

  // Render the initial structure
  container.innerHTML = `
    <div class="tab-nav">
      <button class="tab-btn active" data-tab="skills-list">
        <span class="tab-icon">⚔️</span> Skills List
      </button>
      <button class="tab-btn" data-tab="skills-summary">
        <span class="tab-icon">📜</span> Summary Rules
      </button>
    </div>

    <!-- Summary Tab -->
    <div id="skills-summary" class="tab-panel">
      <div class="card">
        <div class="card-body text-large">
          <h3 class="section-header-large">The Basic Skill Test</h3>
          <p>Roll D100 and compare to skill score. Equal to or less is a success.</p>
          <p><strong>Critical Success:</strong> Roll &le; tens digit of skill.</p>
          <p><strong>Fumble:</strong> Roll 99 or 00. (If skill > 100%, only 00 is a fumble).</p>

          <h3 class="section-header-large">Bonus & Penalty Dice</h3>
          <p><strong>Bonus Die (+1B):</strong> Roll 2D10 for tens, keep best. (e.g. roll 3, 8 for tens => 80).</p>
          <p><strong>Penalty Die (-1P):</strong> Roll 2D10 for tens, keep worst. (e.g. roll 3, 8 for tens => 30).</p>
          <p>Multiple dice stack (e.g. +2B means roll 3D10 for tens, keep best).</p>

          <h3 class="section-header-large">Opposed Tests</h3>
          <p>Both roll. Higher successful roll wins. Critical beats normal success.</p>
          <p>If both fail, lower roll wins.</p>
          <p><strong>Skills > 100%:</strong> Reduce both scores by amount over 100%.</p>
        </div>
      </div>
    </div>

    <!-- Skills List Tab -->
    <div id="skills-list" class="tab-panel active">
      <div class="filter-bar" style="margin-bottom: 1rem; display: flex; gap: 0.5rem; flex-wrap: wrap;">
        <button class="btn btn-filter active" data-filter="all">All</button>
        <button class="btn btn-filter" data-filter="Combat">Combat</button>
        <button class="btn btn-filter" data-filter="Resistances">Resistances</button>
        <button class="btn btn-filter" data-filter="Knowledge">Knowledge</button>
        <button class="btn btn-filter" data-filter="Practical">Practical</button>
      </div>

      <div id="ref-skills-container">
        <!-- populated via JS -->
      </div>
    </div>
  `;

  // Render Skills
  const skillsContainer = document.getElementById('ref-skills-container');

  function renderSkills(filter = 'all') {
    skillsContainer.innerHTML = '';

    // Sort skills alphabetically
    const sortedSkills = [...FULL_SKILLS].sort((a, b) => a.name.localeCompare(b.name));

    // Create Table
    const table = document.createElement('table');
    table.className = 'module-table';
    table.innerHTML = `
          <thead>
            <tr>
              <th class="col-name" style="width: 25%;">Skill Name</th>
              <th class="col-desc">Description</th>
            </tr>
          </thead>
          <tbody></tbody>
        `;
    const tbody = table.querySelector('tbody');

    let hasContent = false;

    sortedSkills.forEach((skill) => {
      const skillCategory = skill.category ? skill.category : 'Other';

      // Filter logic: Case-insensitive comparison
      if (filter !== 'all' && skillCategory.toLowerCase() !== filter.toLowerCase()) return;

      hasContent = true;

      let subskillsHtml = '';
      if (skill.subskills) {
        subskillsHtml = '<div class="subskills" style="margin-top: 0.8rem; padding-left: 1rem; border-left: 2px solid var(--border-gold);">';
        for (const [subName, subDesc] of Object.entries(skill.subskills)) {
          subskillsHtml += `<p><strong>${subName}:</strong> ${subDesc}</p>`;
        }
        subskillsHtml += '</div>';
      }

      // Convert newlines to <br> and bold markdown to <strong>
      // Handling simple markdown bolding **text**
      let descriptionHtml = skill.description
        .replace(/\n\n/g, '<br><br>')
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

      const tr = document.createElement('tr');
      tr.innerHTML = `
              <td class="col-name">
                <div style="font-weight:bold; color:var(--text-highlight); font-size: 1.1em;">${skill.name}</div>
                <div style="font-size:0.85rem; opacity:0.7; margin-top:0.2rem; text-transform:uppercase; letter-spacing:0.5px;">${skillCategory}</div>
              </td>
              <td class="col-desc" style="line-height: 1.6;">
                ${descriptionHtml}
                ${subskillsHtml}
              </td>
            `;
      tbody.appendChild(tr);
    });

    if (!hasContent) {
      skillsContainer.innerHTML = '<p class="text-muted" style="text-align: center; padding: 2rem;">No skills found for this category.</p>';
    } else {
      skillsContainer.appendChild(table);
    }
  }

  renderSkills();

  // Tab Switching Logic
  const tabs = container.querySelectorAll('.tab-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const targetId = tab.dataset.tab;
      container.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
      document.getElementById(targetId).classList.add('active');
    });
  });

  // Filter Logic
  const filters = container.querySelectorAll('.btn-filter');
  filters.forEach(btn => {
    btn.addEventListener('click', () => {
      filters.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderSkills(btn.dataset.filter);
    });
  });
}
