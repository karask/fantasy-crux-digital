// Fantasy Crux Game Data - extracted from fantasy-crux-v1.4.1-printer.pdf

// =========== CHARACTERISTICS ===========
export const CHARACTERISTICS = ['STR', 'CON', 'DEX', 'SIZ', 'INT', 'POW', 'CHA'];
export const CHAR_START_VALUE = 8;
export const CHAR_POINTS_TO_DISTRIBUTE = 30;
export const CHAR_MAX_VALUE = 18;
export const CHAR_MIN_VALUES = { STR: 3, CON: 3, DEX: 3, SIZ: 7, INT: 7, POW: 3, CHA: 3 };

// =========== DAMAGE MODIFIER TABLE ===========
export const DAMAGE_MODIFIER_TABLE = [
    { min: 1, max: 10, modifier: '-1D6' },
    { min: 11, max: 15, modifier: '-1D4' },
    { min: 16, max: 25, modifier: '+0' },
    { min: 26, max: 30, modifier: '+1D4' },
    { min: 31, max: 45, modifier: '+1D6' },
    { min: 46, max: 60, modifier: '+2D6' },
    { min: 61, max: 75, modifier: '+3D6' },
    { min: 76, max: Infinity, modifier: '+1D6 per 15' }
];

// =========== CLOSE COMBAT WEAPONS ===========
export const CLOSE_COMBAT_WEAPONS = [
    { name: 'Arming Sword', type: '1H', damage: '1D8', strDex: '9/9', enc: 2, size: 'Medium', cost: '150 SP' },
    { name: 'Ball and Chain', type: '1H', damage: '1D8', strDex: '9/9', enc: 2, size: 'Medium', cost: '120 SP' },
    { name: 'Battleaxe', type: '1H', damage: '1D8', strDex: '9/9', enc: 2, size: 'Medium', cost: '120 SP' },
    { name: 'Club', type: 'Flex', damage: '1D6', strDex: '5/9', enc: 1, size: 'Light', cost: '20 SP' },
    { name: 'Dagger', type: '1H/Range', damage: '1D4+1', strDex: '-/-', enc: 0, size: 'Light', cost: '20 SP' },
    { name: 'Great Axe', type: '2H', damage: '2D8', strDex: '13/5', enc: 4, size: 'Heavy', cost: '200 SP' },
    { name: 'Great Hammer', type: '2H', damage: '2D8', strDex: '13/5', enc: 4, size: 'Heavy', cost: '200 SP' },
    { name: 'Greatsword', type: '2H', damage: '2D8', strDex: '13/9', enc: 4, size: 'Heavy', cost: '300 SP' },
    { name: 'Hatchet', type: '1H/Range', damage: '1D6', strDex: '5/9', enc: 1, size: 'Light', cost: '20 SP' },
    { name: 'Lance', type: 'Flex/Set', damage: '1D10', strDex: '11/9', enc: 3, size: 'Heavy', cost: '150 SP' },
    { name: 'Longspear', type: '2H/Set', damage: '1D8+1', strDex: '9/5', enc: 2, size: 'Medium', cost: '30 SP' },
    { name: 'Longsword', type: 'Flex', damage: '1D8', strDex: '13/11', enc: 2, size: 'Medium', cost: '250 SP' },
    { name: 'Mace', type: 'Flex', damage: '1D8', strDex: '9/9', enc: 2, size: 'Medium', cost: '120 SP' },
    { name: 'Military Flail', type: '2H', damage: '2D8', strDex: '13/5', enc: 4, size: 'Heavy', cost: '200 SP' },
    { name: 'Polearm', type: '2H/Set', damage: '1D8', strDex: '9/9', enc: 3, size: 'Heavy', cost: '200 SP' },
    { name: 'Quarterstaff', type: '2H', damage: '1D8', strDex: '5/9', enc: 2, size: 'Medium', cost: '20 SP' },
    { name: 'Scimitar', type: '1H', damage: '1D8', strDex: '9/9', enc: 2, size: 'Medium', cost: '150 SP' },
    { name: 'Shield (small)', type: '-', damage: '1D4', strDex: '-/-', enc: 1, size: 'Medium', cost: '50 SP' },
    { name: 'Shield (medium)', type: '-', damage: '1D6', strDex: '9/-', enc: 2, size: 'Heavy', cost: '150 SP' },
    { name: 'Shield (large)', type: '-', damage: '1D6', strDex: '13/-', enc: 3, size: 'Huge', cost: '300 SP' },
    { name: 'Shortspear', type: 'Flex/Set/Range', damage: '1D6', strDex: '5/5', enc: 2, size: 'Medium', cost: '20 SP' },
    { name: 'Shortsword', type: '1H', damage: '1D6', strDex: '5/5', enc: 1, size: 'Medium', cost: '100 SP' },
    { name: 'Unarmed', type: '-', damage: '1D3', strDex: '-/-', enc: 0, size: '-', cost: '-' },
    { name: 'War Hammer', type: '1H', damage: '1D8', strDex: '9/9', enc: 2, size: 'Medium', cost: '120 SP' }
];

