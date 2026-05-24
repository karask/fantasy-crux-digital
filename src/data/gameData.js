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
    { name: 'Ambidextrous', magnitude: 1, discipline: 'Battle', description: 'Attack with an off-hand weapon has no penalty.' },
    { name: 'Awareness', magnitude: 3, discipline: 'Battle', description: 'Opponent cannot gain flanking bonus for 3 combat rounds.' },
    { name: 'Combat Focus', magnitude: 2, discipline: 'Battle', description: 'Close combat attack with Bonus die (+1B).' },
    { name: 'Combat Mastery', magnitude: 3, discipline: 'Battle', description: 'Close combat attack with Bonus die (+1B) and +2 damage.' },
    { name: 'Confuse', magnitude: 2, discipline: 'Battle', description: 'Opponent\'s parry or dodge at Penalty die (-1P).' },
    { name: 'Deadly Aim', magnitude: 3, discipline: 'Battle', description: 'Ranged attack with Bonus die (+1B) and +2 damage.' },
    { name: 'Defensive Stance', magnitude: 4, discipline: 'Battle', description: 'With shield, effective AP increased by 2 for 4 rounds.' },
    { name: 'Extra Reaction', magnitude: 3, discipline: 'Battle', description: 'Gain extra reaction with Penalty die (-1P).' },
    { name: 'Impr. Aim', magnitude: 2, discipline: 'Battle', description: 'Immediate Aim action (no delay).' },
    { name: 'Impr. All Out Attack', magnitude: 4, discipline: 'Battle', description: 'All Out Attack without losing reaction.' },
    { name: 'Impr. Combat Order', magnitude: 2, discipline: 'Battle', description: '+4 to Combat Order (declare before rolls).' },
    { name: 'Impr. Disarm', magnitude: 2, discipline: 'Battle', description: 'Disarm without penalty.' },
    { name: 'Impr. Great Attack', magnitude: 4, discipline: 'Battle', description: 'Great Attack without losing reaction.' },
    { name: 'Impr. Intimidate', magnitude: 2, discipline: 'Battle', description: 'Influence (intimidate) gains Bonus die (+1B).' },
    { name: 'Impr. Knock-Back', magnitude: 2, discipline: 'Battle', description: 'Knock-Back without penalty.' },
    { name: 'Impr. Knockout', magnitude: 2, discipline: 'Battle', description: 'Knockout without penalty.' },
    { name: 'Impr. Trip', magnitude: 2, discipline: 'Battle', description: 'Trip without penalty.' },
    { name: 'Protect', magnitude: 3, discipline: 'Battle', description: 'Force enemy to attack you instead of ally within 3m.' },
    { name: 'Twin Attack', magnitude: 2, discipline: 'Battle', description: 'All Out Attack with no penalty on first attack.' },
    { name: 'Twin Missile', magnitude: 4, discipline: 'Battle', description: 'Additional ranged attack at Penalty die (-1P).' },
    { name: 'Unarmed Fast Attack', magnitude: 2, discipline: 'Battle', description: 'Additional unarmed attack at Penalty die (-1P).' },
    { name: 'Unarmed Focus', magnitude: 2, discipline: 'Battle', description: 'Unarmed attack with Bonus die (+1B).' },
    { name: 'Unarmed Mastery', magnitude: 3, discipline: 'Battle', description: 'Unarmed attack with Bonus die (+1B) and +2 damage.' }
];

