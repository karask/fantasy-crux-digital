export const GM_TOOLS_DATA = {
    plunder: [
        { rating: 0, description: "Not a hoarder. No treasure whatsoever." },
        { rating: 1, description: "Chance hoarder. A couple of coppers, loose change (1D6 CPs). Very remote (05%) chance of a supernatural item." },
        { rating: 2, description: "Hoards enough for a rainy day. About 5D20 in SPs, 1D10 GPs. If supernatural, POW% chance of 1D4 Minor items." },
        { rating: 3, description: "Hoards for a better future. 5D100 in SPs, 3D20 in GPs. If supernatural, POWx2% chance of 1D4 Minor items." },
        { rating: 4, description: "Significant hoard. 10D100 SPs, 1D100 GPs. POWx3% of 1D6 Minor items and POW% chance of 1D4 Major items." },
        { rating: 5, description: "Treasure trove. Minor Lord wealth. ~1D6k SPs, 1D6 Minor items, POWx3% chance of 1D6 Major items." },
        { rating: 6, description: "Wealth of Kings (Dragon's Hoard). 1D4 Million SPs, 2D10 Minor, 1D8 Major, 1 unique item." }
    ],
    ships: [
        { type: "One-masted", crew: 10, cost: "5000 SP", man: "+20%", speed: "6 Knots", sp: 20, cargo: "8 Tons" },
        { type: "Two-masted", crew: 20, cost: "15000 SP", man: "-", speed: "5 Knots", sp: 40, cargo: "15 Tons" },
        { type: "Three-masted", crew: 30, cost: "50000 SP", man: "-20%", speed: "4 Knots", sp: 60, cargo: "30 Tons" }
    ],
    massCombat: {
        description: "Mass combat involves opposing Lore (Military Tactics) tests by commanders. A success inflicts casualties equal to half the force size on the enemy (50% death / 50% injury). Doubled on Critical.",
        modifiers: [
            { condition: "Better equipped than enemy", mod: "+1B" },
            { condition: "Better trained than enemy", mod: "+1B" },
            { condition: "Significant special forces (artillery, cavalry, mages)", mod: "+1B each" },
            { condition: "Outnumber enemy 2:1", mod: "+1B" },
            { condition: "Outnumber enemy 4:1", mod: "+2B" },
            { condition: "Enemy in defensive position", mod: "-1P" },
            { condition: "Enemy fortifications", mod: "-2P" },
            { condition: "PC Heroics (success/fail)", mod: "+1B / -1P" }
        ]
    },
    races: [
        {
            name: "Elves",
            stats: "Avg: STR 6, CON 8, DEX 10, SIZ 6, INT 10, POW 8, CHA 8.",
            traits: "Night Sight, Exceptional Archers. (Cost 3 IP each). Max DEX 27, STR 18."
        },
        {
            name: "Dwarves",
            stats: "Avg: STR 10, CON 12, DEX 6, SIZ 4, INT 8, POW 8, CHA 8.",
            traits: "Thermoception (4 IP), Earth Sense (2 IP). Max STR/CON 27."
        }
    ],
    archetypes: [
        {
            name: "Monk",
            description: "Uses Folk Magic discipline to emulate feats (Ki). Spells become 'Feats' like Ironmind, Flying Kick. Self-only range."
        }
    ],
    traits: [
        {
            name: "Spell-Like Ability (1/day)",
            cost: "3 IP per Magnitude",
            description: "Cast a Folk Magic spell once per day as a Combat Action without rolling Skill."
        },
        {
            name: "Permanent Effect",
            cost: "10 IP per Magnitude",
            description: "The spell effect is always active (at GM discretion)."
        }
    ],
    npcs: [
        { name: "Human Guard", desc: "Shortsword 1D6+1, Leather 2. Skills: Close Combat 50%, Perception 50%, Dodge 40%." },
        { name: "Elven Scholar", desc: "Dagger 1D4+1, 2gp, Amulet of Protection 2. Skills: Lore/Language 70%, Close Combat 40%, Persistence 60%." },
        { name: "Goblin Witch Doctor", desc: "Dagger 1D4+1; Spells: Heal, Scare, Sap Energy. Skills: Healing 60%, Casting 50%, Persistence 40%." }
    ],
    epic: [
        "Epic Hit Points: SIZ + CON",
        "Epic Characteristics: 35 points to allocate. Max +5 above racial avg.",
        "Epic Skills: Max increase 50 pts at creation. Master skills increase by 2%.",
        "Bonus: 6 extra IP at creation."
    ]
};
