// Fantasy Crux Character Generator - Main Application
import {
  CHARACTERISTICS, CHAR_START_VALUE, CHAR_POINTS_TO_DISTRIBUTE, CHAR_MAX_VALUE, CHAR_MIN_VALUES,
  CLOSE_COMBAT_WEAPONS, RANGED_WEAPONS, ARMOR_TYPES, SKILL_CATEGORIES,
  EQUIPMENT_LIST, DISCIPLINES, ALL_POWERS
} from './data/gameData.js';
import {
  calculateHP, calculatePP, calculateDamageModifier,
  calculateCombatOrder, calculateMajorWound,
  calculateRemainingPoints
} from './data/calculations.js';

// ============ STATE ============
const IP_TOTAL = 10;
const state = {
  characteristics: { STR: 8, CON: 8, DEX: 8, SIZ: 8, INT: 8, POW: 8, CHA: 8 },
  armorIndex: 0,
  skillBonuses: {},
  genericSkillBonuses: {},
  ipConvertedToSkills: 0,
  equipmentItems: Array(20).fill({ name: '', enc: '' }),
  disciplineSelections: ['', '', ''],
  powerEntries: Array(20).fill({ name: '', magnitude: '', discipline: '', description: '' })
};

// ============ IP POOL ============
function getIPSpentOnAbilities() {
  let spent = 0;
  // Discipline costs
  for (let i = 0; i < 3; i++) {
    const name = state.disciplineSelections[i];
    if (name) {
      const disc = DISCIPLINES.find(d => d.name === name);
      if (disc) spent += disc.cost;
    }
  }
  // Power magnitudes
  for (let i = 0; i < 20; i++) {
    const magEl = document.getElementById(`power-mag-${i}`);
    const nameEl = document.getElementById(`power-name-${i}`);
    if (nameEl && nameEl.value.trim() && magEl) {
      spent += parseInt(magEl.value) || 0;
    }
  }
  return spent;
}

function getIPRemaining() {
  return IP_TOTAL - getIPSpentOnAbilities() - state.ipConvertedToSkills;
}

function updateIP() {
  const remaining = getIPRemaining();
  const ipDisplay = document.getElementById('ip-display');
  if (ipDisplay) {
    ipDisplay.textContent = Math.max(0, remaining);
    ipDisplay.style.color = remaining < 0 ? 'var(--red-bright)' : '';
  }
  updateConverterDisplay();
}

function getGenericPoolTotal() {
  return state.ipConvertedToSkills * 5;
}

function getGenericPoolSpent() {
  let spent = 0;
  for (const key of Object.keys(state.genericSkillBonuses)) {
    spent += state.genericSkillBonuses[key] || 0;
  }
  return spent;
}

function getGenericPoolRemaining() {
  return getGenericPoolTotal() - getGenericPoolSpent();
}

function updateConverterDisplay() {
  const ipAvailableForConversion = IP_TOTAL - getIPSpentOnAbilities();
  const convertedEl = document.getElementById('ip-converted-count');
  const bonusEl = document.getElementById('ip-bonus-sp');
  const poolRemainingEl = document.getElementById('generic-pool-remaining');
  const btnPlus = document.getElementById('ip-convert-plus');
  const btnMinus = document.getElementById('ip-convert-minus');

  if (convertedEl) convertedEl.textContent = state.ipConvertedToSkills;
  if (bonusEl) bonusEl.textContent = getGenericPoolTotal();
  if (poolRemainingEl) {
    const rem = getGenericPoolRemaining();
    poolRemainingEl.textContent = `${rem} pts`;
    poolRemainingEl.className = 'skill-category-points' + (rem < 0 ? ' negative' : '');
  }
  if (btnPlus) btnPlus.disabled = state.ipConvertedToSkills >= ipAvailableForConversion;
  if (btnMinus) btnMinus.disabled = state.ipConvertedToSkills <= 0;
}

function convertIPToSkills(delta) {
  const ipAvailableForConversion = IP_TOTAL - getIPSpentOnAbilities();
  const newVal = state.ipConvertedToSkills + delta;
  if (newVal < 0 || newVal > ipAvailableForConversion) return;
  state.ipConvertedToSkills = newVal;

  // If reducing, clamp any generic bonuses that exceed the new pool
  if (delta < 0) {
    clampGenericBonuses();
  }

  updateIP();
  updateAllCategoryDisplays();
}

function clampGenericBonuses() {
  let poolRemaining = getGenericPoolTotal();
  for (const key of Object.keys(state.genericSkillBonuses)) {
    const val = state.genericSkillBonuses[key] || 0;
    const clamped = Math.min(val, Math.max(0, poolRemaining));
    state.genericSkillBonuses[key] = clamped;
    poolRemaining -= clamped;
    // Update the input field if it exists
    const input = document.getElementById(`skill-bonus-${key}`);
    if (input) {
      const catBonusOnly = state.skillBonuses[key] || 0;
      input.value = catBonusOnly + clamped;
      // Update total display
      updateSkillTotalDisplay(key);
    }
  }
}

function updateSkillTotalDisplay(key) {
  const c = state.characteristics;
  // Find the skill definition
  for (const [catName, cat] of Object.entries(SKILL_CATEGORIES)) {
    for (const s of cat.skills) {
      if (s.entries) {
        for (let i = 0; i < s.entries; i++) {
          if (`${s.name}_${i}` === key) {
            const base = s.calc(c);
            const bonus = (state.skillBonuses[key] || 0) + (state.genericSkillBonuses[key] || 0);
            const totalEl = document.getElementById(`skill-total-${key}`);
            if (totalEl) totalEl.textContent = `${base + bonus}%`;
            return;
          }
        }
      } else if (s.name === key) {
        const base = s.calc(c);
        const bonus = (state.skillBonuses[key] || 0) + (state.genericSkillBonuses[key] || 0);
        const totalEl = document.getElementById(`skill-total-${key}`);
        if (totalEl) totalEl.textContent = `${base + bonus}%`;
        return;
      }
    }
  }
}

function updateAllCategoryDisplays() {
  Object.entries(SKILL_CATEGORIES).forEach(([catName, cat]) => {
    let totalSpent = 0;
    cat.skills.forEach(s => {
      if (s.entries) {
        for (let i = 0; i < s.entries; i++) {
          totalSpent += state.skillBonuses[`${s.name}_${i}`] || 0;
        }
      } else {
        totalSpent += state.skillBonuses[s.name] || 0;
      }
    });
    const remaining = cat.points - totalSpent;
    const badge = document.getElementById(`cat-points-${catName}`);
    if (badge) {
      badge.textContent = `${remaining} pts`;
      badge.className = 'skill-category-points' + (remaining < 0 ? ' negative' : '');
    }
  });
}

// ============ INITIALIZATION ============
document.addEventListener('DOMContentLoaded', () => {
  initTabs();
  renderCharacteristics();
  renderWeapons();
  renderArmor();
  renderIPConverter();
  renderSkills();
  renderEquipment();
  renderDisciplines();
  renderPowers();
  updateDerivedAttributes();
  bindGlobalEvents();
});