export const FOLK_MAGIC_SPELLS = [
    { name: 'Animal Whisperer', magnitude: 2, discipline: 'Folk Magic', description: 'Calms a distressed animal.' },
    { name: 'Awareness', magnitude: 2, discipline: 'Folk Magic', description: 'Grants awareness behind the recipient.' },
    { name: 'Babel', magnitude: 2, discipline: 'Folk Magic', description: 'Garbles the target\'s language.' },
    { name: 'Beast Call', magnitude: 2, discipline: 'Folk Magic', description: 'Attracts an animal within range.' },
    { name: 'Befuddle', magnitude: 2, discipline: 'Folk Magic', description: 'Confuses target, no spells or offensive actions.' },
    { name: 'Block Sense (Sense)', magnitude: 'Magnitude 3, Non-Variable, Resist (Persistence)', discipline: 'Folk Magic', description: 'Depending on the version of this spell it will Blind/Deafen/Desensitise taste or smell/Numb touch on a failed resistance roll f...' },
    { name: 'Call Spirit (Type)', magnitude: 'Magnitude 3, Non-Variable, Resist (Persistence)', discipline: 'Folk Magic', description: 'This spell summons a single spirit of a given type from the Spirit World to do the bidding of the caster.' },
    { name: 'Care', magnitude: 2, discipline: 'Folk Magic', description: 'Share Protection/Countermagic with recipient.' },
    { name: 'Clear Path', magnitude: 1, discipline: 'Folk Magic', description: 'Move through tangled brush freely.' },
    { name: 'Coordination', magnitude: 2, discipline: 'Folk Magic', description: 'Per 2 Mag: +4 Combat Order, +1B to Dodge/Athletics.' },
    { name: 'Counter-Attack', magnitude: 1, discipline: 'Folk Magic', description: 'Trigger: free counter attack after being attacked.' },
    { name: 'Counter-Defense', magnitude: 1, discipline: 'Folk Magic', description: 'Trigger: extra reaction after being hit.' },
    { name: 'Countermagic', magnitude: 1, discipline: 'Folk Magic', description: 'Disrupts and nullifies target spell.' },
    { name: 'Create Charms', magnitude: 'Permanent', discipline: 'Folk Magic', description: 'A charm is a physical item that stores one or more Folk Magic spells.' },
    { name: 'Create Potions', magnitude: 'Permanent', discipline: 'Folk Magic', description: 'Potions are liquids that store one or more Folk Magic spells.' },
    { name: 'Create Power Point Store', magnitude: 'Permanent', discipline: 'Folk Magic', description: 'This spell allows the caster to create an item which has Power Point storing capabilities.' },
    { name: 'Create Scrolls', magnitude: 'Permanent', discipline: 'Folk Magic', description: 'This spell allows the caster to create a written version of the spell for later use.' },
    { name: 'Cushion Fall', magnitude: 2, discipline: 'Folk Magic', description: 'Eliminates all falling damage.' },
    { name: 'Darkwall', magnitude: 2, discipline: 'Folk Magic', description: '5m area of darkness, blocks light/sight.' },
    { name: 'Demoralise', magnitude: 2, discipline: 'Folk Magic', description: 'Halves weapon skills, no offensive spells.' },
    { name: 'Detect (X)', magnitude: 'Magnitude 1, Non-Variable, Concentration', discipline: 'Folk Magic', description: 'This covers a family of spells that all operate in a similar fashion, allowing the caster to locate the closest target of the spell within its range.' },
    { name: 'Dispel Magic', magnitude: 1, discipline: 'Folk Magic', description: 'Eliminates spells equal to its Magnitude.' },
    { name: 'Disruption', magnitude: 1, discipline: 'Folk Magic', description: '1D4 damage per Mag, ignores armor.' },
    { name: 'Dragon Fire', magnitude: 2, discipline: 'Folk Magic', description: '1D10 fire damage.' },
    { name: 'Drive Out Spirit', magnitude: 1, discipline: 'Folk Magic', description: 'Exorcises possessing spirit.' },
    { name: 'Dull Weapon', magnitude: 1, discipline: 'Folk Magic', description: 'Reduces weapon damage by 1 per Mag.' },
    { name: 'Enhance Skill (X)', magnitude: 'Instant', discipline: 'Folk Magic', description: 'Like Detect (X), this includes a number of different spells, each of which affects a different non-combat skill.' },
    { name: 'Extinguish', magnitude: 'Instant', discipline: 'Folk Magic', description: 'This spell instantly puts out fires.' },
    { name: 'Extra Defense', magnitude: 'Magnitude 2', discipline: 'Folk Magic', description: 'For every two points of Magnitude the target gains one extra reaction per combat round.' },
    { name: 'Fanaticism', magnitude: 2, discipline: 'Folk Magic', description: 'Adds weapon skill bonus, counters Demoralise.' },
    { name: 'Farsight', magnitude: 'Concentration', discipline: 'Folk Magic', description: 'Each point of this spell extends the caster’s field of vision by twenty metres as long as they maintain their concentration.' },
    { name: 'Fire Missile', magnitude: 'Magnitude 4, Non-Variable, Touch', discipline: 'Folk Magic', description: 'Casting this spell on a ranged weapon will cause missiles fired/throwed to burst into flame.' },
    { name: 'Fire Weapon', magnitude: 'Magnitude 4, Non-Variable, Touch', discipline: 'Folk Magic', description: 'For the duration of the spell, the target melee weapon will deal a die higher than normal of magical fire damage.' },
    { name: 'Fist of Gold', magnitude: 'Instant', discipline: 'Folk Magic', description: 'This spell creates a minor illusion of 10D10 Gold Pieces per level of Magnitude that persists for the duration of the spell.' },
    { name: 'Fist of the Wind', magnitude: 'Instant', discipline: 'Folk Magic', description: 'Each point of Magnitude allows the caster to make one extra unarmed attack.' },
    { name: 'Flying Kick', magnitude: 'Magnitude 2, Non-Variable', discipline: 'Folk Magic', description: 'This spell allows the recipient to make a normal move as a flying leap through the air, then make a Kick attack at the end of t...' },
    { name: 'Frostbite', magnitude: 2, discipline: 'Folk Magic', description: 'Chill target for 1D3 cold damage, ignores armor.' },
    { name: 'Glue', magnitude: 'Area, Touch', discipline: 'Folk Magic', description: 'This spell covers an area of one centimetre square for each Magnitude with extremely sticky glue.' },
    { name: 'Hand of Death', magnitude: 'Instant, Magnitude 4, Non-Variable, Resist (Resilience), Touch', discipline: 'Folk Magic', description: 'This fearsome spell allows the caster to deal an awful wound with the merest touch.' },
    { name: 'Harden', magnitude: 'Magnitude 1, Non-Variable, Touch', discipline: 'Folk Magic', description: 'This spell makes a target item unbreakable for the duration of the spell.' },
    { name: 'Heal', magnitude: 1, discipline: 'Folk Magic', description: 'Heals 1D6 HP per 2 Mag.' },
    { name: 'Hinder Skill (X)', magnitude: 'Resist (Persistence)', discipline: 'Folk Magic', description: 'Like Enhance Skill (X), this is a number of different spells, each of which affects a different skill.' },
    { name: 'Ignite', magnitude: 'Instant, Magnitude 1, Non-Variable', discipline: 'Folk Magic', description: 'Ignite will set fire to anything flammable within range, creating a flame.' },
    { name: 'Invoke Ancestor Spirit', magnitude: 'Magnitude 3, Non-Variable, Resist (Persistence)', discipline: 'Folk Magic', description: 'This spell in many ways resembles Call Spirit, but specifically summons one of the characters deceased ancestors to aid them.' },
    { name: 'Ironmind', magnitude: 'Touch', discipline: 'Folk Magic', description: 'This spell hardens the resolve of the character that it is cast upon for its duration.' },
    { name: 'Knock Back', magnitude: 'Instant, Resist (Resilience)', discipline: 'Folk Magic', description: 'On a failed resistance roll the target of this spell is knocked back a number of metres equal to the spell’s magnitude.' },
    { name: 'Knockdown', magnitude: 'Instant, Magnitude 2, Non-Variable, Resist (Resilience)', discipline: 'Folk Magic', description: 'On a failed resistance roll the target of this spell is knocked down prone.' },
    { name: 'Leap', magnitude: 'Touch, Resist (Dodge)', discipline: 'Folk Magic', description: 'This spell causes the target to leap 2m up in the air for each point of Magnitude.' },
    { name: 'Levitating Disc', magnitude: 'Concentration, Area 1 per Magnitude', discipline: 'Folk Magic', description: 'This spell creates an invisible disc 1m in diameter for each point of Magnitude.' },
    { name: 'Light', magnitude: 1, discipline: 'Folk Magic', description: 'Creates light source.' },
    { name: 'Lock', magnitude: 1, discipline: 'Folk Magic', description: 'Locks door/container with Mag×20% resistance.' },
    { name: 'Mindspeech', magnitude: '', discipline: 'Folk Magic', description: 'This spell can affect one target for every point of Magnitude.' },
    { name: 'Mobility', magnitude: 1, discipline: 'Folk Magic', description: '+2m Movement Rate per Mag.' },
    { name: 'Multi Attack', magnitude: 'Instant', discipline: 'Folk Magic', description: 'Each point of Magnitude allows the caster to make one extra close-combat attack.' },
    { name: 'Multi Missile', magnitude: 'Trigger', discipline: 'Folk Magic', description: 'If the caster succeeds in casting the spell, a missile is charged with the spell for ten minutes.' },
    { name: 'Noxious Vapours', magnitude: 'Magnitude 2, Non-Variable, Area 10, Resist (Resilience)', discipline: 'Folk Magic', description: 'This spell fills a volume 10 metres in radius with thick choking green gas.' },
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
    { name: 'Spirit Alarm', magnitude: '', discipline: 'Folk Magic', description: 'If any spirit crosses the boundary of the area this spell is cast upon, the caster is aware of it.' },
    { name: 'Spirit Bane', magnitude: 2, discipline: 'Folk Magic', description: 'Per 2 Mag: increase spirit damage die.' },
    { name: 'Spirit Binding Ritual', magnitude: 'Permanent', discipline: 'Folk Magic', description: 'This spell must be cast on an item called a Fetish or an unintelligent natural animal with a SIZ no greater than twice the POW of the binder, which is known as a familiar.' },
    { name: 'Spirit Shield', magnitude: 2, discipline: 'Folk Magic', description: 'Per 2 Mag: reduce spirit damage by 1.' },
    { name: 'Strength', magnitude: 2, discipline: 'Folk Magic', description: 'Per 2 Mag: +2 Damage and +1B Athletics.' },
    { name: 'Talk to Animal', magnitude: 3, discipline: 'Folk Magic', description: 'Speak to beasts within 10m.' },
    { name: 'Thunder\'s Voice', magnitude: 2, discipline: 'Folk Magic', description: 'Per 2 Mag: +1B Influence, heard far away.' },
    { name: 'Tongues (Language)', magnitude: 'Magnitude 3, Non-Variable', discipline: 'Folk Magic', description: 'This spell allows the recipient to speak another language perfectly for its duration.' },
    { name: 'Truth Seeker', magnitude: 2, discipline: 'Folk Magic', description: '+1B per 2 Mag to discover lies/secrets.' },
    { name: 'Unlock', magnitude: 1, discipline: 'Folk Magic', description: 'Opens lock at Mag×20% chance.' },
    { name: 'Vigour', magnitude: 1, discipline: 'Folk Magic', description: '+2 HP per Mag (max double).' },
    { name: 'Vomit', magnitude: 1, discipline: 'Folk Magic', description: 'Incapacitates for 1 round per Mag.' },
    { name: 'Walk on (Element)', magnitude: 3, discipline: 'Folk Magic', description: 'Walk on specified element without harm.' },
    { name: 'Water Breath', magnitude: 1, discipline: 'Folk Magic', description: 'Breathe underwater for duration.' },
    { name: 'Weapon Enhance', magnitude: 2, discipline: 'Folk Magic', description: 'Per 2 Mag: +1B to hit and +2 magical damage.' }
];