// =========== RANGED WEAPONS ===========
export const RANGED_WEAPONS = [
    { name: 'Dagger (thrown)', type: 'Close', damage: '1D4+1', range: 'STR x m', strDex: '-/9', enc: 0, cost: '30 SP' },
    { name: 'Crossbow (Heavy)', type: '2H', damage: '2D6', range: '150m', strDex: '9/9', enc: 2, cost: '350 SP' },
    { name: 'Dart', type: '-', damage: '1D3', range: 'STR x m', strDex: '-/9', enc: 0, cost: '15 SP' },
    { name: 'Crossbow (Light)', type: '2H', damage: '1D8', range: '125m', strDex: '5/9', enc: 1, cost: '150 SP' },
    { name: 'Hatchet (thrown)', type: 'Close', damage: '1D6', range: 'STR x m', strDex: '-/9', enc: 1, cost: '25 SP' },
    { name: 'Improvised (Rock)', type: '-', damage: '1D4', range: 'STR x m', strDex: '5/5', enc: 1, cost: '-' },
    { name: 'Javelin', type: '-', damage: '1D6', range: 'STR x 2m', strDex: '5/9', enc: 1, cost: '20 SP' },
    { name: 'Longbow', type: '2H', damage: '1D10', range: '150m', strDex: '13/9', enc: 1, cost: '150 SP' },
    { name: 'Shortbow', type: '2H', damage: '1D8', range: '75m', strDex: '9/9', enc: 1, cost: '75 SP' },
    { name: 'Shortspear (thrown)', type: 'Close', damage: '1D6', range: 'STR x 2m', strDex: '5/9', enc: 2, cost: '20 SP' },
    { name: 'Sling', type: '1H', damage: '1D6', range: '50m', strDex: '-/9', enc: 0, cost: '5 SP' },
    { name: 'Whip', type: 'Close', damage: '1D3', range: '5m', strDex: '-/9', enc: 0, cost: '50 SP' }
];

// =========== ARMOR ===========
export const ARMOR_TYPES = [
    { name: 'None', ap: 0, enc: 0, cost: '-' },
    { name: 'Leather', ap: 2, enc: 3, cost: '500 SP' },
    { name: 'Ringmail', ap: 3, enc: 4, cost: '1000 SP' },
    { name: 'Scalemail', ap: 4, enc: 6, cost: '1500 SP' },
    { name: 'Chainmail', ap: 5, enc: 7, cost: '3000 SP' },
    { name: 'Platemail', ap: 6, enc: 9, cost: '9000 SP' }
];

// =========== SKILLS BY CATEGORY ===========
export const SKILL_CATEGORIES = {
    Resistances: {
        points: 50,
        skills: [
            { name: 'Dodge', base: 'DEX+10', calc: (c) => c.DEX + 10 },
            { name: 'Persistence', base: 'POW+10', calc: (c) => c.POW + 10 },
            { name: 'Resilience', base: 'CON+POW', calc: (c) => c.CON + c.POW }
        ]
    },
    Combat: {
        points: 50,
        skills: [
            { name: 'Close Combat', base: 'DEX+STR', calc: (c) => c.DEX + c.STR },
            { name: 'Ranged Combat', base: 'DEX+INT', calc: (c) => c.DEX + c.INT },
            { name: 'Unarmed Combat', base: 'DEX+STR', calc: (c) => c.DEX + c.STR }
        ]
    },
    Knowledge: {
        points: 50,
        skills: [
            { name: 'Culture (Own)', base: 'INT+10', calc: (c) => c.INT + 10 },
            { name: 'Culture (Other)', base: 'INT', calc: (c) => c.INT, entries: 3, entryLabel: 'Culture' },
            { name: 'Language (Own)', base: 'INT+50', calc: (c) => c.INT + 50 },
            { name: 'Language (Other)', base: 'INT', calc: (c) => c.INT, entries: 3, entryLabel: 'Language' },
            { name: 'Natural Lore', base: 'INT+10', calc: (c) => c.INT + 10 },
            { name: 'Lore', base: 'INT', calc: (c) => c.INT, entries: 2, entryLabel: 'Lore' },
            { name: 'Healing', base: 'INT+10', calc: (c) => c.INT + 10 },
            { name: 'Craft', base: 'INT+10', calc: (c) => c.INT + 10, entries: 2, entryLabel: 'Craft' }
        ]
    },
    Practical: {
        points: 75,
        skills: [
            { name: 'Athletics', base: 'DEX+STR', calc: (c) => c.DEX + c.STR },
            { name: 'Deception', base: 'DEX+INT', calc: (c) => c.DEX + c.INT },
            { name: 'Driving', base: 'DEX+INT', calc: (c) => c.DEX + c.INT },
            { name: 'Engineering', base: 'INT+10', calc: (c) => c.INT + 10 },
            { name: 'Influence', base: 'CHA+10', calc: (c) => c.CHA + 10 },
            { name: 'Mechanisms', base: 'DEX+INT', calc: (c) => c.DEX + c.INT },
            { name: 'Perception', base: 'INT+POW', calc: (c) => c.INT + c.POW },
            { name: 'Performance', base: 'CHA+10', calc: (c) => c.CHA + 10 },
            { name: 'Riding', base: 'DEX+POW', calc: (c) => c.DEX + c.POW },
            { name: 'Sailing', base: 'DEX+INT', calc: (c) => c.DEX + c.INT },
            { name: 'Streetwise', base: 'CHA+POW', calc: (c) => c.CHA + c.POW },
            { name: 'Trade', base: 'INT+10', calc: (c) => c.INT + 10 }
        ]
    }
};