// ============ TAB NAVIGATION ============
function initTabs() {
  const tabNav = document.getElementById('tab-nav');
  tabNav.addEventListener('click', (e) => {
    const btn = e.target.closest('.tab-btn');
    if (!btn) return;

    const tabName = btn.dataset.tab;

    // Deactivate all tabs and panels
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));

    // Activate selected
    btn.classList.add('active');
    document.getElementById(`tab-${tabName}`).classList.add('active');
  });
}

// ============ CHARACTERISTICS ============
function renderCharacteristics() {
  const grid = document.getElementById('characteristics-grid');
  grid.innerHTML = '';
  CHARACTERISTICS.forEach(char => {
    const div = document.createElement('div');
    div.className = 'char-item';
    div.innerHTML = `
      <span class="char-label">${char}</span>
      <div class="char-controls">
        <button class="char-btn" data-char="${char}" data-dir="-1">−</button>
        <input type="number" class="char-value" id="char-${char}" value="${state.characteristics[char]}" 
               min="${CHAR_MIN_VALUES[char]}" max="${CHAR_MAX_VALUE}" data-char="${char}" />
        <button class="char-btn" data-char="${char}" data-dir="1">+</button>
      </div>
    `;
    grid.appendChild(div);
  });

  grid.addEventListener('click', (e) => {
    if (e.target.classList.contains('char-btn')) {
      const char = e.target.dataset.char;
      const dir = parseInt(e.target.dataset.dir);
      adjustCharacteristic(char, dir);
    }
  });

  grid.addEventListener('change', (e) => {
    if (e.target.classList.contains('char-value')) {
      const char = e.target.dataset.char;
      let val = parseInt(e.target.value) || CHAR_START_VALUE;
      val = Math.max(CHAR_MIN_VALUES[char], Math.min(CHAR_MAX_VALUE, val));
      state.characteristics[char] = val;
      e.target.value = val;
      updateDerivedAttributes();
      renderSkills();
    }
  });
}

function adjustCharacteristic(char, dir) {
  const newVal = state.characteristics[char] + dir;
  if (newVal < CHAR_MIN_VALUES[char] || newVal > CHAR_MAX_VALUE) return;
  if (dir > 0 && calculateRemainingPoints(state.characteristics) <= 0) return;
  state.characteristics[char] = newVal;
  document.getElementById(`char-${char}`).value = newVal;
  updateDerivedAttributes();
  renderSkills();
}

function updateDerivedAttributes() {
  const c = state.characteristics;
  const hp = calculateHP(c.CON, c.SIZ);
  const pp = calculatePP(c.POW);
  const dm = calculateDamageModifier(c.STR, c.SIZ);
  const armor = ARMOR_TYPES[state.armorIndex];
  const co = calculateCombatOrder(c.DEX, c.INT, armor.enc);
  const mw = calculateMajorWound(hp);
  const remaining = calculateRemainingPoints(c);

  // Update weapon damages whenever attributes change
  updateWeaponDamages(dm);

  document.getElementById('attr-hp').textContent = hp;
  document.getElementById('attr-pp').textContent = pp;
  document.getElementById('attr-dm').textContent = dm;
  document.getElementById('attr-co').textContent = co;
  document.getElementById('attr-mw').textContent = mw;

  const badge = document.getElementById('char-points-remaining');
  badge.textContent = `${remaining} pts`;
  badge.className = 'points-badge' + (remaining < 0 ? ' negative' : '');
}

// ============ WEAPONS ============
function getSkillTotal(skillName) {
  const el = document.getElementById(`skill-total-${skillName}`);
  if (!el) return '';
  return parseInt(el.textContent) || 0;
}

function syncWeaponSkills() {
  const ccTotal = getSkillTotal('Close Combat');
  const rcTotal = getSkillTotal('Ranged Combat');
  const uaTotal = getSkillTotal('Unarmed Combat');
  for (let i = 0; i < 4; i++) {
    const ccSel = document.getElementById(`cc-weapon-${i}`);
    if (ccSel && ccSel.value) {
      document.getElementById(`cc-skill-${i}`).value = ccTotal;
    }
    const rwSel = document.getElementById(`rw-weapon-${i}`);
    if (rwSel && rwSel.value) {
      document.getElementById(`rw-skill-${i}`).value = rcTotal;
    }
  }
  for (let i = 0; i < 3; i++) {
    const uaName = document.getElementById(`ua-name-${i}`);
    if (uaName && uaName.value.trim()) {
      document.getElementById(`ua-skill-${i}`).value = uaTotal;
    }
  }
}

function renderWeapons() {
  renderCloseCombatWeapons();
  renderRangedWeapons();
  renderUnarmedWeapons();
}

function renderCloseCombatWeapons() {
  const container = document.getElementById('close-combat-weapons');
  container.innerHTML = `
    <div class="weapon-row weapon-row-close weapon-header">
      <span>Weapon</span><span>Damage</span><span>ENC</span><span>Skill %</span>
    </div>
  `;
  for (let i = 0; i < 4; i++) {
    container.innerHTML += `
      <div class="weapon-row weapon-row-close">
        <div>
          <select class="weapon-select" id="cc-weapon-${i}" data-type="close" data-index="${i}">
            <option value="">— Select —</option>
            ${CLOSE_COMBAT_WEAPONS.map(w => `<option value="${w.name}" data-damage="${w.damage}" data-enc="${w.enc}">${w.name}</option>`).join('')}
          </select>
        </div>
        <div><input class="weapon-input" id="cc-damage-${i}" placeholder="—" readonly /></div>
        <div><input class="weapon-input" id="cc-enc-${i}" placeholder="—" readonly /></div>
        <div><input class="weapon-input" id="cc-skill-${i}" placeholder="%" type="number" min="0" max="200" /></div>
      </div>
    `;
  }

  container.querySelectorAll('.weapon-select').forEach(sel => {
    sel.addEventListener('change', (e) => {
      const idx = e.target.dataset.index;
      const opt = e.target.selectedOptions[0];
      const baseDamage = opt?.dataset.damage || '';

      const dm = calculateDamageModifier(state.characteristics.STR, state.characteristics.SIZ);
      const dmDisplay = (dm === '+0' || !baseDamage) ? '' : ` ${dm}`;

      document.getElementById(`cc-damage-${idx}`).value = baseDamage + dmDisplay;
      document.getElementById(`cc-enc-${idx}`).value = opt?.dataset.enc || '';
      // Pre-fill skill from Close Combat skill total
      const skill = getSkillTotal('Close Combat');
      if (e.target.value && skill) {
        document.getElementById(`cc-skill-${idx}`).value = skill;
      }
    });
  });
}