export const ARCANE_MAGIC_SPELLS = [
    { name: '(Sense) Projection', magnitude: 'Concentration', discipline: 'Arcane Magic', description: 'Each (Sense) Projection spell is a separate spell.' },
    { name: 'Animate (Substance)', magnitude: 1, discipline: 'Arcane Magic', description: 'Animates material to move/act.' },
    { name: 'Cast Back', magnitude: '', discipline: 'Arcane Magic', description: 'This protective spell offers a chance of sending hostile spells (Arcane Magic and Folk Magic) back to the attacking spell caster.' },
    { name: 'Create Familiar', magnitude: 'Permanent', discipline: 'Arcane Magic', description: 'This spell allows the caster to make a personal sacrifice in order to create a Familiar.' },
    { name: 'Damage Boosting', magnitude: 1, discipline: 'Arcane Magic', description: '+1D10 magical damage to weapon per Mag.' },
    { name: 'Damage Resistance', magnitude: 1, discipline: 'Arcane Magic', description: 'Resist 2 damage per Mag.' },
    { name: 'Diminish (Characteristic)', magnitude: 'Resist(Persistence/Resilience), Touch', discipline: 'Arcane Magic', description: 'There are actually seven Diminish spells, one for each Characteristic.' },
    { name: 'Dominate (Species)', magnitude: 1, discipline: 'Arcane Magic', description: 'Control target creature.' },
    { name: 'Energy Projection (Type)', magnitude: 'Ranged, Instant, Resist(Dodge)', discipline: 'Arcane Magic', description: 'Energy is either projected as a beam or a ball towards the target, which can avoid the attack by Dodging.' },
    { name: 'Enhance (Characteristic)', magnitude: 'Touch', discipline: 'Arcane Magic', description: 'There are actually seven Enhance spells, one for each Characteristic.' },
    { name: 'Fly', magnitude: 1, discipline: 'Arcane Magic', description: 'Target can fly at Movement Rate.' },
    { name: 'Form/Set (Substance)', magnitude: 1, discipline: 'Arcane Magic', description: 'Shape material into desired form.' },
    { name: 'Glow', magnitude: 1, discipline: 'Arcane Magic', description: 'Creates bright magical light.' },
    { name: 'Hamper', magnitude: 1, discipline: 'Arcane Magic', description: 'Hinders target actions.' },
    { name: 'Haste', magnitude: 1, discipline: 'Arcane Magic', description: 'Double Movement Rate.' },
    { name: 'Holdfast', magnitude: 1, discipline: 'Arcane Magic', description: 'Binds target in place.' },
    { name: 'Illusion', magnitude: 1, discipline: 'Arcane Magic', description: 'Creates convincing illusion.' },
    { name: 'Invisibility', magnitude: 1, discipline: 'Arcane Magic', description: 'Target becomes invisible.' },
    { name: 'Make Scroll', magnitude: 'Permanent', discipline: 'Arcane Magic', description: 'These are written items which store Arcane Magic Spells.' },
    { name: 'Make Spell Matrix', magnitude: 'Permanent', discipline: 'Arcane Magic', description: 'This spell creates items that store Arcane Magic spells.' },
    { name: 'Mirage', magnitude: 'Touch', discipline: 'Arcane Magic', description: 'This spell creates an illusion based on all five senses.' },
    { name: 'Mystic Vistion', magnitude: 'Concentration', discipline: 'Arcane Magic', description: 'This spell allows the recipient to literally see magic.' },
    { name: 'Neutralise Magic', magnitude: 1, discipline: 'Arcane Magic', description: 'Dispels active spells on target.' },
    { name: 'Other World Portal (Other World)', magnitude: 'Instant', discipline: 'Arcane Magic', description: 'This spell creates a portal to a named Other World.' },
    { name: 'Palsy', magnitude: 1, discipline: 'Arcane Magic', description: 'Paralyses target partially.' },
    { name: 'Poison Antidote', magnitude: '', discipline: 'Arcane Magic', description: 'This spell counteracts an antidote to any poison.' },
    { name: 'Protective Sphere', magnitude: '', discipline: 'Arcane Magic', description: 'When completed, the Protective Sphere will create a sphere-shaped area of protection with a radius in metres equal to the spell’s Magnitude.' },
    { name: 'Regenerate', magnitude: 'Concentration Special, Instant, Touch', discipline: 'Arcane Magic', description: 'This spell causes a severed or maimed limb to regrow or reattach.' },
    { name: 'Sense (Substance)', magnitude: 'Concentration', discipline: 'Arcane Magic', description: 'Eminently useful for finding valuables from afar, this spell has a variation for every substance imaginable.' },
    { name: 'Shapechange (Species) to (Species)', magnitude: 'Resist (Resilience), Touch', discipline: 'Arcane Magic', description: 'Each Shapechange spell is a separate spell.' },
    { name: 'Skin of Life', magnitude: 1, discipline: 'Arcane Magic', description: 'Keeps undead from decaying.' },
    { name: 'Smother', magnitude: 1, discipline: 'Arcane Magic', description: 'Suffocates target.' },
    { name: 'Spell Resistance', magnitude: '', discipline: 'Arcane Magic', description: 'This spell matches its Magnitude against the Magnitude of any incoming spell.' },
    { name: 'Spirit Resistance', magnitude: 1, discipline: 'Arcane Magic', description: 'Blocks spirits from attacking.' },
    { name: 'Summon (Other World Creature)', magnitude: 'Resist (Persistence)', discipline: 'Arcane Magic', description: 'This spell allows the caster to summon one Other World creature, per casting, to the mundane world.' },
    { name: 'Tap (Characteristic)', magnitude: 'Concentration, Resist (Persistence), Touch', discipline: 'Arcane Magic', description: 'There are actually seven Tap spells, one for each Characteristic.' },
    { name: 'Teleport', magnitude: 1, discipline: 'Arcane Magic', description: 'Instantly move to known location.' },
    { name: 'Time Travel (Time Period)', magnitude: 'Instant', discipline: 'Arcane Magic', description: 'This spell transports the caster and a number of creatures (of SIZ 12-18) equal to the Magnitude of the spell to a named Time era via a Time Tunnel that opens up and instantly sucks them through to their destination.' },
    { name: 'Treat Wounds', magnitude: 1, discipline: 'Arcane Magic', description: 'Heal 1D6 HP per Mag.' }
];

