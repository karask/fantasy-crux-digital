export function initIntroductionModule() {
    const container = document.getElementById('content-introduction');
    if (!container) return;

    container.innerHTML = `
    <div class="landing-hero" style="text-align: center; margin-bottom: 2rem; animation: fadeIn 0.8s ease;">
      <div style="position: relative; border-radius: 8px; border: 2px solid var(--border-gold); overflow: hidden; box-shadow: var(--shadow-card); margin-bottom: 2rem;">
        <img src="assets/dragon.png" alt="Fantasy Crux Dragon" style="max-width: 100%; height: 250px; object-fit: cover; object-position: center 25%; width: 100%; display: block;">
        <div style="position: absolute; bottom: 0; left: 0; right: 0; padding: 2rem 1rem 1rem; background: linear-gradient(180deg, transparent, rgba(15, 15, 30, 0.95) 60%);">
          <h1 style="font-family: var(--font-header); color: var(--gold-bright); font-size: 3rem; margin-bottom: 0.5rem; text-shadow: 0 4px 10px rgba(0,0,0,0.8);">Fantasy Crux Digital</h1>
          <p style="font-size: 1.2rem; color: var(--text-light); max-width: 800px; margin: 0 auto; letter-spacing: 1px;">The official companion tools for the Fantasy Crux tabletop roleplaying game.</p>
        </div>
      </div>
    </div>

    <div class="tab-grid" style="grid-template-columns: 1fr 1fr; gap: 1.5rem;">
      <div class="card" style="display: flex; flex-direction: column;">
        <div class="card-header">
          <span class="card-icon">👤</span>
          <h2>For Players</h2>
        </div>
        <div class="card-body" style="flex: 1;">
          <img src="assets/legendary-warrior.png" alt="Legendary Warrior" style="width: 100%; height: 160px; object-fit: cover; object-position: top; border-radius: 4px; margin-bottom: 1rem; border: 1px solid var(--border-gold);">
          <p style="margin-bottom: 1rem; font-size: 1.1rem;">Build your perfect hero with the interactive <strong>Character Generator</strong>. Designed to handle all the crunch so you can focus on the roleplay.</p>
          <ul style="padding-left: 1.5rem; color: var(--text-medium); margin-bottom: 1rem;">
            <li style="margin-bottom: 0.5rem;">Automated derived attributes (HP, PP, Combat Order)</li>
            <li style="margin-bottom: 0.5rem;">Track Skill and Improvement Points automatically</li>
            <li style="margin-bottom: 0.5rem;">Manage inventory, encumbrance, and equipped armor</li>
            <li style="margin-bottom: 0.5rem;">Select disciplines and record your mystical powers</li>
            <li>Export your completed character directly to PDF</li>
          </ul>
        </div>
      </div>

      <div class="card" style="display: flex; flex-direction: column;">
        <div class="card-header">
          <span class="card-icon">🎲</span>
          <h2>For Gamemasters</h2>
        </div>
        <div class="card-body" style="flex: 1;">
          <img src="assets/troll.png" alt="Orc Enemy" style="width: 100%; height: 160px; object-fit: cover; object-position: top; border-radius: 4px; margin-bottom: 1rem; border: 1px solid var(--border-gold);">
          <p style="margin-bottom: 1rem; font-size: 1.1rem;">Keep the action flowing smoothly with instant access to rules, spot rulings, and adversaries.</p>
          <ul style="padding-left: 1.5rem; color: var(--text-medium); margin-bottom: 1rem;">
            <li style="margin-bottom: 0.5rem;">Quickly reference <strong>Combat</strong> procedures and weapon stats</li>
            <li style="margin-bottom: 0.5rem;">Browse all available <strong>Skills</strong>, <strong>Disciplines</strong>, and <strong>Powers</strong></li>
            <li style="margin-bottom: 0.5rem;">Look up edge cases instantly in the <strong>Spot Rules</strong> section</li>
            <li style="margin-bottom: 0.5rem;">Access the comprehensive <strong>Creatures</strong> database for encounters</li>
            <li>Utilize handy <strong>GM Tools</strong> to manage the game state</li>
          </ul>
        </div>
      </div>
    </div>
  `;
}