function renderRangedWeapons() {
  const container = document.getElementById('ranged-weapons');
  container.innerHTML = `
    <div class="weapon-row weapon-row-ranged weapon-header">
      <span>Weapon</span><span>Damage</span><span>Range</span><span>ENC</span><span>Ammo</span><span>Skill %</span>
    </div>
  `;
  for (let i = 0; i < 4; i++) {
    container.innerHTML += `
      <div class="weapon-row weapon-row-ranged">
        <div>
          <select class="weapon-select" id="rw-weapon-${i}" data-type="ranged" data-index="${i}">
            <option value="">— Select —</option>
            ${RANGED_WEAPONS.map(w => `<option value="${w.name}" data-damage="${w.damage}" data-range="${w.range}" data-enc="${w.enc}">${w.name}</option>`).join('')}
          </select>
        </div>
        <div><input class="weapon-input" id="rw-damage-${i}" placeholder="—" readonly /></div>
        <div><input class="weapon-input" id="rw-range-${i}" placeholder="—" readonly /></div>
        <div><input class="weapon-input" id="rw-enc-${i}" placeholder="—" readonly /></div>
        <div><input class="weapon-input" id="rw-ammo-${i}" placeholder="0" type="number" min="0" /></div>
        <div><input class="weapon-input" id="rw-skill-${i}" placeholder="%" type="number" min="0" max="200" /></div>
      </div>
    `;
  }

  container.querySelectorAll('.weapon-select').forEach(sel => {
    sel.addEventListener('change', (e) => {
      const idx = e.target.dataset.index;
      const opt = e.target.selectedOptions[0];
      const baseDamage = opt?.dataset.damage || '';
      const name = opt?.value || '';

      // Crossbows do not get DM
      let dmDisplay = '';
      if (baseDamage && !name.includes('Crossbow')) {
        const dm = calculateDamageModifier(state.characteristics.STR, state.characteristics.SIZ);
        if (dm !== '+0') dmDisplay = ` ${dm}`;
      }

      document.getElementById(`rw-damage-${idx}`).value = baseDamage + dmDisplay;
      document.getElementById(`rw-range-${idx}`).value = opt?.dataset.range || '';
      document.getElementById(`rw-enc-${idx}`).value = opt?.dataset.enc || '';
      // Pre-fill skill from Ranged Combat skill total
      const skill = getSkillTotal('Ranged Combat');
      if (e.target.value && skill) {
        document.getElementById(`rw-skill-${idx}`).value = skill;
      }
    });
  });
}

function renderUnarmedWeapons() {
  const container = document.getElementById('unarmed-weapons');
  const unarmedNames = ['Fist/Kick', '', ''];
  container.innerHTML = `
    <div class="weapon-row weapon-row-unarmed weapon-header">
      <span>Attack</span><span>Damage</span><span>ENC</span><span>Skill %</span>
    </div>
  `;
  for (let i = 0; i < 3; i++) {
    container.innerHTML += `
      <div class="weapon-row weapon-row-unarmed">
        <div><input class="weapon-input" id="ua-name-${i}" value="${unarmedNames[i]}" placeholder="Attack type..." /></div>
        <div><input class="weapon-input" id="ua-damage-${i}" value="${i === 0 ? '1D3' : ''}" placeholder="—" /></div>
        <div><input class="weapon-input" id="ua-enc-${i}" value="0" placeholder="—" /></div>
        <div><input class="weapon-input" id="ua-skill-${i}" placeholder="%" type="number" min="0" max="200" /></div>
      </div>
    `;
  }
}

// ============ ARMOR ============
function renderArmor() {
  const select = document.getElementById('armor-select');
  select.innerHTML = ARMOR_TYPES.map((a, i) =>
    `<option value="${i}">${a.name} (AP: ${a.ap}, ENC: ${a.enc})</option>`
  ).join('');
  select.addEventListener('change', (e) => {
    state.armorIndex = parseInt(e.target.value);
    updateArmorDisplay();
    updateDerivedAttributes();
  });
  updateArmorDisplay();
}

function updateArmorDisplay() {
  const armor = ARMOR_TYPES[state.armorIndex];
  document.getElementById('armor-type-display').textContent = armor.name;
  document.getElementById('armor-ap-display').textContent = `AP: ${armor.ap}`;
  document.getElementById('armor-enc-display').textContent = `ENC: ${armor.enc}`;
}

// ============ IP CONVERTER ============
function renderIPConverter() {
  const wrapper = document.getElementById('ip-converter');
  if (!wrapper) return;
  wrapper.innerHTML = `
    <div class="ip-converter-row">
      <span class="ip-converter-label">Convert IP → Skill Points <small>(1 IP = 5 SP)</small></span>
      <div class="ip-converter-controls">
        <button class="char-btn" id="ip-convert-minus" disabled>−</button>
        <span class="ip-converter-value"><span id="ip-converted-count">0</span> IP → <span id="ip-bonus-sp">0</span> SP</span>
        <button class="char-btn" id="ip-convert-plus">+</button>
      </div>
    </div>
    <div class="ip-converter-pool">
      <span>Bonus Pool Remaining:</span>
      <span class="skill-category-points" id="generic-pool-remaining">0 pts</span>
    </div>
  `;

  document.getElementById('ip-convert-plus').addEventListener('click', () => convertIPToSkills(1));
  document.getElementById('ip-convert-minus').addEventListener('click', () => convertIPToSkills(-1));
  updateConverterDisplay();
}

// ============ SKILLS ============
function renderSkills() {
  const container = document.getElementById('skills-container');
  container.innerHTML = '';
  const c = state.characteristics;

  Object.entries(SKILL_CATEGORIES).forEach(([catName, cat]) => {
    const catDiv = document.createElement('div');
    catDiv.className = 'skill-category';

    let totalSpent = 0;
    const skillHTML = [];

    cat.skills.forEach(skill => {
      const hasEntries = skill.entries && skill.entries > 0;

      if (hasEntries) {
        for (let e = 0; e < skill.entries; e++) {
          const key = `${skill.name}_${e}`;
          const base = skill.calc(c);
          const catBonus = state.skillBonuses[key] || 0;
          const genBonus = state.genericSkillBonuses[key] || 0;
          totalSpent += catBonus;
          const total = base + catBonus + genBonus;

          skillHTML.push(`
            <div class="skill-row">
              <span class="skill-name">${skill.entryLabel || skill.name}:
                <input type="text" class="skill-name-input" id="skill-entry-${key}" 
                       placeholder="specify..." data-key="${key}" />
              </span>
              <span class="skill-base">${base}%</span>
              <input type="number" class="skill-bonus-input" id="skill-bonus-${key}" 
                     value="${catBonus + genBonus}" min="0" max="30" data-key="${key}" data-cat="${catName}" />
              <span class="skill-total" id="skill-total-${key}">${total}%</span>
            </div>
          `);
        }
      } else {
        const key = skill.name;
        const base = skill.calc(c);
        const catBonus = state.skillBonuses[key] || 0;
        const genBonus = state.genericSkillBonuses[key] || 0;
        totalSpent += catBonus;
        const total = base + catBonus + genBonus;

        skillHTML.push(`
          <div class="skill-row">
            <span class="skill-name">${skill.name}</span>
            <span class="skill-base">${base}%</span>
            <input type="number" class="skill-bonus-input" id="skill-bonus-${key}" 
                   value="${catBonus + genBonus}" min="0" max="30" data-key="${key}" data-cat="${catName}" />
            <span class="skill-total" id="skill-total-${key}">${total}%</span>
          </div>
        `);
      }
    });

    const remaining = cat.points - totalSpent;
    const negClass = remaining < 0 ? ' negative' : '';

    catDiv.innerHTML = `
      <div class="skill-category-header">
        <h3>${catName}</h3>
        <span class="skill-category-points${negClass}" id="cat-points-${catName}">${remaining} pts</span>
      </div>
      ${skillHTML.join('')}
    `;

    container.appendChild(catDiv);
  });

  // Bind skill bonus change events
  container.querySelectorAll('.skill-bonus-input').forEach(input => {
    input.addEventListener('change', onSkillBonusChange);
    input.addEventListener('input', onSkillBonusChange);
  });

  updateConverterDisplay();
}