// =========== GENERAL EQUIPMENT ===========
export const EQUIPMENT_LIST = [
    // General equipment
    { name: 'Backpack', enc: 1, cost: '5 SP' },
    { name: 'Bedroll', enc: 1, cost: '1 SP' },
    { name: 'Block & Tackle', enc: 1, cost: '15 SP' },
    { name: 'Bottle, glass', enc: 0, cost: '2 SP' },
    { name: 'Candle, 1 hour', enc: 0, cost: '1 CP' },
    { name: 'Chain, 2 metres', enc: 2, cost: '40 SP' },
    { name: 'Climbing Kit', enc: 1, cost: '25 SP' },
    { name: 'Craft Tools', enc: 2, cost: '75 SP' },
    { name: 'Crowbar', enc: 1, cost: '25 SP' },
    { name: 'Healing Kit', enc: 0, cost: '25 SP' },
    { name: 'Fish Hook', enc: 0, cost: '1 CP' },
    { name: 'Fishing Kit', enc: 1, cost: '15 SP' },
    { name: 'Flint & Tinder', enc: 0, cost: '5 CP' },
    { name: 'Grappling Hook', enc: 0, cost: '5 SP' },
    { name: 'Hammer', enc: 0, cost: '1 SP' },
    { name: 'Ladder, 3 metres', enc: 4, cost: '2 SP' },
    { name: 'Lantern', enc: 1, cost: '10 SP' },
    { name: 'Lock Picks', enc: 0, cost: '75 SP' },
    { name: 'Mining Pick', enc: 1, cost: '35 SP' },
    { name: 'Musical Instrument', enc: 2, cost: '70 SP' },
    { name: 'Oil, Flask', enc: 1, cost: '1 SP' },
    { name: 'Papyrus, Sheet', enc: 0, cost: '1 SP' },
    { name: 'Quiver', enc: 0, cost: '2 SP' },
    { name: 'Rope, 10 metres', enc: 2, cost: '10 SP' },
    { name: 'Sack, Large', enc: 1, cost: '5 CP' },
    { name: 'Sack, Small', enc: 0, cost: '2 CP' },
    { name: 'Scythe', enc: 2, cost: '30 SP' },
    { name: 'Slingbag', enc: 1, cost: '5 CP' },
    { name: 'Spade', enc: 1, cost: '25 SP' },
    { name: 'Torch, 1 hour', enc: 0, cost: '4 CP' },
    { name: 'Waterskin', enc: 1, cost: '5 CP' },
    { name: 'Writing Kit', enc: 1, cost: '45 SP' },
    { name: 'Arrows (10)', enc: 0, cost: '1 SP' },
    { name: 'Blowgun Darts (10)', enc: 0, cost: '2 SP' },
    { name: 'Crossbow Bolts (10)', enc: 0, cost: '2 SP' },
    { name: 'Sling Bullets (10)', enc: 0, cost: '5 CP' },
    { name: 'Trail Rations, 1 Day', enc: 0, cost: '5 CP' },
    { name: 'Provisions, 2 Weeks', enc: 2, cost: '7 SP' },
    // Close Combat Weapons
    { name: 'Arming Sword', enc: 2, cost: '150 SP' },
    { name: 'Ball and Chain', enc: 2, cost: '120 SP' },
    { name: 'Battleaxe', enc: 2, cost: '120 SP' },
    { name: 'Club', enc: 1, cost: '20 SP' },
    { name: 'Dagger', enc: 0, cost: '20 SP' },
    { name: 'Great Axe', enc: 4, cost: '200 SP' },
    { name: 'Great Hammer', enc: 4, cost: '200 SP' },
    { name: 'Greatsword', enc: 4, cost: '300 SP' },
    { name: 'Hatchet', enc: 1, cost: '20 SP' },
    { name: 'Lance', enc: 3, cost: '150 SP' },
    { name: 'Longspear', enc: 2, cost: '30 SP' },
    { name: 'Longsword', enc: 2, cost: '250 SP' },
    { name: 'Mace', enc: 2, cost: '120 SP' },
    { name: 'Military Flail', enc: 4, cost: '200 SP' },
    { name: 'Polearm', enc: 3, cost: '200 SP' },
    { name: 'Quarterstaff', enc: 2, cost: '20 SP' },
    { name: 'Scimitar', enc: 2, cost: '150 SP' },
    { name: 'Shield (small)', enc: 1, cost: '50 SP' },
    { name: 'Shield (medium)', enc: 2, cost: '150 SP' },
    { name: 'Shield (large)', enc: 3, cost: '300 SP' },
    { name: 'Shortspear', enc: 2, cost: '20 SP' },
    { name: 'Shortsword', enc: 1, cost: '100 SP' },
    { name: 'War Hammer', enc: 2, cost: '120 SP' },
    // Ranged Weapons
    { name: 'Crossbow (Heavy)', enc: 2, cost: '350 SP' },
    { name: 'Crossbow (Light)', enc: 1, cost: '150 SP' },
    { name: 'Dart', enc: 0, cost: '15 SP' },
    { name: 'Javelin', enc: 1, cost: '20 SP' },
    { name: 'Longbow', enc: 1, cost: '150 SP' },
    { name: 'Shortbow', enc: 1, cost: '75 SP' },
    { name: 'Sling', enc: 0, cost: '5 SP' },
    { name: 'Whip', enc: 0, cost: '50 SP' },
    // Armor
    { name: 'Leather Armor', enc: 3, cost: '500 SP' },
    { name: 'Ringmail Armor', enc: 4, cost: '1000 SP' },
    { name: 'Scalemail Armor', enc: 6, cost: '1500 SP' },
    { name: 'Chainmail Armor', enc: 7, cost: '3000 SP' },
    { name: 'Platemail Armor', enc: 9, cost: '9000 SP' }
];

