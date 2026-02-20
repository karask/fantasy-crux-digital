export function initCombatModule() {
  const container = document.getElementById('content-combat');
  if (!container) return;

  container.innerHTML = `
    <div class="tab-nav">
      <button class="tab-btn active" data-tab="combat-summary">
        <span class="tab-icon">📜</span> Summary
      </button>
      <button class="tab-btn" data-tab="combat-actions">
        <span class="tab-icon">⚔️</span> Actions
      </button>
      <button class="tab-btn" data-tab="combat-results">
        <span class="tab-icon">🎲</span> Results & Damage
      </button>
      <button class="tab-btn" data-tab="combat-modifiers">
        <span class="tab-icon">✨</span> Modifiers
      </button>
    </div>

    <!-- Summary Tab -->
    <div id="combat-summary" class="tab-panel active">
      <div class="card">
        <div class="card-body text-large">
          <h3 class="section-header-large">Combat Overview</h3>
          <p>Combat is divided into rounds. A single round lasts 5 seconds.</p>
          <ol style="margin-left: 1.5rem; margin-bottom: 2rem;">
            <li><strong style="color: var(--gold-bright);">Determine Order:</strong> Roll 1D10 + Combat Order (INT + DEX - Armour ENC). Highest acts first.</li>
            <li><strong style="color: var(--gold-bright);">Take Actions:</strong> Each character gets:
              <ul style="margin-top: 0.5rem;">
                <li>1 Combat Action (e.g. Attack)</li>
                <li>1 Movement Action (Move up to Movement Rate)</li>
                <li>1 Reaction (e.g. Parry or Dodge)</li>
              </ul>
            </li>
            <li><strong style="color: var(--gold-bright);">End of Round:</strong> Repeat until combat ends.</li>
          </ol>

          <h3 class="section-header-large">Basic Rules</h3>
          <ul style="margin-left: 1.5rem;">
            <li><strong>Attack:</strong> Roll <= Skill</li>
            <li><strong>Damage:</strong> Weapon Damage + Damage Modifier - Opponent's AP.</li>
            <li><strong>Movement:</strong> You can move your rate without losing action/reaction. Running (x2 Move) limits you to Dodge only.</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Actions Tab -->
    <div id="combat-actions" class="tab-panel">
      
      <div class="card" style="margin-bottom: 2rem;">
        <div class="card-body">
            <h3 class="section-header-large">Close Combat Actions</h3>
            <table class="module-table">
                <thead>
                    <tr>
                        <th style="width: 25%;">Action</th>
                        <th style="width: 75%;">Description & Effects</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="col-name">Standard Attack</td>
                        <td>Roll Close Combat skill. Deal Weapon + DM damage.</td>
                    </tr>
                    <tr>
                        <td class="col-name">Charge</td>
                        <td>Move x2 rate in straight line. Attack with +1D6 dmg. Lose Reaction.</td>
                    </tr>
                    <tr>
                        <td class="col-name">All Out Attack</td>
                        <td>2 Attacks at Penalty Die (-1P). Lose Reaction.</td>
                    </tr>
                    <tr>
                        <td class="col-name">Great Attack</td>
                        <td>1 Attack with Bonus Die (+1B) & Max Damage Modifier. Lose Reaction.</td>
                    </tr>
                    <tr>
                        <td class="col-name">Disarming Attack</td>
                        <td>Attack at Penalty Die (-1P). Success disarms foe (weapon thrown 1D6m).</td>
                    </tr>
                    <tr>
                        <td class="col-name">Trip Attack</td>
                        <td>Attack at Penalty Die (-1P). Success knocks foe prone.</td>
                    </tr>
                    <tr>
                        <td class="col-name">Knockout Attack</td>
                        <td>Attack at Penalty Die (-1P). If dmg >= Major Wound, foe KO'd. Else, min dmg.</td>
                    </tr>
                    <tr>
                        <td class="col-name">Fighting Retreat</td>
                        <td>Move away (full rate). Defend at +1B (+2B w/ Shield).</td>
                    </tr>
                </tbody>
            </table>

            <h3 class="section-header-large">Ranged Actions</h3>
             <table class="module-table">
                <thead>
                    <tr>
                        <th style="width: 25%;">Action</th>
                        <th style="width: 75%;">Description & Effects</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="col-name">Ranged Attack</td>
                        <td>Roll Ranged Combat skill. Deal Weapon + DM damage (except crossbows).</td>
                    </tr>
                    <tr>
                        <td class="col-name">Aim</td>
                        <td>Take full round to aim. Next attack gets Bonus Die (+1B).</td>
                    </tr>
                </tbody>
            </table>
        </div>
      </div>
    </div>

    <!-- Results Tab -->
    <div id="combat-results" class="tab-panel">
      <div class="card" style="margin-bottom: 2rem;">
        <div class="card-body">
            <h3 class="section-header-large">Attack vs Defense Results</h3>
            <table class="module-table">
            <thead>
              <tr>
                <th style="width: 20%;">Attacker</th>
                <th style="width: 20%;">Defender</th>
                <th style="width: 60%;">Result</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Success</td>
                <td>Failure</td>
                <td>Hit. Normal Damage.</td>
              </tr>
              <tr>
                <td>Success</td>
                <td>Success</td>
                <td>
                    <div style="margin-bottom: 0.5rem;"><strong>Parry:</strong> Block damage (Full/Half based on size).</div>
                    <div><strong>Dodge:</strong> Avoid all damage.</div>
                </td>
              </tr>
              <tr>
                <td>Success</td>
                <td>Critical</td>
                <td>
                    <div style="margin-bottom: 0.5rem;"><strong>Parry:</strong> Block full damage.</div>
                    <div><strong>Dodge:</strong> Avoid all damage.</div>
                </td>
              </tr>
              <tr>
                <td>Critical</td>
                <td>Failure</td>
                <td>
                    <div style="margin-bottom: 0.5rem;"><strong style="color: var(--gold-bright);">Critical Hit!</strong></div>
                    <div>Close/Unarmed Combat: select two of the following effects: Maximum damage, ignore armour, free attack, trip, disarm, knock-back or knockout.</div>
                    <div>Ranged Combat: Maximum damage and ignore armour.</div>
                </td>
              </tr>
              <tr>
                <td>Critical</td>
                <td>Success</td>
                <td>Hit. Normal Damage.</td>
              </tr>
              <tr>
                <td>Critical</td>
                <td>Critical</td>
                <td>
                    <div style="margin-bottom: 0.5rem;"><strong>Parry:</strong> Block damage (Full/Half based on size).</div>
                    <div><strong>Dodge:</strong> Avoid all damage.</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="card">
        <div class="card-body text-large">
          <h3 class="section-header-large">Wounds</h3>
          <p>Damage is subtracted from Hit Points.</p>
          <p><strong>0 HP:</strong> Dead (unless Hero Points used).</p>
          <p><strong>Major Wound (>= 50% HP in one blow):</strong> Roll Resilience (-2P) or unconscious. Halve DEX. Permanent injury possible.</p>
          <p><strong>Fatal Wound (>= 100% HP in one blow):</strong> Instant Death.</p>
        </div>
        <div class="card-body text-large">
          <h3 class="section-header-large">Healing</h3>
          <p><strong>Minor Injuries:</strong> CON/4 HPs per day. Healing Skill can heal 1D4 HPs per wound once.</p>
          <p><strong>Major Wounds:</strong> After successful surgery (Healing skill) 1 HP per day.</p>
        </div>
      </div>
    </div>

    <!-- Modifiers Tab -->
    <div id="combat-modifiers" class="tab-panel">
      <div class="card">
        <div class="card-body text-large">
           <h3 class="section-header-large">Situational Modifiers</h3>
           <div class="modifiers-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">
             <div class="highlight-box">
               <h3 style="color: var(--gold); margin-top: 0;">Bonus (+1B)</h3>
               <ul style="list-style: none; padding: 0;">
                 <li style="margin-bottom: 0.5rem;">✅ Target Prone / Flanked</li>
                 <li style="margin-bottom: 0.5rem;">✅ Higher Ground / Mounted</li>
                 <li style="margin-bottom: 0.5rem;">✅ Target Helpless (Auto Crit)</li>
                 <li style="margin-bottom: 0.5rem;">✅ Fighting Retreat</li>
               </ul>
             </div>
             <div class="highlight-box" style="border-color: rgba(200, 50, 50, 0.4);">
               <h3 style="color: var(--red-bright); margin-top: 0;">Penalty (-1P)</h3>
               <ul style="list-style: none; padding: 0;">
                 <li style="margin-bottom: 0.5rem;">❌ Prone / Unstable Ground</li>
                 <li style="margin-bottom: 0.5rem;">❌ Lower Ground</li>
                 <li style="margin-bottom: 0.5rem;">❌ Partial Darkness</li>
                 <li style="margin-bottom: 0.5rem;">❌ Underwater (-2P)</li>
                 <li style="margin-bottom: 0.5rem;">❌ Blinded / Pitch Dark (-3P)</li>
               </ul>
             </div>
           </div>
        </div>
      </div>
    </div>
  `;

  // Tab Logic
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
}