function onSkillBonusChange(e) {
  const key = e.target.dataset.key;
  const catName = e.target.dataset.cat;
  let val = Math.max(0, Math.min(30, parseInt(e.target.value) || 0));

  // Calculate how much the category has spent EXCLUDING this skill
  const cat = SKILL_CATEGORIES[catName];
  let otherCatSpent = 0;
  cat.skills.forEach(s => {
    if (s.entries) {
      for (let i = 0; i < s.entries; i++) {
        const k = `${s.name}_${i}`;
        if (k !== key) otherCatSpent += state.skillBonuses[k] || 0;
      }
    } else {
      if (s.name !== key) otherCatSpent += state.skillBonuses[s.name] || 0;
    }
  });

  // First, use category pool; overflow goes to generic pool
  const catPoolAvailable = Math.max(0, cat.points - otherCatSpent);
  const genericPoolAvail = getGenericPoolRemaining() + (state.genericSkillBonuses[key] || 0);
  const maxAllowed = Math.min(30, catPoolAvailable + genericPoolAvail);
  val = Math.max(0, Math.min(val, maxAllowed));

  // Split val into category portion and generic portion
  const catPortion = Math.min(val, catPoolAvailable);
  const genPortion = val - catPortion;

  state.skillBonuses[key] = catPortion;
  state.genericSkillBonuses[key] = genPortion;
  e.target.value = val;

  // Update total for this skill
  const c = state.characteristics;
  let skillDef = null;

  // Find the skill definition
  for (const s of cat.skills) {
    if (s.entries) {
      for (let i = 0; i < s.entries; i++) {
        if (`${s.name}_${i}` === key) { skillDef = s; break; }
      }
    } else {
      if (s.name === key) { skillDef = s; break; }
    }
    if (skillDef) break;
  }

  if (skillDef) {
    const base = skillDef.calc(c);
    const total = base + val;
    const totalEl = document.getElementById(`skill-total-${key}`);
    if (totalEl) totalEl.textContent = `${total}%`;
  }

  // Recalculate category points
  let totalSpent = 0;
  cat.skills.forEach(s => {
    if (s.entries) {
      for (let i = 0; i < s.entries; i++) {
        totalSpent += state.skillBonuses[`${s.name}_${i}`] || 0;
      }
    } else {
      totalSpent += state.skillBonuses[s.name] || 0;
    }
  });

  const remaining = cat.points - totalSpent;
  const badge = document.getElementById(`cat-points-${catName}`);
  if (badge) {
    badge.textContent = `${remaining} pts`;
    badge.className = 'skill-category-points' + (remaining < 0 ? ' negative' : '');
  }

  // Update generic pool display
  updateConverterDisplay();

  // If combat skill changed, sync weapon skill% fields
  if (catName === 'Combat') {
    syncWeaponSkills();
  }
}

// ============ EQUIPMENT ============
function renderEquipment() {
  const container = document.getElementById('equipment-list');
  container.innerHTML = '';

  for (let i = 0; i < 20; i++) {
    const row = document.createElement('div');
    row.className = 'equipment-row';
    row.innerHTML = `
      <div class="equipment-search-wrapper">
        <input type="text" class="equipment-search-input" id="equip-name-${i}" 
               placeholder="Search or type item..." data-index="${i}" autocomplete="off" />
        <div class="equipment-dropdown" id="equip-dd-${i}"></div>
      </div>
      <input type="number" class="equipment-enc" id="equip-enc-${i}" placeholder="ENC" min="0" />
    `;
    container.appendChild(row);
  }

  // Bind search/dropdown events
  container.querySelectorAll('.equipment-search-input').forEach(input => {
    input.addEventListener('input', onEquipmentSearch);
    input.addEventListener('focus', onEquipmentSearch);
    input.addEventListener('blur', (e) => {
      setTimeout(() => {
        const dd = document.getElementById(`equip-dd-${e.target.dataset.index}`);
        if (dd) dd.classList.remove('active');
      }, 200);
    });
  });

  // Add total encumbrance row
  const totalRow = document.createElement('div');
  totalRow.className = 'equipment-total-row';
  totalRow.innerHTML = `
    <span class="equipment-total-label">Total Encumbrance:</span>
    <span class="equipment-total-value" id="total-enc">0</span>
  `;
  container.appendChild(totalRow);

  // Bind ENC change events
  container.querySelectorAll('.equipment-enc').forEach(input => {
    input.addEventListener('change', updateTotalEnc);
    input.addEventListener('input', updateTotalEnc);
  });
}

function updateTotalEnc() {
  let total = 0;
  for (let i = 0; i < 20; i++) {
    const el = document.getElementById(`equip-enc-${i}`);
    if (el) total += parseInt(el.value) || 0;
  }
  const display = document.getElementById('total-enc');
  if (display) display.textContent = total;
}

function onEquipmentSearch(e) {
  const idx = e.target.dataset.index;
  const query = e.target.value.toLowerCase();
  const dd = document.getElementById(`equip-dd-${idx}`);

  const filtered = EQUIPMENT_LIST.filter(item =>
    item.name.toLowerCase().includes(query)
  );

  if (filtered.length === 0 || (query === '' && filtered.length === EQUIPMENT_LIST.length)) {
    dd.innerHTML = EQUIPMENT_LIST.map(item =>
      `<div class="equipment-dropdown-item" data-name="${item.name}" data-enc="${item.enc}">${item.name} (ENC: ${item.enc})</div>`
    ).join('');
  } else {
    dd.innerHTML = filtered.map(item =>
      `<div class="equipment-dropdown-item" data-name="${item.name}" data-enc="${item.enc}">${item.name} (ENC: ${item.enc})</div>`
    ).join('');
  }
  dd.classList.add('active');

  dd.querySelectorAll('.equipment-dropdown-item').forEach(item => {
    item.addEventListener('mousedown', () => {
      e.target.value = item.dataset.name;
      document.getElementById(`equip-enc-${idx}`).value = item.dataset.enc;
      dd.classList.remove('active');
      updateTotalEnc();
    });
  });
}

