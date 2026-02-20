export const FULL_SPOT_RULES = {
    "Travel & Terrain": [
        { name: "Hiking", rate: "50km/day", effect: "Fatigue test at end of day." },
        { name: "Marching", rate: "30km/day", effect: "Organized group, ready to fight. No Fatigue test needed." },
        { name: "Riding", rate: "50km/day", effect: "Casual riding." },
        { name: "Riding Fast", rate: "90km/day", effect: "Fatigue test for mount and rider." },
        { name: "Terrain Modifiers", description: "Road/Path: 100%, Light Brush/Hills: 70-80%, Heavy Wood: 50%." }
    ],
    "Illumination": [
        { name: "Bright/Illuminated", effect: "None." },
        { name: "Partial Darkness", effect: "-1P to Vision Perception and Attacks." },
        { name: "Darkness", effect: "-2P to Vision Perception and Attacks. Movement halved." },
        { name: "Pitch Black", effect: "Vision/Ranged impossible. -3P Close Combat. Move 1/4." }
    ],
    "Fatigue": [
        { name: "Fatigued", effect: "All skill tests -1P. Move -1/4. DEX/INT -3 for Order." },
        { name: "Heavily Fatigued", effect: "All skill tests -2P. Move -1/2. DEX/INT -6 for Order." },
        { name: "Recovery", effect: "Rest for 20-CON hours to remove fatigue." }
    ],
    "Survival": [
        { name: "Exposure", limit: "CON hours", effect: "Fatigue test -1P + 1D6 dmg/day." },
        { name: "Starvation", limit: "CON days", effect: "After 3 days: Fatigue test -1P + 1D6 dmg/day." },
        { name: "Thirst", limit: "CON x 2 hours", effect: "Fatigue test -1P + 1D6 dmg/day." },
        { name: "Suffocation", limit: "Hold breath CON rounds", effect: "Resilience test/round (-1P cum). Fail: Dmg (Water/Vacuum 2D6, Smoke 1D6)." }
    ],
    "Hazards": [
        { name: "Falling", effect: "1D6 damage per 3m. Athletics test reduces dist by 2m. Prone." },
        { name: "Fire/Heat", effect: "Flame 1, Torch 1D4, Campfire 1D6, Bonfire 2D6, Inferno 3D6 per round. Metal armour no help." },
        { name: "Poison", effect: "Opposed Resilience vs Potency (10-100). Delay, Effect (Dmg/Stat), Duration." },
        { name: "Disease", effect: "Opposed Resilience vs Potency. Delay, Effect, Duration. Only natural healing." }
    ],
    "Encumbrance": [
        { name: "Carrying Capacity", effect: "STR + SIZ. Load <= Cap: No penalty." },
        { name: "Overloaded", effect: "Load > Cap. -1P to physical tests (STR/DEX). Move halved. -1P Fatigue." },
        { name: "Max Load", effect: "2x (STR + SIZ). Cannot carry more." }
    ],
    "Inanimate Objects": [
        { name: "Armor/HP", description: "Objects have AP and HP. Attacks hit automatically." },
        { name: "Breakage", description: "Weapons may break when hitting hard objects." },
        { name: "Examples", description: "Door (AP 2, HP 25), Chest (AP 2, HP 15), Wall (AP 5, HP 250)." }
    ]
};