// =========== DISCIPLINES ===========
export const DISCIPLINES = [
    { name: 'Battle', cost: 2, description: 'Advanced combat techniques. Requires 51% in a combat skill.' },
    { name: 'Folk Magic', cost: 4, description: 'Common/hedge magic. Casting skill base: POW×3.' },
    { name: 'Arcane Magic', cost: 8, description: 'Studied manipulation of magical laws. Casting skill base: INT.' },
    { name: 'Divine Magic', cost: 4, description: 'Power granted by devotion to a deity. Casting skill base: POW+CHA.' }
];

// =========== BATTLE TECHNIQUES ===========
export const BATTLE_TECHNIQUES = [
    { name: 'Awareness', magnitude: 3, discipline: 'Battle', description: 'Opponent cannot gain flanking bonus for 3 combat rounds.' },
    { name: 'Combat Focus', magnitude: 2, discipline: 'Battle', description: 'Close combat attack with Bonus die (+1B).' },
    { name: 'Combat Mastery', magnitude: 3, discipline: 'Battle', description: 'Close combat attack with Bonus die (+1B) and +2 damage.' },
    { name: 'Confuse', magnitude: 2, discipline: 'Battle', description: "Opponent's parry or dodge at Penalty die (-1P)." },
    { name: 'Deadly Aim', magnitude: 3, discipline: 'Battle', description: 'Ranged attack with Bonus die (+1B) and +2 damage.' },
    { name: 'Defensive Stance', magnitude: 4, discipline: 'Battle', description: 'With shield, effective AP increased by 2 for 4 rounds.' },
    { name: 'Extra Reaction', magnitude: 3, discipline: 'Battle', description: 'Gain extra reaction with Penalty die (-1P).' },
    { name: 'Impr. Combat Order', magnitude: 2, discipline: 'Battle', description: '+4 to Combat Order (declare before rolls).' },
    { name: 'Impr. Aim', magnitude: 2, discipline: 'Battle', description: 'Immediate Aim action (no delay).' },
    { name: 'Impr. All Out Attack', magnitude: 4, discipline: 'Battle', description: 'All Out Attack without losing reaction.' },
    { name: 'Impr. Disarm', magnitude: 2, discipline: 'Battle', description: 'Disarm without penalty.' },
    { name: 'Impr. Trip', magnitude: 2, discipline: 'Battle', description: 'Trip without penalty.' },
    { name: 'Impr. Great Attack', magnitude: 4, discipline: 'Battle', description: 'Great Attack without losing reaction.' },
    { name: 'Impr. Intimidate', magnitude: 2, discipline: 'Battle', description: 'Influence (intimidate) gains Bonus die (+1B).' },
    { name: 'Impr. Knock-Back', magnitude: 2, discipline: 'Battle', description: 'Knock-Back without penalty.' },
    { name: 'Impr. Knockout', magnitude: 2, discipline: 'Battle', description: 'Knockout without penalty.' },
    { name: 'Protect', magnitude: 3, discipline: 'Battle', description: 'Force enemy to attack you instead of ally within 3m.' },
    { name: 'Twin Attack', magnitude: 2, discipline: 'Battle', description: 'All Out Attack with no penalty on first attack.' },
    { name: 'Twin Missile', magnitude: 4, discipline: 'Battle', description: 'Additional ranged attack at Penalty die (-1P).' },
    { name: 'Unarmed Fast Attack', magnitude: 2, discipline: 'Battle', description: 'Additional unarmed attack at Penalty die (-1P).' },
    { name: 'Unarmed Focus', magnitude: 2, discipline: 'Battle', description: 'Unarmed attack with Bonus die (+1B).' },
    { name: 'Unarmed Mastery', magnitude: 3, discipline: 'Battle', description: 'Unarmed attack with Bonus die (+1B) and +2 damage.' }
];

