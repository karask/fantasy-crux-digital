export function initDownloadsModule() {
  const container = document.getElementById('content-downloads');
  if (!container) return;

  container.innerHTML = `
    <div class="card" style="margin-bottom: 2rem;">
      <div class="card-header">
        <span class="card-icon">📖</span>
        <h2>Rulebooks</h2>
      </div>
      <div class="card-body">
        <p style="margin-bottom: 1rem; color: var(--text-muted); font-style: italic;">
          The core rulebook for Fantasy Crux, available in different formats for your convenience.
        </p>
        <div class="download-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem;">
          
          <div class="download-card" style="border: 1px solid var(--border-gold); border-radius: 8px; padding: 1.5rem; text-align: center; background: rgba(30, 30, 48, 0.4);">
            <div style="font-size: 3rem; margin-bottom: 0.5rem;">📜</div>
            <h3 style="color: var(--text-highlight); margin-bottom: 0.5rem;">Papyrous Edition</h3>
            <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 1.5rem;">Full thematic background, ideal for digital reading.</p>
            <a href="downloads/FC-v1.4.2-papyrous.pdf" download class="btn btn-gold" style="display: inline-block; width: 100%; text-decoration: none;">Download PDF</a>
          </div>

          <div class="download-card" style="border: 1px solid var(--border-gold); border-radius: 8px; padding: 1.5rem; text-align: center; background: rgba(30, 30, 48, 0.4);">
            <div style="font-size: 3rem; margin-bottom: 0.5rem;">🖨️</div>
            <h3 style="color: var(--text-highlight); margin-bottom: 0.5rem;">Printer Friendly</h3>
            <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 1.5rem;">Clean white background to save your ink.</p>
            <a href="downloads/FC-v1.4.2-printer.pdf" download class="btn" style="display: inline-block; width: 100%; text-decoration: none;">Download PDF</a>
          </div>

          <div class="download-card" style="border: 1px solid var(--border-gold); border-radius: 8px; padding: 1.5rem; text-align: center; background: rgba(30, 30, 48, 0.4);">
            <div style="font-size: 3rem; margin-bottom: 0.5rem;">⚡</div>
            <h3 style="color: var(--text-highlight); margin-bottom: 0.5rem;">Lite Rules</h3>
            <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 1.5rem;">A concise summary of the basic rules.</p>
            <a href="downloads/FantasyCruxLite.pdf" download class="btn" style="display: inline-block; width: 100%; text-decoration: none;">Download PDF</a>
          </div>

        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-header">
        <span class="card-icon">📝</span>
        <h2>Character Sheets</h2>
      </div>
      <div class="card-body">
        <p style="margin-bottom: 1rem; color: var(--text-muted); font-style: italic;">
          Blank character sheets for playing at the table.
        </p>
        <div class="download-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem;">

          <div class="download-card" style="border: 1px solid var(--border-gold); border-radius: 8px; padding: 1.5rem; text-align: center; background: rgba(30, 30, 48, 0.4);">
            <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">✨</div>
            <h3 style="color: var(--text-highlight); margin-bottom: 0.5rem;">Fancy Color</h3>
            <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1.5rem;">Full color thematic sheet.</p>
            <a href="downloads/FC-sheet.pdf" download class="btn btn-gold" style="display: inline-block; width: 100%; text-decoration: none;">Download</a>
          </div>

          <div class="download-card" style="border: 1px solid var(--border-gold); border-radius: 8px; padding: 1.5rem; text-align: center; background: rgba(30, 30, 48, 0.4);">
            <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">🖼️</div>
            <h3 style="color: var(--text-highlight); margin-bottom: 0.5rem;">Fancy Printer</h3>
            <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1.5rem;">Thematic but ink-saving.</p>
            <a href="downloads/FC-sheet-printer.pdf" download class="btn" style="display: inline-block; width: 100%; text-decoration: none;">Download</a>
          </div>

          <div class="download-card" style="border: 1px solid var(--border-gold); border-radius: 8px; padding: 1.5rem; text-align: center; background: rgba(30, 30, 48, 0.4);">
            <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">📋</div>
            <h3 style="color: var(--text-highlight); margin-bottom: 0.5rem;">Plain</h3>
            <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1.5rem;">Barebones utilitarian sheet.</p>
            <a href="downloads/character-sheet.pdf" download class="btn" style="display: inline-block; width: 100%; text-decoration: none; border-color: #666;">Download</a>
          </div>

        </div>
      </div>
    </div>
  `;
}