// ============ DISCIPLINES ============
function renderDisciplines() {
  const container = document.getElementById('disciplines-list');
  container.innerHTML = '';
  for (let i = 0; i < 3; i++) {
    const row = document.createElement('div');
    row.className = 'discipline-row';
    row.innerHTML = `
      <select class="select-ornate" id="disc-select-${i}" data-index="${i}">
        <option value="">— None —</option>
        ${DISCIPLINES.map(d => `<option value="${d.name}" data-cost="${d.cost}">${d.name}</option>`).join('')}
      </select>
      <span class="discipline-cost" id="disc-cost-${i}">0 IP</span>
    `;
    container.appendChild(row);
  }

  container.querySelectorAll('.select-ornate').forEach(sel => {
    sel.addEventListener('change', (e) => {
      const idx = e.target.dataset.index;
      const opt = e.target.selectedOptions[0];
      const cost = opt?.dataset.cost || '0';
      document.getElementById(`disc-cost-${idx}`).textContent = `${cost} IP`;
      const oldDisc = state.disciplineSelections[idx];
      state.disciplineSelections[idx] = e.target.value;

      // If a discipline was removed, clear any powers that belonged to it
      if (oldDisc && oldDisc !== e.target.value) {
        const stillActive = state.disciplineSelections.filter(d => d);
        // Only clear if no other slot still has this discipline
        if (!stillActive.includes(oldDisc)) {
          for (let p = 0; p < 20; p++) {
            const discEl = document.getElementById(`power-disc-${p}`);
            if (discEl && discEl.value === oldDisc) {
              document.getElementById(`power-name-${p}`).value = '';
              document.getElementById(`power-mag-${p}`).value = '';
              document.getElementById(`power-disc-${p}`).value = '';
              document.getElementById(`power-desc-${p}`).value = '';
            }
          }
        }
      }

      updateIP();
    });
  });
}

// ============ POWERS ============
function renderPowers() {
  const container = document.getElementById('powers-list');
  container.innerHTML = '';
  for (let i = 0; i < 20; i++) {
    const row = document.createElement('div');
    row.className = 'power-row';
    row.innerHTML = `
      <div class="power-row-top">
        <div class="power-search-wrapper">
          <label>Name</label>
          <input type="text" class="power-input power-name-search" id="power-name-${i}" 
                 placeholder="Search power..." data-index="${i}" autocomplete="off" />
          <div class="power-dropdown" id="power-dd-${i}"></div>
        </div>
        <div>
          <label>Mag</label>
          <input type="number" class="power-input" id="power-mag-${i}" placeholder="—" min="0" />
        </div>
        <div>
          <label>Discipline</label>
          <input type="text" class="power-input" id="power-disc-${i}" placeholder="—" readonly />
        </div>
        <div>
          <label>Description</label>
          <input type="text" class="power-input" id="power-desc-${i}" placeholder="—" readonly />
        </div>
      </div>
    `;
    container.appendChild(row);
  }

  // Bind power search events  
  container.querySelectorAll('.power-name-search').forEach(input => {
    input.addEventListener('input', onPowerSearch);
    input.addEventListener('focus', onPowerSearch);
    input.addEventListener('blur', (e) => {
      setTimeout(() => {
        const dd = document.getElementById(`power-dd-${e.target.dataset.index}`);
        if (dd) dd.classList.remove('active');
      }, 200);
      updateIP();
    });
  });

  // Bind magnitude change events for IP tracking
  container.querySelectorAll('input[id^="power-mag-"]').forEach(input => {
    input.addEventListener('change', updateIP);
    input.addEventListener('input', updateIP);
  });
}

// Update all weapon damage fields when DM changes (STR/SIZ change)
function updateWeaponDamages(dm) {
  const dmDisplay = (dm === '+0') ? '' : ` ${dm}`;

  // Close Combat
  for (let i = 0; i < 4; i++) {
    const sel = document.getElementById(`cc-weapon-${i}`);
    if (sel && sel.selectedIndex > 0) {
      const opt = sel.selectedOptions[0];
      const base = opt.dataset.damage || '';
      if (base) {
        document.getElementById(`cc-damage-${i}`).value = base + dmDisplay;
      }
    }
  }

  // Ranged Weapons (Crossbows excluded)
  for (let i = 0; i < 4; i++) {
    const sel = document.getElementById(`rw-weapon-${i}`);
    if (sel && sel.selectedIndex > 0) {
      const opt = sel.selectedOptions[0];
      const base = opt.dataset.damage || '';
      const name = opt.value || '';
      if (base) {
        let suffix = '';
        if (!name.includes('Crossbow')) {
          suffix = dmDisplay;
        }
        document.getElementById(`rw-damage-${i}`).value = base + suffix;
      }
    }
  }

  // Unarmed Combat
  for (let i = 0; i < 3; i++) {
    const nameEl = document.getElementById(`ua-name-${i}`);
    const damageEl = document.getElementById(`ua-damage-${i}`);
    if (nameEl && damageEl) {
      // Logic: Fist/Kick usually 1D3 + DM. 
      // If the field is manually edited we might rely on a 'base' data attribute, 
      // but simple text inputs don't store base damage easily unless we add it.
      // For now, if it's the default "Fist/Kick", we reset it.
      if (nameEl.value === 'Fist/Kick') {
        damageEl.value = '1D3' + dmDisplay;
      } else if (nameEl.value.trim() !== '') {
        // If user typed something else, we append DM if it looks like a damage die? 
        // Safest to just append DM if it's not empty, or leave it to user?
        // The prompt specifically asks to update DM to unarmed entries.
        // Let's assume we append DM to whatever is there, but that's risky if we keep appending.
        // Better approach: Unarmed inputs don't have a structured "base". 
        // We will ONLY auto-update "Fist/Kick" slot (index 0) or slots that explicitly say "Fist/Kick".
        // Or we can try to strip existing DM and re-append. 
        // Given the simplicity, let's target index 0 if it is Fist/Kick.
      }

      // Actually, looking at `renderUnarmedWeapons`, index 0 starts as 'Fist/Kick' with value '1D3'.
      // We should update that one.
      if (i === 0 && nameEl.value === 'Fist/Kick') {
        damageEl.value = '1D3' + dmDisplay;
      }
    }
  }
}