// =========== FOLK MAGIC SPELLS ===========
export const FOLK_MAGIC_SPELLS = [
    { name: 'Animal Whisperer', magnitude: 2, discipline: 'Folk Magic', description: 'Calms a distressed animal.' },
    { name: 'Awareness', magnitude: 2, discipline: 'Folk Magic', description: 'Grants awareness behind the recipient.' },
    { name: 'Babel', magnitude: 2, discipline: 'Folk Magic', description: 'Garbles the target\'s language.' },
    { name: 'Beast Call', magnitude: 2, discipline: 'Folk Magic', description: 'Attracts an animal within range.' },
    { name: 'Befuddle', magnitude: 2, discipline: 'Folk Magic', description: 'Confuses target, no spells or offensive actions.' },
    { name: 'Block Sense', magnitude: 3, discipline: 'Folk Magic', description: 'Blinds/deafens/numbs a sense.' },
    { name: 'Call Spirit', magnitude: 3, discipline: 'Folk Magic', description: 'Summons a spirit to do bidding.' },
    { name: 'Care', magnitude: 2, discipline: 'Folk Magic', description: 'Share Protection/Countermagic with recipient.' },
    { name: 'Clear Path', magnitude: 1, discipline: 'Folk Magic', description: 'Move through tangled brush freely.' },
    { name: 'Coordination', magnitude: 2, discipline: 'Folk Magic', description: 'Per 2 Mag: +4 Combat Order, +1B to Dodge/Athletics.' },
    { name: 'Counter-Attack', magnitude: 1, discipline: 'Folk Magic', description: 'Trigger: free counter attack after being attacked.' },
    { name: 'Counter-Defense', magnitude: 1, discipline: 'Folk Magic', description: 'Trigger: extra reaction after being hit.' },
    { name: 'Countermagic', magnitude: 1, discipline: 'Folk Magic', description: 'Disrupts and nullifies target spell.' },
    { name: 'Cushion Fall', magnitude: 2, discipline: 'Folk Magic', description: 'Eliminates all falling damage.' },
    { name: 'Darkwall', magnitude: 2, discipline: 'Folk Magic', description: '5m area of darkness, blocks light/sight.' },
    { name: 'Demoralise', magnitude: 2, discipline: 'Folk Magic', description: 'Halves weapon skills, no offensive spells.' },
    { name: 'Detect (Enemy)', magnitude: 1, discipline: 'Folk Magic', description: 'Locates nearest hostile creature.' },
    { name: 'Detect (Magic)', magnitude: 1, discipline: 'Folk Magic', description: 'Locates nearest magic item/creature/spell.' },
    { name: 'Detect (Species)', magnitude: 1, discipline: 'Folk Magic', description: 'Locates nearest creature of specified species.' },
    { name: 'Detect (Substance)', magnitude: 1, discipline: 'Folk Magic', description: 'Locates nearest substance of specified type.' },
    { name: 'Dispel Magic', magnitude: 1, discipline: 'Folk Magic', description: 'Eliminates spells equal to its Magnitude.' },
    { name: 'Disruption', magnitude: 1, discipline: 'Folk Magic', description: '1D4 damage per Mag, ignores armor.' },
    { name: 'Dragon Fire', magnitude: 2, discipline: 'Folk Magic', description: '1D10 fire damage.' },
    { name: 'Drive Out Spirit', magnitude: 1, discipline: 'Folk Magic', description: 'Exorcises possessing spirit.' },
    { name: 'Dull Weapon', magnitude: 1, discipline: 'Folk Magic', description: 'Reduces weapon damage by 1 per Mag.' },
    { name: 'Enhance Skill', magnitude: 2, discipline: 'Folk Magic', description: 'Per 2 Mag: +1B to non-combat skill.' },
    { name: 'Fanaticism', magnitude: 2, discipline: 'Folk Magic', description: 'Adds weapon skill bonus, counters Demoralise.' },
    { name: 'Firearrow', magnitude: 2, discipline: 'Folk Magic', description: 'Sets missile alight for +1D6 fire damage.' },
    { name: 'Fireblade', magnitude: 4, discipline: 'Folk Magic', description: 'Sets weapon alight for +1D6 fire damage.' },
    { name: 'Frostbite', magnitude: 2, discipline: 'Folk Magic', description: 'Chill target for 1D3 cold damage, ignores armor.' },
    { name: 'Glamour', magnitude: 2, discipline: 'Folk Magic', description: 'Makes target appear more attractive/impressive.' },
    { name: 'Heal', magnitude: 1, discipline: 'Folk Magic', description: 'Heals 1D6 HP per 2 Mag.' },
    { name: 'Hinder', magnitude: 1, discipline: 'Folk Magic', description: 'Per Mag: combat skill reduced by 5%.' },
    { name: 'Ironhand', magnitude: 3, discipline: 'Folk Magic', description: 'Unarmed damage becomes 1D6, counts as medium weapon.' },
    { name: 'Light', magnitude: 1, discipline: 'Folk Magic', description: 'Creates light source.' },
    { name: 'Lock', magnitude: 1, discipline: 'Folk Magic', description: 'Locks door/container with Mag×20% resistance.' },
    { name: 'Lucky', magnitude: 2, discipline: 'Folk Magic', description: 'Re-roll one failed skill test.' },
    { name: 'Mind Shield', magnitude: 2, discipline: 'Folk Magic', description: '+1B to Persistence vs mental attacks per 2 Mag.' },
    { name: 'Mobility', magnitude: 1, discipline: 'Folk Magic', description: '+2m Movement Rate per Mag.' },
    { name: 'Multi-Missile', magnitude: 1, discipline: 'Folk Magic', description: 'Extra missile per Mag fired simultaneously.' },
    { name: 'Noxious Cloud', magnitude: 3, discipline: 'Folk Magic', description: 'Cloud causes coughing & 1D4 damage/round.' },
    { name: 'Personal Insight', magnitude: 2, discipline: 'Folk Magic', description: 'Answers small personal question via intuition.' },
    { name: 'Pierce', magnitude: 1, discipline: 'Folk Magic', description: 'Ignores 1 AP per Mag on hit.' },
    { name: 'Protection', magnitude: 1, discipline: 'Folk Magic', description: '+1 AP per Mag, stacks with existing armor.' },
    { name: 'Push/Pull', magnitude: 1, discipline: 'Folk Magic', description: 'Moves item of 3 SIZ/ENC per Mag.' },
    { name: 'Read Emotion', magnitude: 1, discipline: 'Folk Magic', description: 'Reveals true emotional state of target.' },
    { name: 'Resist (Element)', magnitude: 2, discipline: 'Folk Magic', description: '+1B per 2 Mag vs element, -2 damage per Mag.' },
    { name: 'Restore Energy', magnitude: 1, discipline: 'Folk Magic', description: 'Restores 1 fatigue level per Mag.' },
    { name: 'Sap Energy', magnitude: 1, discipline: 'Folk Magic', description: 'Inflicts 1 fatigue level per Mag.' },
    { name: 'Scare', magnitude: 2, discipline: 'Folk Magic', description: 'Target withdraws from combat for 1D6 rounds.' },
    { name: 'Second Sight', magnitude: 3, discipline: 'Folk Magic', description: 'Gauge POW of nearby creatures/items.' },
    { name: 'Skybolt', magnitude: 3, discipline: 'Folk Magic', description: '2D6 lightning damage, outdoors only.' },
    { name: 'Slip', magnitude: 1, discipline: 'Folk Magic', description: 'Ground becomes slippery, Athletics or fall.' },
    { name: 'Slow', magnitude: 1, discipline: 'Folk Magic', description: '-2m Movement per Mag.' },
    { name: 'Speedart', magnitude: 2, discipline: 'Folk Magic', description: '+1B Ranged Combat and +3 damage on missile.' },
    { name: 'Spirit Bane', magnitude: 2, discipline: 'Folk Magic', description: 'Per 2 Mag: increase spirit damage die.' },
    { name: 'Spirit Shield', magnitude: 2, discipline: 'Folk Magic', description: 'Per 2 Mag: reduce spirit damage by 1.' },
    { name: 'Strength', magnitude: 2, discipline: 'Folk Magic', description: 'Per 2 Mag: +2 Damage and +1B Athletics.' },
    { name: 'Talk to Animal', magnitude: 3, discipline: 'Folk Magic', description: 'Speak to beasts within 10m.' },
    { name: 'Thunder\'s Voice', magnitude: 2, discipline: 'Folk Magic', description: 'Per 2 Mag: +1B Influence, heard far away.' },
    { name: 'Tongues', magnitude: 3, discipline: 'Folk Magic', description: 'Speak another language perfectly.' },
    { name: 'Truth Seeker', magnitude: 2, discipline: 'Folk Magic', description: '+1B per 2 Mag to discover lies/secrets.' },
    { name: 'Unlock', magnitude: 1, discipline: 'Folk Magic', description: 'Opens lock at Mag×20% chance.' },
    { name: 'Vigour', magnitude: 1, discipline: 'Folk Magic', description: '+2 HP per Mag (max double).' },
    { name: 'Vomit', magnitude: 1, discipline: 'Folk Magic', description: 'Incapacitates for 1 round per Mag.' },
    { name: 'Walk on (Element)', magnitude: 3, discipline: 'Folk Magic', description: 'Walk on specified element without harm.' },
    { name: 'Water Breath', magnitude: 1, discipline: 'Folk Magic', description: 'Breathe underwater for duration.' },
    { name: 'Weapon Enhance', magnitude: 2, discipline: 'Folk Magic', description: 'Per 2 Mag: +1B to hit and +2 magical damage.' }
];

