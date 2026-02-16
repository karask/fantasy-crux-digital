// Fantasy Crux - Derived Attribute Calculations
import { DAMAGE_MODIFIER_TABLE } from './gameData.js';

/**
 * Calculate Hit Points: (CON + SIZ) / 2, rounded to nearest (round up from 0.5)
 */
export function calculateHP(con, siz) {
    return Math.round((con + siz) / 2);
}

/**
 * Power Points equal POW
 */
export function calculatePP(pow) {
    return pow;
}

/**
 * Damage Modifier based on STR + SIZ
 */
export function calculateDamageModifier(str, siz) {
    const total = str + siz;
    for (const entry of DAMAGE_MODIFIER_TABLE) {
        if (total >= entry.min && total <= entry.max) {
            return entry.modifier;
        }
    }
    // For very high values, calculate additional D6
    const extra = Math.floor((total - 75) / 15);
    return `+${3 + extra}D6`;
}

/**
 * Combat Order: (DEX + INT) / 2 - armor ENC
 */
export function calculateCombatOrder(dex, int, armorEnc = 0) {
    return Math.round((dex + int) / 2) - armorEnc;
}

/**
 * Major Wound Level: HP / 2, rounded up
 */
export function calculateMajorWound(hp) {
    return Math.ceil(hp / 2);
}

/**
 * Calculate total characteristic points spent
 */
export function calculatePointsSpent(characteristics) {
    let spent = 0;
    for (const key of Object.keys(characteristics)) {
        spent += characteristics[key] - 8;
    }
    return spent;
}

/**
 * Calculate remaining characteristic points
 */
export function calculateRemainingPoints(characteristics) {
    return 30 - calculatePointsSpent(characteristics);
}
