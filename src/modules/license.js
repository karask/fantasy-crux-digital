import { LICENSE_TEXT } from '../data/license-text.js';

export function initLicenseModule() {
    const container = document.getElementById('content-license');
    if (!container) return;

    container.innerHTML = `
    <div class="license-content" style="
      background: var(--bg-panel); 
      padding: 2rem; 
      border: 1px solid var(--border-color); 
      border-radius: 4px; 
      font-family: monospace; 
      white-space: pre-wrap; 
      font-size: 0.9rem; 
      color: var(--text-color);
      line-height: 1.5;">
      ${LICENSE_TEXT}
    </div>
  `;
}