function onPowerSearch(e) {
  const idx = e.target.dataset.index;
  const query = e.target.value.toLowerCase();
  const dd = document.getElementById(`power-dd-${idx}`);

  // Filter by acquired disciplines — show nothing if none selected
  const activeDisciplines = state.disciplineSelections.filter(d => d);
  let available = [];
  if (activeDisciplines.length > 0) {
    available = ALL_POWERS.filter(p => activeDisciplines.includes(p.discipline));
  }

  const filtered = available.filter(p => p.name.toLowerCase().includes(query));

  // Build dropdown with None option at top
  let ddHTML = `<div class="power-dropdown-item power-dropdown-none" data-name="" data-mag="" data-disc="" data-desc="">
    — None —
  </div>`;
  ddHTML += filtered.map(p =>
    `<div class="power-dropdown-item" data-name="${p.name}" data-mag="${p.magnitude}" data-disc="${p.discipline}" data-desc="${p.description}">
      ${p.name} <small>${p.discipline} (Mag: ${p.magnitude})</small>
    </div>`
  ).join('');

  dd.innerHTML = ddHTML;
  dd.classList.add('active');

  dd.querySelectorAll('.power-dropdown-item').forEach(item => {
    item.addEventListener('mousedown', () => {
      e.target.value = item.dataset.name;
      document.getElementById(`power-mag-${idx}`).value = item.dataset.mag;
      document.getElementById(`power-disc-${idx}`).value = item.dataset.disc;
      document.getElementById(`power-desc-${idx}`).value = item.dataset.desc;
      dd.classList.remove('active');
      updateIP();
    });
  });
}

// ============ PORTRAIT & GLOBAL EVENTS ============
function bindGlobalEvents() {
  // Portrait upload
  const portraitPlaceholder = document.getElementById('portrait-placeholder');
  const portraitUpload = document.getElementById('portrait-upload');
  const portraitImg = document.getElementById('portrait-img');
  const portraitText = document.querySelector('.portrait-text');

  portraitPlaceholder.addEventListener('click', () => portraitUpload.click());
  portraitUpload.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        portraitImg.src = ev.target.result;
        portraitImg.style.display = 'block';
        portraitText.style.display = 'none';
      };
      reader.readAsDataURL(file);
    }
  });

  // Reset button
  document.getElementById('btn-reset').addEventListener('click', () => {
    if (confirm('Are you sure you want to reset all fields? This cannot be undone.')) {
      location.reload();
    }
  });

  // Export PDF
  document.getElementById('btn-export-pdf').addEventListener('click', () => {
    exportPDF();
  });
}