// =========== ARCANE MAGIC SPELLS ===========
export const ARCANE_MAGIC_SPELLS = [
    { name: 'Animate (Substance)', magnitude: 1, discipline: 'Arcane Magic', description: 'Animates material to move/act.' },
    { name: 'Attract (Spell)', magnitude: 1, discipline: 'Arcane Magic', description: 'Redirects incoming spell to caster.' },
    { name: 'Create Godform', magnitude: 1, discipline: 'Arcane Magic', description: 'Channel deity aspects for bonuses.' },
    { name: 'Damage Boosting', magnitude: 1, discipline: 'Arcane Magic', description: '+1D10 magical damage to weapon per Mag.' },
    { name: 'Damage Resistance', magnitude: 1, discipline: 'Arcane Magic', description: 'Resist 2 damage per Mag.' },
    { name: 'Diminish (Char)', magnitude: 1, discipline: 'Arcane Magic', description: 'Reduce characteristic by 1 per Mag.' },
    { name: 'Dominate (Species)', magnitude: 1, discipline: 'Arcane Magic', description: 'Control target creature.' },
    { name: 'Energy Projection', magnitude: 1, discipline: 'Arcane Magic', description: 'Project 1D6 elemental damage per Mag.' },
    { name: 'Enhance (Char)', magnitude: 1, discipline: 'Arcane Magic', description: 'Increase characteristic by 1 per Mag.' },
    { name: 'Fly', magnitude: 1, discipline: 'Arcane Magic', description: 'Target can fly at Movement Rate.' },
    { name: 'Form/Set (Substance)', magnitude: 1, discipline: 'Arcane Magic', description: 'Shape material into desired form.' },
    { name: 'Glow', magnitude: 1, discipline: 'Arcane Magic', description: 'Creates bright magical light.' },
    { name: 'Hamper', magnitude: 1, discipline: 'Arcane Magic', description: 'Hinders target actions.' },
    { name: 'Haste', magnitude: 1, discipline: 'Arcane Magic', description: 'Double Movement Rate.' },
    { name: 'Holdfast', magnitude: 1, discipline: 'Arcane Magic', description: 'Binds target in place.' },
    { name: 'Illusion', magnitude: 1, discipline: 'Arcane Magic', description: 'Creates convincing illusion.' },
    { name: 'Insight', magnitude: 1, discipline: 'Arcane Magic', description: 'Gain knowledge about target.' },
    { name: 'Invisibility', magnitude: 1, discipline: 'Arcane Magic', description: 'Target becomes invisible.' },
    { name: 'Mind Control', magnitude: 1, discipline: 'Arcane Magic', description: 'Control target\'s actions.' },
    { name: 'Mystic Vision', magnitude: 1, discipline: 'Arcane Magic', description: 'See magical auras and power.' },
    { name: 'Neutralise Magic', magnitude: 1, discipline: 'Arcane Magic', description: 'Dispels active spells on target.' },
    { name: 'Palsy', magnitude: 1, discipline: 'Arcane Magic', description: 'Paralyses target partially.' },
    { name: 'Phantom (Sense)', magnitude: 1, discipline: 'Arcane Magic', description: 'Creates phantom sensation.' },
    { name: 'Portal', magnitude: 1, discipline: 'Arcane Magic', description: 'Creates magical doorway.' },
    { name: 'Projection', magnitude: 1, discipline: 'Arcane Magic', description: 'Projects sentient image of caster.' },
    { name: 'Resist Magic', magnitude: 1, discipline: 'Arcane Magic', description: '+1B per Mag to resist magic.' },
    { name: 'Shapechanger', magnitude: 1, discipline: 'Arcane Magic', description: 'Transform into different shape.' },
    { name: 'Shapeshift (Species)', magnitude: 1, discipline: 'Arcane Magic', description: 'Transform into specific creature.' },
    { name: 'Skin of Life', magnitude: 1, discipline: 'Arcane Magic', description: 'Keeps undead from decaying.' },
    { name: 'Smother', magnitude: 1, discipline: 'Arcane Magic', description: 'Suffocates target.' },
    { name: 'Spirit Resistance', magnitude: 1, discipline: 'Arcane Magic', description: 'Blocks spirits from attacking.' },
    { name: 'Stupefy', magnitude: 1, discipline: 'Arcane Magic', description: 'Dulls mental faculties.' },
    { name: 'Summon (Creature)', magnitude: 1, discipline: 'Arcane Magic', description: 'Summons creature to serve caster.' },
    { name: 'Tap (Char)', magnitude: 1, discipline: 'Arcane Magic', description: 'Drains characteristic to restore PP.' },
    { name: 'Teleport', magnitude: 1, discipline: 'Arcane Magic', description: 'Instantly move to known location.' },
    { name: 'Treat Wounds', magnitude: 1, discipline: 'Arcane Magic', description: 'Heal 1D6 HP per Mag.' },
    { name: 'Ward', magnitude: 1, discipline: 'Arcane Magic', description: 'Creates protective magical ward.' },
    { name: 'Wrack', magnitude: 1, discipline: 'Arcane Magic', description: 'Inflicts wracking pain on target.' }
];

