export const FULL_SKILLS = [
    {
        name: "Athletics",
        category: "Practical",
        description: `(DEX+STR) This broad skill covers a range of athletic activities useful to adventuring characters, including acrobatics, climbing, jumping and swimming.

**Acrobatics:** This allows a character to perform a variety of gymnastic and balancing tasks, such as tumbling, walking a tightrope or keeping balance on a narrow or unstable ledge. The character can move at half their normal speed across an unstable surface without penalty. To move at a normal rate requires an Acrobatics test. A successful Acrobatics test will also halve the damage suffered from falling.

**Brute Force:** Brute force is a particular application of Athletics that relies purely on power, with no finesse involved. Brute force basically involves pushing, lifting or dragging.

**Climbing:** Given enough hand and footholds, a character can climb any surface given enough time without the need for a test. Under normal circumstances, a character can climb or descend one quarter of their Movement per Combat Round. A character can double the rate of their climb or descent by making a Hard Athletics test.

**Jumping:** In general, a successful Athletics test allows a character to jump up to twice their own height horizontally or up to half his own height vertically, as long as he has at least five metres to run first. If they are making a standing jump these distances are halved. A cumulative Penalty die (-1P) is bestowed for every extra metre the character is trying to jump.

**Swimming:** Characters normally swim at half their usual Movement. Athletics tests are only required when conditions are less than ideal – swimming while heavily encumbered or in strong currents for example.`
    },
    {
        name: "Close Combat",
        category: "Combat",
        description: `(DEX+STR) This skill deals with the art of hitting things and defending the character with melee weapons, such as swords, clubs, spears, polearms and shields.`
    },
    {
        name: "Craft",
        category: "Practical",
        description: `(INT+10) The Craft skill is actually several separate skills (such as armourer, baker, basket weaver, blacksmith, bowyer, brewer, butcher etc) grouped under a single heading which must be improved separately. It measures the character’s ability to make and repair items. As a very rough guide it takes one day per 50 SP to produce an item. The base cost of the item, in materials needed, is 50% of the listed finished cost.`
    },
    {
        name: "Culture",
        category: "Knowledge",
        description: `(INT+10/INT) Each Culture skill is used to provide information about the common world view of that group of people (or creatures). This includes history, politics, weather cycles, geography, superstitions and popular mythology. Culture (Own) is the world view of the people that the character is born into, which is why the character gets a +10. All other foreign or alien cultures are Culture (Other).`
    },
    {
        name: "Deception",
        category: "Practical",
        description: `(DEX+INT) Deception covers the arts of:

**Disguise:** used to change a character’s appearance and adopt a different outward persona.

**Sleight:** used to hide or take objects, without drawing undue attention.

**Stealth:** used whenever a character attempts to personally evade detection by another character. This usually happens when a character either tries to move quietly past an enemy, hide from one, or performs a combination of both.

These tests are opposed by the Perception skill.`
    },
    {
        name: "Dodge",
        category: "Resistances",
        description: `(DEX+10) The Dodge skill is used to avoid incoming objects that are swung or thrown at the character. The Dodge skill is normally used when a character attempts to dodge an incoming blow in combat or a physical hazard that can be avoided, such as falling masonry.`
    },
    {
        name: "Driving",
        category: "Practical",
        description: `(DEX+INT) If a character is driving a wagon, chariot or similar vehicle at not more than walking pace across flat terrain, a Driving skill test will never be required. Skill tests are required when a character wants to do something out of the ordinary with a vehicle, such as traverse treacherous terrain, jump obstacles and so on.`
    },
    {
        name: "Engineering",
        category: "Practical",
        description: `(INT+10) This skill is used to design, build, activate, repair, sabotage or disassemble large mechanisms or constructs such as siege machines, city gates and drawbridges, mine-shafts, sailing ships and so forth.`
    },
    {
        name: "Healing",
        category: "Practical",
        description: `(INT+10) Use of this skill without a healer’s kit incurs a two Penalty dice (-2P). Each use of the Healing skill generally takes a few minutes to perform.

**Unconsciousness:** A successful Healing test can revive a character from unconsciousness.

**Minor Injury:** A successful Healing test on a Minor Injury will heal 1D4 Hit Points.

**Stabilise Major Wound:** A successful Healing test on a Major Wound will not restore the lost Hit Points. This Healing merely stabilises the patient enough so that they will not die of blood loss.

**Curing Diseases:** A successful Healing test allows a diseased patient to add a bonus to his next opposed test of Resilience versus disease Potency to resist the disease.

**Curing Poisons:** A successful Healing test allows a poisoned patient to attempt a second opposed test of Resilience versus poison Potency.

**Surgery:** Other than magical healing, successful Surgery is the only way that a character can recover from a Major Wound. Once a successful Healing test has been made to quench the bleeding of a Major Wound, a successful Healing test can attempt to set broken bones, stitch together rent flesh and restore the wound location so that it is on the road to recovery.`

    },
    {
        name: "Influence",
        category: "Practical",
        description: `(CHA+10) This is the art of verbally persuading another character to do what you want. Characters can use both logical and/or emotional arguments. if successful in an opposed skill test, the character’s audience is temporarily swayed in favour of the character’s argument. Influence can never be used to get a character to act against their instinct for self-preservation. Influence skill tests are normally opposed by a Perception, Persistence or Influence skill.`
    },
    {
        name: "Language",
        category: "Knowledge",
        description: `(INT+50/INT) The Language skill is a separate skill for each language the character knows. Their native language gets a +50%. Every character with a Language skill of 50% or more is fluent in that language, although they are likely to have an accent if it is not their native language.`
    },
    {
        name: "Lore",
        category: "Knowledge",
        description: `(INT) The Lore skill is actually an umbrella term for several different skills, each of which must be improved separately. Each Lore skill defines an area of knowledge for the character. Possible Lores is only limited by a player’s imagination. Examples: alchemy, art, astronomy, gambling, geography, heraldry, law, logistics, military tactics, philosophy, poisons.`
    },
    {
        name: "Mechanisms",
        category: "Practical",
        description: `(DEX+INT) Usually, a character will simply make a Mechanisms test in order to succeed at assembling or disassembling a device, with appropriate bonuses or penalties decided upon by the Gamemaster. Mechanisms is also used for picking a lock or disassembling a trap. This usually takes at least one minute (12 Combat Rounds) to perform.`
    },
    {
        name: "Natural Lore",
        category: "Knowledge",
        description: `(INT+10) Broadly speaking this Lore deals with the character’s knowledge of the natural world.

**Animal:** This covers the ability to recognise an animal, know its feeding habits, breeding cycle, habitats and so on. A character with a skill of at least 50% may try to domesticate a wild animal.

**Plant:** A character can identify plants in the wild, discover good places to grow crops, decide which plants are edible and what unusual properties they may possess.

**Mineral:** This skill allows the character to detect precious metals and stones, detect fault lines and other dangerous features in the rock.

**Survival:** One Survival test will be required every day that a character lacks either food, water or a safe place to sleep.

**Tracking:** A character can track in the wilderness and is able to locate the tracks of a specific creature and follow them.

**Weather:** The character can predict basic changes in the weather.`
    },
    {
        name: "Perception",
        category: "Practical",
        description: `(INT+POW) The Perception skill is used to represent the five senses of the character when detecting objects or other characters. For example, a common use of the Perception skill is as a straight skill test to detect hidden objects in a room, or as an opposed test to detect a hidden character.`
    },
    {
        name: "Performance",
        category: "Practical",
        description: `(CHA+10) A successful test with this skill will result in the audience or partner being pleased by the character’s performance. This skill covers acting, composing poetry, dancing, singing, readings and playing an instrument.`
    },
    {
        name: "Persistence",
        category: "Resistances",
        description: `(POW+10) Persistence represents a character’s mental willpower. It is used to resist the effects of magic and often against another character’s attempt to use the Influence skill against them.`
    },
    {
        name: "Ranged Combat",
        category: "Combat",
        description: `(DEX+INT) This skill covers the use of missile weapons, such as bows, crossbows, thrown spears and thrown daggers.`
    },
    {
        name: "Resilience",
        category: "Resistances",
        description: `(CON+POW) This is a measure of how physically tough a character is. The higher a character’s Resilience, the more likely they are to handle adverse physical conditions, such as weathering a vicious sandstorm, surviving in a drought, or overcoming the effects of poison or disease.`
    },
    {
        name: "Riding",
        category: "Practical",
        description: `(DEX+POW) If a character is riding a creature with the help of saddle and stirrups, at not more than a walking pace across flat terrain, then a Riding test will never be required. Tests are required when a character wants to do something out of the ordinary with a mount – such as traverse treacherous terrain, jump obstacles, ride bareback and so on.`
    },
    {
        name: "Sailing",
        category: "Practical",
        description: `(DEX+INT) This covers small water-borne craft propelled manually by oars or paddles, commonly known as boats, and larger craft powered by sail or rows of oars. Travelling across calm water does not usually require a skill test but adverse conditions such as currents and weather can bestow penalties.`
    },
    {
        name: "Streetwise",
        category: "Practical",
        description: `(CHA+POW) Streetwise allows a character to find fences for stolen goods, black markets and general information. Such uses of Streetwise normally require a minimum of 1D4 hours. Streetwise also covers following people down crowded city streets without them being noticed.`
    },
    {
        name: "Trade",
        category: "Practical",
        description: `(INT+10) This skill is primarily used when characters trade, barter or otherwise negotiate over the sale of goods. In such transactions a successful Opposed Test using the Trade of the buyer versus the Trade of the seller is needed for the buyer to get the best deal. The Trade skill also enables the character to determine the value placed on something by others; estimating its market value.`
    },
    {
        name: "Unarmed Combat",
        category: "Combat",
        description: `(DEX+STR) This skill covers the use of natural attacks. For humans this is punching and kicking (1D3 damage) as well as grappling. Non-human characters may also have bite, horns, claw and tail attacks.`
    }
];