export const DIVINE_MAGIC_SPELLS = [
    { name: 'Absorption', magnitude: 1, discipline: 'Divine Magic', description: 'Absorbs incoming spell, converts to PP.' },
    { name: 'Berserk', magnitude: 2, discipline: 'Divine Magic', description: 'Enter divine battle fury.' },
    { name: 'Block Fertility', magnitude: 'Magnitude 3, Permanent<br/>[Religions: Earth]', discipline: 'Divine Magic', description: 'While this spell is in place, the recipient is unable to conceive.' },
    { name: 'Breath Water', magnitude: 'Duration 15, Magnitude 2, Touch<br/>[Religions: Sea, Water]', discipline: 'Divine Magic', description: 'This spell allows an air-breathing creature to breathe water for the spell’s duration (the subject will still be able to breathe air as well).' },
    { name: 'Call (Elemental)', magnitude: 'Magnitude 1, Permanent, Progressive<br/>[Religions: Any with affinity to elements]', discipline: 'Divine Magic', description: 'This spell summons and binds to the service of the caster an elemental from another plane of existence, of a size dependant on the Magnitude of the spell: 1=Small, 2=Medium, 3=Large, 4=Huge (for more details on Elementals see page~monster:elemental).' },
    { name: 'Call (Undead)', magnitude: 'Magnitude 1, Permanent, Progressive<br/>[Religions: Evil, Death]', discipline: 'Divine Magic', description: 'This spell reanimates a dead human corpse and turns it into an undead creature, of a type determined by the Magnitude of the spell: 1=Skeleton, 2=Zombie, 5=Ghoul, 8=Vampire.' },
    { name: 'Consecrate', magnitude: 1, discipline: 'Divine Magic', description: 'Creates holy ground.' },
    { name: 'Create Blessed Items', magnitude: 1, discipline: 'Divine Magic', description: 'Creates divinely empowered items.' },
    { name: 'Create Crystal Ship', magnitude: 'Magnitude 4, Duration the length of the voyage<br/>[Religions: Merchant]', discipline: 'Divine Magic', description: 'From out of the air coalesces a Crystal Ship, a magical vessel that sails through the air to a single destination preordained by the caster.' },
    { name: 'Create Idol', magnitude: 1, discipline: 'Divine Magic', description: 'Creates focus for divine magic.' },
    { name: 'Death March', magnitude: 'Magnitude 4, Duration 1 Day<br/>[Religions: Death]', discipline: 'Divine Magic', description: 'This spell raises the local spirits of a settlement and makes them parade up and down the main road of that settlement, for a twenty four hour period.' },
    { name: 'Dismiss Magic', magnitude: 1, discipline: 'Divine Magic', description: 'Dispels targeted magic.' },
    { name: 'Divination', magnitude: 1, discipline: 'Divine Magic', description: 'Seeks divine guidance.' },
    { name: 'Divine Heal', magnitude: 1, discipline: 'Divine Magic', description: 'Heals 1D10 HP per Mag.' },
    { name: 'Enhance Fertility', magnitude: 'Magnitude 3, Permanent<br/>[Religions: Earth, Fertility]', discipline: 'Divine Magic', description: 'This spell makes any one creature more fertile than normal.' },
    { name: 'Enhance Unit', magnitude: 'Magnitude 3, Duration 6 Hours<br/>[Religions: War]', discipline: 'Divine Magic', description: 'For the duration of this spell a troop of up to thirty soldiers gain +1D6 damage.' },
    { name: 'Excommunicate', magnitude: 1, discipline: 'Divine Magic', description: 'Cuts target from divine power.' },
    { name: 'Exorcism', magnitude: 1, discipline: 'Divine Magic', description: 'Drives out possessing entity.' },
    { name: 'Extension', magnitude: 'Duration Special, Magnitude 1, Progressive<br/>[Religions: All]', discipline: 'Divine Magic', description: 'This spell lengthens the duration of any Divine Magic spell with the Duration trait.' },
    { name: 'Fear', magnitude: 1, discipline: 'Divine Magic', description: 'Causes divine terror.' },
    { name: 'Find X', magnitude: 'Duration 15, Magnitude 1, Ranged<br/>[Religions: All]', discipline: 'Divine Magic', description: 'This is actually several spells, though they all operate in a similar fashion, which allow the caster to locate the closest target of the spell within its range.' },
    { name: 'Jigsaw', magnitude: 'Magnitude 4, Duration 6 Hours, Resist (Persistence)<br/>[Religions: Trickster]', discipline: 'Divine Magic', description: 'This spell literally causes the target to fall to pieces upon a failed Persistence roll.' },
    { name: 'Lightning Strike', magnitude: 1, discipline: 'Divine Magic', description: 'Calls divine lightning, 1D6 per Mag.' },
    { name: 'Madness', magnitude: 1, discipline: 'Divine Magic', description: 'Inflicts temporary madness.' },
    { name: 'Mindblast', magnitude: 1, discipline: 'Divine Magic', description: 'Psychic damage to target.' },
    { name: 'Mindlink', magnitude: 1, discipline: 'Divine Magic', description: 'Telepathic communication.' },
    { name: 'Miraculous Item', magnitude: 'Magnitude 1, Progressive, Duration 1 Hour<br/>[Religions: Craft]', discipline: 'Divine Magic', description: 'This spell allows the caster to create items literally from nowhere.' },
    { name: 'Mischief', magnitude: 'Magnitude 2, Touch, Resist (Persistence), Duration 15<br/>[Religions: Trickster]', discipline: 'Divine Magic', description: 'Mischief is a minor trickster’s spell which afflicts its target with a small irritating curse.' },
    { name: 'Puppet', magnitude: 'Magnitude 3, Resist (Persistence), Concentration, Duration 6 Hours<br/>[Religions: Trickster]', discipline: 'Divine Magic', description: 'The caster uses this spell to enchant a puppet which is the focus of the spell and the stand-in for the victim.' },
    { name: 'Purity (Religion/Creed)', magnitude: 'Magnitude 2, Touch<br/>[Religions: Trickster]', discipline: 'Divine Magic', description: 'This spell removes a perceived sin according to a particular religion.' },
    { name: 'Quicksand', magnitude: 'Magnitude 2, Area, Resist (Persistence), Duration 15<br/>[Religions: Earth]', discipline: 'Divine Magic', description: 'This spell creates a patch of quicksand 10m square.' },
    { name: 'Radiant Appearance', magnitude: 'Magnitude 2, Duration 1 Day<br/>[Religions: Sun]', discipline: 'Divine Magic', description: 'The recipient of this spell glows with light and power.' },
    { name: 'Reflection', magnitude: 1, discipline: 'Divine Magic', description: 'Reflects incoming spell back at caster.' },
    { name: 'Repair and Replace', magnitude: 'Magnitude 1, Progressive, Instant<br/>[Religions: Craft]', discipline: 'Divine Magic', description: 'This spell repairs broken crafted items.' },
    { name: 'Resurrect', magnitude: 5, discipline: 'Divine Magic', description: 'Full resurrection of the dead.' },
    { name: 'Rout', magnitude: 'Magnitude 3<br/>[Religions: War]', discipline: 'Divine Magic', description: 'When aimed at a body of warriors, no more than one hundred persons, they make a Persistence roll or immediately lose all cohesion as a unit and rout.' },
    { name: 'See Past', magnitude: 'Magnitude 2, Area, Concentration<br/>[Religions: Knowledge]', discipline: 'Divine Magic', description: 'When cast on a 10m area, the caster can see that area as it was in any past point of time he wishes.' },
    { name: 'Shield', magnitude: 1, discipline: 'Divine Magic', description: 'Creates divine protective barrier.' },
    { name: 'Soul Sight', magnitude: 1, discipline: 'Divine Magic', description: 'See alignment/nature of souls.' },
    { name: 'Spirit Block', magnitude: 1, discipline: 'Divine Magic', description: 'Blocks spirit interaction.' },
    { name: 'Stink Bomb', magnitude: 'Magnitude 1, Resist (Resilience)<br/>[Religions: All]', discipline: 'Divine Magic', description: 'Upon being targeted by this spell, the victim becomes covered in a tightly fitting cloak of noxious smelling gas for 1D6 rounds.' },
    { name: 'Summon Holy Steed', magnitude: 'Magnitude 3, Duration 1 Day<br/>[Religions: Various]', discipline: 'Divine Magic', description: 'This spell summons a Holy Steed (see page~monster:holy-steed) from the Other World which is associated with the Deity that the Summoner worships.' },
    { name: 'Summon Holy Warrior', magnitude: 'Magnitude 3, Duration 1 Day<br/>[Religions: Various]', discipline: 'Divine Magic', description: 'This spell summons a Holy Warrior from the Other World which is associated with the Deity that the Summoner worships.' },
    { name: 'Sun Disc', magnitude: 1, discipline: 'Divine Magic', description: 'Creates disc of divine light.' },
    { name: 'Sunspear', magnitude: 'Instant, Magnitude 4, Ranged, Resist (Dodge)<br/>[Religions: Sun]', discipline: 'Divine Magic', description: 'This spell will only function in direct sunlight.' },
    { name: 'Sureshot', magnitude: 1, discipline: 'Divine Magic', description: 'Ensures next ranged attack hits.' },
    { name: 'Touch of Death', magnitude: 'Magnitude 4, Touch, Instant, Resist (Persistence)<br/>[Religions: Death]', discipline: 'Divine Magic', description: 'The caster must touch their victim and on a failed Persistence test the victim falls dead.' },
    { name: 'Treasury', magnitude: 'Magnitude 4, Duration 1 Day<br/>[Religions: Merchant]', discipline: 'Divine Magic', description: 'This spell creates a secure room, for one day, to store valuables.' },
    { name: 'True (Weapon)', magnitude: 1, discipline: 'Divine Magic', description: 'Enhances weapon with divine power.' },
    { name: 'War Effigy', magnitude: 'Magnitude 4, Resist (Persistence)<br/>[Religions: Trickster]', discipline: 'Divine Magic', description: 'This spell enchants a small wax representation of the intended victim.' },
    { name: 'Ward Camp', magnitude: 'Magnitude 2, Duration 8 Hours, Area<br/>[Religions: Merchant]', discipline: 'Divine Magic', description: 'This spell protects a camp with an area of 50 meters squared.' },
    { name: 'Whirlwind', magnitude: 'Magnitude 1, Progressive, Duration 15 Minutes<br/>[Religions: Storm]', discipline: 'Divine Magic', description: 'Each point of Magnitude of this spell whips up a whirlwind that is 10 metres tall and is capable of carrying 20 SIZ in its whirling vortex.' }
];



// Combine all powers for search
export const ALL_POWERS = [
    ...BATTLE_TECHNIQUES,
    ...FOLK_MAGIC_SPELLS,
    ...ARCANE_MAGIC_SPELLS,
    ...DIVINE_MAGIC_SPELLS
];
