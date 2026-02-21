/* ========================================
   Layout & Sidebar Logic
   ======================================== */

import { initIntroductionModule } from './modules/introduction.js';
import { initSkillsModule } from './modules/skills.js';
import { initEquipmentModule } from './modules/equipment.js';
import { initCombatModule } from './modules/combat.js';
import { initPowersModule } from './modules/powers.js';
import { initSpotRulesModule } from './modules/spot-rules.js';
import { initGMToolsModule } from './modules/gm-tools.js';
import { initCreaturesModule } from './modules/creatures.js';
import { initLicenseModule } from './modules/license.js';

document.addEventListener('DOMContentLoaded', () => {
    initSidebarNavigation();
    initIntroductionModule();
});

function initSidebarNavigation() {
    const sidebarNav = document.querySelector('.sidebar-nav');
    if (!sidebarNav) return;

    // Handle clicks on the Fantasy Crux title
    const headerIntro = document.getElementById('sidebar-header-intro');
    if (headerIntro) {
        headerIntro.addEventListener('click', () => {
            // Update Sidebar Active State
            document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));

            // Switch Module View
            document.querySelectorAll('.module').forEach(m => m.classList.remove('active'));
            const targetModule = document.getElementById('module-introduction');
            if (targetModule) {
                targetModule.classList.add('active');
            }
        });
    }

    sidebarNav.addEventListener('click', (e) => {
        const btn = e.target.closest('.nav-item');
        if (!btn) return;

        const moduleName = btn.dataset.module;

        // Update Sidebar Active State
        document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Switch Module View
        document.querySelectorAll('.module').forEach(m => m.classList.remove('active'));
        const targetModule = document.getElementById(`module-${moduleName}`);
        if (targetModule) {
            targetModule.classList.add('active');

            // Initialize module logic on demand
            switch (moduleName) {
                case 'skills': initSkillsModule(); break;
                case 'equipment': initEquipmentModule(); break;
                case 'combat': initCombatModule(); break;
                case 'powers': initPowersModule(); break;
                case 'spot-rules': initSpotRulesModule(); break;
                case 'gm-tools': initGMToolsModule(); break;
                case 'monsters': initCreaturesModule(); break; // Maps 'monsters' to 'creatures' implementation
                case 'license': initLicenseModule(); break;
            }
        }
    });
}