// ============ PDF EXPORT (Continuous flow, skip empties) ============
async function exportPDF() {
  const { jsPDF } = await import('jspdf');
  const doc = new jsPDF({ unit: 'mm', format: 'a4' });
  const pageW = 210;
  const pageH = 297;
  const margin = 15;
  const contentW = pageW - margin * 2;
  let y = margin;

  // Colors
  const gold = [201, 169, 92];
  const dark = [30, 30, 48];
  const parchment = [245, 230, 200];
  const textDark = [42, 34, 24];
  const textGold = [180, 150, 70];

  function checkPage(needed) {
    if (y + needed > pageH - margin) {
      doc.addPage();
      doc.setFillColor(...parchment);
      doc.rect(0, 0, pageW, pageH, 'F');
      drawPageBorder();
      y = margin;
    }
  }

  function drawPageBorder() {
    doc.setDrawColor(...gold);
    doc.setLineWidth(0.5);
    doc.rect(8, 8, pageW - 16, pageH - 16);
    doc.setLineWidth(0.2);
    doc.rect(10, 10, pageW - 20, pageH - 20);
  }

  function sectionHeader(title) {
    checkPage(15);
    doc.setFillColor(...gold);
    doc.rect(margin, y, contentW, 8, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.setTextColor(42, 34, 24);
    doc.text(title.toUpperCase(), margin + 3, y + 5.5);
    y += 12;
  }

  function labelValue(label, value, x, row) {
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(120, 100, 80);
    doc.text(label, x, row);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(...textDark);
    doc.text(String(value || '—'), x, row + 4);
  }

  function drawLine() {
    doc.setDrawColor(200, 185, 160);
    doc.setLineWidth(0.2);
    doc.line(margin, y, pageW - margin, y);
    y += 2;
  }

  // Helper: get value from an input, return empty string if empty
  function getVal(id) {
    const el = document.getElementById(id);
    return el ? (el.value || '').trim() : '';
  }

  // ===== FIRST PAGE: Title + Content (no separate cover) =====
  doc.setFillColor(...parchment);
  doc.rect(0, 0, pageW, pageH, 'F');
  drawPageBorder();

  // Title header
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(20);
  doc.setTextColor(...gold);
  doc.text('FANTASY CRUX', pageW / 2, margin + 5, { align: 'center' });

  const charName = getVal('char-name') || 'Unnamed Character';
  doc.setFontSize(14);
  doc.setTextColor(80, 60, 40);
  doc.text(charName, pageW / 2, margin + 14, { align: 'center' });

  // Portrait - detect if available (draw later beside description)
  const portraitImg = document.getElementById('portrait-img');
  const hasPortrait = portraitImg.style.display !== 'none' && portraitImg.src;

  y = margin + 22;

  // --- Character Description ---
  sectionHeader('Character Description');

  // Draw portrait to the right of the description section
  const portraitW = 40;
  const portraitH = 53;
  const portraitX = pageW - margin - portraitW;
  const portraitY = y;
  if (hasPortrait) {
    try {
      // Detect image format from data URL
      let imgFormat = 'JPEG';
      if (portraitImg.src.startsWith('data:image/png')) imgFormat = 'PNG';
      else if (portraitImg.src.startsWith('data:image/webp')) imgFormat = 'WEBP';
      doc.setDrawColor(...gold);
      doc.setLineWidth(0.5);
      doc.rect(portraitX, portraitY, portraitW, portraitH);
      doc.addImage(portraitImg.src, imgFormat, portraitX + 1, portraitY + 1, portraitW - 2, portraitH - 2);
    } catch (err) {
      console.error('Portrait PDF error:', err);
    }
  }

  const descFields = [
    ['Name', 'char-name'], ['Concept', 'char-concept'],
    ['Short-Term Goal', 'char-short-goal'], ['Long-Term Goal', 'char-long-goal'],
    ['Age', 'char-age'], ['Gender', 'char-gender']
  ];

  // Constrain text width if portrait is present
  const descMaxW = hasPortrait ? portraitX - 5 - margin : contentW;

  descFields.forEach(([label, id]) => {
    const val = getVal(id);
    if (val) {
      checkPage(10);
      // Label
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8);
      doc.setTextColor(120, 100, 80);
      doc.text(label, margin, y);
      // Value — wrap within available width
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(10);
      doc.setTextColor(...textDark);
      const valLines = doc.splitTextToSize(String(val || '—'), descMaxW);
      valLines.forEach((line, li) => {
        doc.text(line, margin, y + 4 + (li * 4));
      });
      y += 4 + (valLines.length * 4) + 2;
    }
  });
  // Ensure y clears the portrait if it extends below the description text
  if (hasPortrait && y < portraitY + portraitH + 2) {
    y = portraitY + portraitH + 2;
  }
  y += 4;

  // --- Characteristics ---
  sectionHeader('Characteristics');
  const charW = contentW / 7;
  CHARACTERISTICS.forEach((ch, i) => {
    const x = margin + i * charW;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(...textGold);
    doc.text(ch, x + charW / 2, y, { align: 'center' });
    doc.setFontSize(14);
    doc.setTextColor(...textDark);
    doc.text(String(state.characteristics[ch]), x + charW / 2, y + 7, { align: 'center' });
  });
  y += 14;
  drawLine();

  // --- Derived Attributes ---
  sectionHeader('Attributes');
  const attrs = [
    ['Hit Points', document.getElementById('attr-hp').textContent],
    ['Power Points', document.getElementById('attr-pp').textContent],
    ['Damage Mod', document.getElementById('attr-dm').textContent],
    ['Combat Order', document.getElementById('attr-co').textContent],
    ['Major Wound', document.getElementById('attr-mw').textContent],
    ['Movement', getVal('movement-rate') + 'm']
  ];
  const attrW = contentW / 6;
  attrs.forEach((a, i) => {
    labelValue(a[0], a[1], margin + i * attrW, y);
  });
  y += 14;

  // Hero Points, IP
  const heroPoints = getVal('hero-points');
  const ipRemaining = document.getElementById('ip-display')?.textContent || '';
  const specials = [
    ['Hero Points', heroPoints],
    ['Improvement Pts', ipRemaining]
  ];
  const nonEmpty = specials.filter(s => s[1]);
  if (nonEmpty.length > 0) {
    const specW = contentW / nonEmpty.length;
    nonEmpty.forEach((s, i) => {
      labelValue(s[0], s[1], margin + i * specW, y);
    });
    y += 10;
  }

  // Fatigue
  const fatigued = document.getElementById('fatigued').checked;
  const exhausted = document.getElementById('exhausted').checked;
  if (fatigued || exhausted) {
    checkPage(8);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(...textDark);
    doc.text(`Fatigue: ${fatigued ? '☑ Fatigued' : '☐ Fatigued'}  ${exhausted ? '☑ Exhausted' : '☐ Exhausted'}`, margin, y);
    y += 8;
  }
  y += 4;

  // --- Close Combat Weapons ---
  const ccWeapons = [];
  for (let i = 0; i < 4; i++) {
    const name = getVal(`cc-weapon-${i}`);
    if (name) {
      ccWeapons.push({
        name,
        damage: getVal(`cc-damage-${i}`),
        enc: getVal(`cc-enc-${i}`),
        skill: getVal(`cc-skill-${i}`)
      });
    }
  }
  if (ccWeapons.length > 0) {
    sectionHeader('Close Combat Weapons');
    checkPage(8);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(120, 100, 80);
    ['Weapon', 'Damage', 'ENC', 'Skill %'].forEach((h, i) => {
      doc.text(h, margin + [0, 60, 100, 125][i], y);
    });
    y += 5;
    drawLine();

    ccWeapons.forEach(w => {
      checkPage(7);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9);
      doc.setTextColor(...textDark);
      doc.text(w.name, margin, y);
      doc.text(w.damage || '—', margin + 60, y);
      doc.text(w.enc || '—', margin + 100, y);
      doc.text(w.skill ? `${w.skill}%` : '—', margin + 125, y);
      y += 6;
    });
    y += 4;
  }

  // --- Ranged Weapons ---
  const rwWeapons = [];
  for (let i = 0; i < 4; i++) {
    const name = getVal(`rw-weapon-${i}`);
    if (name) {
      rwWeapons.push({
        name,
        damage: getVal(`rw-damage-${i}`),
        range: getVal(`rw-range-${i}`),
        enc: getVal(`rw-enc-${i}`),
        ammo: getVal(`rw-ammo-${i}`),
        skill: getVal(`rw-skill-${i}`)
      });
    }
  }
  if (rwWeapons.length > 0) {
    sectionHeader('Ranged Weapons');
    checkPage(8);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(120, 100, 80);
    ['Weapon', 'Damage', 'Range', 'ENC', 'Ammo', 'Skill %'].forEach((h, i) => {
      doc.text(h, margin + [0, 50, 80, 105, 125, 150][i], y);
    });
    y += 5;
    drawLine();

    rwWeapons.forEach(w => {
      checkPage(7);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9);
      doc.setTextColor(...textDark);
      doc.text(w.name, margin, y);
      doc.text(w.damage || '—', margin + 50, y);
      doc.text(w.range || '—', margin + 80, y);
      doc.text(w.enc || '—', margin + 105, y);
      doc.text(w.ammo || '—', margin + 125, y);
      doc.text(w.skill ? `${w.skill}%` : '—', margin + 150, y);
      y += 6;
    });
    y += 4;
  }

  // --- Unarmed Combat ---
  const uaWeapons = [];
  for (let i = 0; i < 3; i++) {
    const name = getVal(`ua-name-${i}`);
    if (name) {
      uaWeapons.push({
        name,
        damage: getVal(`ua-damage-${i}`),
        enc: getVal(`ua-enc-${i}`),
        skill: getVal(`ua-skill-${i}`)
      });
    }
  }
  if (uaWeapons.length > 0) {
    sectionHeader('Unarmed Combat');
    checkPage(8);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(120, 100, 80);
    ['Attack', 'Damage', 'ENC', 'Skill %'].forEach((h, i) => {
      doc.text(h, margin + [0, 60, 100, 125][i], y);
    });
    y += 5;
    drawLine();

    uaWeapons.forEach(w => {
      checkPage(7);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9);
      doc.setTextColor(...textDark);
      doc.text(w.name, margin, y);
      doc.text(w.damage || '—', margin + 60, y);
      doc.text(w.enc || '—', margin + 100, y);
      doc.text(w.skill ? `${w.skill}%` : '—', margin + 125, y);
      y += 6;
    });
    y += 4;
  }

  // --- Armor ---
  const armor = ARMOR_TYPES[state.armorIndex];
  if (armor && armor.name !== 'None') {
    sectionHeader('Armor');
    checkPage(10);
    const armorW = contentW / 3;
    labelValue('Type', armor.name, margin, y);
    labelValue('AP', String(armor.ap), margin + armorW, y);
    labelValue('ENC', String(armor.enc), margin + armorW * 2, y);
    y += 14;
  }

  // --- Skills ---
  const c = state.characteristics;

  // Always show skills section with base values
  sectionHeader('Skills');
  Object.entries(SKILL_CATEGORIES).forEach(([catName, cat]) => {
    // Pre-calculate how many lines this category will have
    let lineCount = 0;
    cat.skills.forEach(skill => {
      if (skill.entries) {
        for (let e = 0; e < skill.entries; e++) {
          const key = `${skill.name}_${e}`;
          const bonus = (state.skillBonuses[key] || 0) + (state.genericSkillBonuses[key] || 0);
          const entryName = document.getElementById(`skill-entry-${key}`)?.value || '';
          if (entryName || bonus > 0) lineCount++;
        }
      } else {
        lineCount++;
      }
    });

    // Estimated height: sub-header(5) + header row(4) + line(1) + lines(5 each) + spacing(3)
    const estimatedHeight = 5 + 4 + 1 + (lineCount * 5) + 3;
    // If category fits on page, keep together; otherwise start new page
    checkPage(Math.min(estimatedHeight, pageH - margin * 2));

    // Category sub-header
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(...textGold);
    doc.text(catName, margin, y);
    y += 5;

    // Skill header row
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7);
    doc.setTextColor(120, 100, 80);
    doc.text('Skill', margin, y);
    doc.text('Base', margin + 80, y);
    doc.text('Bonus', margin + 100, y);
    doc.text('Total', margin + 120, y);
    y += 4;
    drawLine();

    cat.skills.forEach(skill => {
      if (skill.entries) {
        for (let e = 0; e < skill.entries; e++) {
          const key = `${skill.name}_${e}`;
          const base = skill.calc(c);
          const bonus = (state.skillBonuses[key] || 0) + (state.genericSkillBonuses[key] || 0);
          const total = base + bonus;
          const entryName = document.getElementById(`skill-entry-${key}`)?.value || '';
          const displayName = entryName ? `${skill.entryLabel || skill.name}: ${entryName}` : `${skill.entryLabel || skill.name}`;

          // Skip entries with no name and no bonus
          if (!entryName && bonus === 0) return;

          checkPage(6);
          doc.setFont('helvetica', 'normal');
          doc.setFontSize(8);
          doc.setTextColor(...textDark);
          doc.text(displayName, margin, y);
          doc.text(`${base}%`, margin + 80, y);
          doc.text(`+${bonus}`, margin + 100, y);
          doc.setFont('helvetica', 'bold');
          doc.text(`${total}%`, margin + 120, y);
          y += 5;
        }
      } else {
        const base = skill.calc(c);
        const bonus = (state.skillBonuses[skill.name] || 0) + (state.genericSkillBonuses[skill.name] || 0);
        const total = base + bonus;

        checkPage(6);
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(8);
        doc.setTextColor(...textDark);
        doc.text(skill.name, margin, y);
        doc.text(`${base}%`, margin + 80, y);
        doc.text(`+${bonus}`, margin + 100, y);
        doc.setFont('helvetica', 'bold');
        doc.text(`${total}%`, margin + 120, y);
        y += 5;
      }
    });
    y += 3;
  });
  y += 4;

  // --- Equipment ---
  const equipItems = [];
  for (let i = 0; i < 20; i++) {
    const name = getVal(`equip-name-${i}`);
    if (name) {
      equipItems.push({ name, enc: getVal(`equip-enc-${i}`) });
    }
  }
  if (equipItems.length > 0) {
    sectionHeader('Equipment');
    checkPage(8);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(120, 100, 80);
    doc.text('Item', margin, y);
    doc.text('ENC', margin + 120, y);
    y += 4;
    drawLine();

    equipItems.forEach(item => {
      checkPage(6);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9);
      doc.setTextColor(...textDark);
      doc.text(item.name, margin, y);
      doc.text(item.enc || '—', margin + 120, y);
      y += 5;
    });
    y += 4;
  }

  // --- Disciplines ---
  const discEntries = [];
  for (let i = 0; i < 3; i++) {
    const name = state.disciplineSelections[i];
    if (name) {
      const cost = document.getElementById(`disc-cost-${i}`)?.textContent || '';
      discEntries.push({ name, cost });
    }
  }
  if (discEntries.length > 0) {
    sectionHeader('Disciplines');
    discEntries.forEach(d => {
      checkPage(7);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(10);
      doc.setTextColor(...textDark);
      doc.text(`${d.name}  (${d.cost})`, margin, y);
      y += 6;
    });
    y += 4;
  }

  // --- Powers ---
  const powerEntries = [];
  for (let i = 0; i < 20; i++) {
    const name = getVal(`power-name-${i}`);
    if (name) {
      powerEntries.push({
        name,
        mag: getVal(`power-mag-${i}`),
        disc: getVal(`power-disc-${i}`),
        desc: getVal(`power-desc-${i}`)
      });
    }
  }
  if (powerEntries.length > 0) {
    sectionHeader('Powers');
    checkPage(8);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(120, 100, 80);
    doc.text('Name', margin, y);
    doc.text('Mag', margin + 60, y);
    doc.text('Discipline', margin + 80, y);
    doc.text('Description', margin + 115, y);
    y += 4;
    drawLine();

    powerEntries.forEach(p => {
      checkPage(7);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8);
      doc.setTextColor(...textDark);
      doc.text(p.name, margin, y);
      doc.text(p.mag || '—', margin + 60, y);
      doc.text(p.disc || '—', margin + 80, y);
      const descText = p.desc || '—';
      const lines = doc.splitTextToSize(descText, contentW - 115);
      doc.text(lines[0] || '—', margin + 115, y);
      y += 6;
    });
    y += 4;
  }

  // --- Wealth ---
  const wealthFields = [
    ['Land / Property', getVal('wealth-land')],
    ['Income', getVal('wealth-income')],
    ['Coins', getVal('wealth-coins')]
  ].filter(w => w[1]);

  if (wealthFields.length > 0) {
    sectionHeader('Wealth');
    wealthFields.forEach(w => {
      checkPage(10);
      labelValue(w[0], w[1], margin, y);
      y += 10;
    });
    y += 4;
  }

  // --- Relationships ---
  const friends = getVal('rel-friends');
  const enemies = getVal('rel-enemies');
  if (friends || enemies) {
    sectionHeader('Relationships');
    if (friends) {
      checkPage(10);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9);
      doc.setTextColor(...textGold);
      doc.text('Friends & Allies', margin, y);
      y += 4;
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9);
      doc.setTextColor(...textDark);
      const friendLines = doc.splitTextToSize(friends, contentW);
      friendLines.forEach(line => {
        checkPage(5);
        doc.text(line, margin, y);
        y += 4;
      });
      y += 4;
    }
    if (enemies) {
      checkPage(10);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9);
      doc.setTextColor(...textGold);
      doc.text('Enemies & Rivals', margin, y);
      y += 4;
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9);
      doc.setTextColor(...textDark);
      const enemyLines = doc.splitTextToSize(enemies, contentW);
      enemyLines.forEach(line => {
        checkPage(5);
        doc.text(line, margin, y);
        y += 4;
      });
      y += 4;
    }
  }

  // --- Background ---
  const background = getVal('char-background');
  if (background) {
    sectionHeader('Background');
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(...textDark);
    const bgLines = doc.splitTextToSize(background, contentW);
    bgLines.forEach(line => {
      checkPage(5);
      doc.text(line, margin, y);
      y += 4;
    });
  }

  // Save
  doc.save(`${charName.replace(/[^a-zA-Z0-9]/g, '_')}_character_sheet.pdf`);
  showToast('PDF Exported Successfully!');
}

function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'toast-notification';
  toast.innerText = message;
  document.body.appendChild(toast);

  // Trigger reflow
  toast.offsetHeight;

  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      document.body.removeChild(toast);
    }, 300);
  }, 3000);
}