// =========== DIVINE MAGIC SPELLS ===========
export const DIVINE_MAGIC_SPELLS = [
    { name: 'Absorption', magnitude: 1, discipline: 'Divine Magic', description: 'Absorbs incoming spell, converts to PP.' },
    { name: 'Aegis', magnitude: 1, discipline: 'Divine Magic', description: 'Creates divine protective shield.' },
    { name: 'Behold', magnitude: 1, discipline: 'Divine Magic', description: 'Grants divine vision / knowledge.' },
    { name: 'Berserk', magnitude: 2, discipline: 'Divine Magic', description: 'Enter divine battle fury.' },
    { name: 'Bless Crops', magnitude: 1, discipline: 'Divine Magic', description: 'Ensures good harvest.' },
    { name: 'Block Soul', magnitude: 4, discipline: 'Divine Magic', description: 'Prevents resurrection / soul magic.' },
    { name: 'Call Winds', magnitude: 1, discipline: 'Divine Magic', description: 'Summons and controls wind.' },
    { name: 'Consecrate', magnitude: 1, discipline: 'Divine Magic', description: 'Creates holy ground.' },
    { name: 'Create Blessed Items', magnitude: 1, discipline: 'Divine Magic', description: 'Creates divinely empowered items.' },
    { name: 'Create Idol', magnitude: 1, discipline: 'Divine Magic', description: 'Creates focus for divine magic.' },
    { name: 'Cure Disease/Poison', magnitude: 1, discipline: 'Divine Magic', description: 'Removes disease or poison.' },
    { name: 'Dismiss Magic', magnitude: 1, discipline: 'Divine Magic', description: 'Dispels targeted magic.' },
    { name: 'Divination', magnitude: 1, discipline: 'Divine Magic', description: 'Seeks divine guidance.' },
    { name: 'Divine Heal', magnitude: 1, discipline: 'Divine Magic', description: 'Heals 1D10 HP per Mag.' },
    { name: 'Excommunicate', magnitude: 1, discipline: 'Divine Magic', description: 'Cuts target from divine power.' },
    { name: 'Exorcism', magnitude: 1, discipline: 'Divine Magic', description: 'Drives out possessing entity.' },
    { name: 'Fear', magnitude: 1, discipline: 'Divine Magic', description: 'Causes divine terror.' },
    { name: 'Heal Body', magnitude: 4, discipline: 'Divine Magic', description: 'Major heal, restores body.' },
    { name: 'Heal Mind', magnitude: 4, discipline: 'Divine Magic', description: 'Heals mental trauma.' },
    { name: 'Lightning Strike', magnitude: 1, discipline: 'Divine Magic', description: 'Calls divine lightning, 1D6 per Mag.' },
    { name: 'Locking', magnitude: 1, discipline: 'Divine Magic', description: 'Magically locks with divine power.' },
    { name: 'Madness', magnitude: 1, discipline: 'Divine Magic', description: 'Inflicts temporary madness.' },
    { name: 'Mindblast', magnitude: 1, discipline: 'Divine Magic', description: 'Psychic damage to target.' },
    { name: 'Mindlink', magnitude: 1, discipline: 'Divine Magic', description: 'Telepathic communication.' },
    { name: 'Preach', magnitude: 1, discipline: 'Divine Magic', description: 'Inspires crowd with divine message.' },
    { name: 'Raise Dead', magnitude: 5, discipline: 'Divine Magic', description: 'Resurrects the recently deceased.' },
    { name: 'Reflection', magnitude: 1, discipline: 'Divine Magic', description: 'Reflects incoming spell back at caster.' },
    { name: 'Resurrect', magnitude: 5, discipline: 'Divine Magic', description: 'Full resurrection of the dead.' },
    { name: 'Sacred Band', magnitude: 1, discipline: 'Divine Magic', description: 'Bonds group in divine unity.' },
    { name: 'Shield', magnitude: 1, discipline: 'Divine Magic', description: 'Creates divine protective barrier.' },
    { name: 'Soul Sight', magnitude: 1, discipline: 'Divine Magic', description: 'See alignment/nature of souls.' },
    { name: 'Spirit Block', magnitude: 1, discipline: 'Divine Magic', description: 'Blocks spirit interaction.' },
    { name: 'Sun Disc', magnitude: 1, discipline: 'Divine Magic', description: 'Creates disc of divine light.' },
    { name: 'Sureshot', magnitude: 1, discipline: 'Divine Magic', description: 'Ensures next ranged attack hits.' },
    { name: 'True (Weapon)', magnitude: 1, discipline: 'Divine Magic', description: 'Enhances weapon with divine power.' },
    { name: 'Thunderbolt', magnitude: 1, discipline: 'Divine Magic', description: 'Powerful lightning attack.' }
];

// Combine all powers for search
export const ALL_POWERS = [
    ...BATTLE_TECHNIQUES,
    ...FOLK_MAGIC_SPELLS,
    ...ARCANE_MAGIC_SPELLS,
    ...DIVINE_MAGIC_SPELLS
];
