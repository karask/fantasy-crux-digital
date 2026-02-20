export const POWERS_RULES = {
  "Battle": `
    <h3 class="section-header-large" style="margin-top: 1.5rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem;">Learning Battle</h3>
    <p>Characters learn Battle from other characters who know the practice. They need to have at least 51% to a combat skill and spend two Improvement Points to get access to the Battle discipline. Each technique is learnt separately.</p>

    <h3 class="section-header-large" style="margin-top: 1.5rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem;">Learning Techniques</h3>
    <p>Characters learn Battle Techniques from other characters who know the appropriate techniques. Learning techniques costs one Improvement Point per Magnitude point.</p>
    <p>The maximum number of Battle Techniques a character can learn is INT/2.</p>
    <p>Battle Techniques can be learnt from a number of sources. The most typical is from military academies but it can also be from the lone retired veteran.</p>
    <p>In each case the player character must be in good standing with the teacher before they will teach them a technique. If the teacher is indifferent to the player character to start with then they will first need to undertake some kind of service, which can be the focus of an adventure.</p>
    
    <div class="rpg-box" style="margin: 1.5rem 0; padding: 1rem; border: 1px solid var(--border-color); background: rgba(0,0,0,0.2);">
      <h4 style="margin-top: 0; color: var(--gold);">Optional: Self-taught</h4>
      <p style="margin-bottom: 0;">With enough perseverance a character can practice and learn new Battle Techniques by themselves but that will cost them double the Improvement Points normally required.</p>
    </div>

    <h3 class="section-header-large" style="margin-top: 1.5rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem;">Using Techniques</h3>
    <p>A character can use a technique freely as part of a combat action or reaction. Only a single Battle Technique can be used per combat round. Any Battle Technique needs to be declared before the appropriate dice is rolled.</p>
    <p>Applying a Battle Technique is always successful but you have to spend a number of Power Points equal to the Magnitude of the technique.</p>

    <h3 class="section-header-large" style="margin-top: 1.5rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem;">Techniques Traits</h3>
    <p>Unless otherwise stated all Techniques have the following traits.</p>
    <ul style="padding-left: 1.5rem; margin-bottom: 1.5rem;">
      <li>Are instant and apply only for the action or reaction that are rolled for.</li>
      <li>Can not be used in combination with special attacks like Great Attack, Disarming Attack, Aim, etc.</li>
      <li>Are Non-Variable; they can only be used at the specified Magnitude.</li>
    </ul>
  `,
  "Folk Magic": `
    <h3 class="section-header-large" style="margin-top: 1.5rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem;">Learning Folk Magic</h3>
    <p>Folk Magic Casting is treated as a skill. The base chance for Folk Magic Casting is POWx3. Spells are learnt separately, but the Folk Magic Casting skill determines the success for casting all Folk Magic spells. Characters learn Folk Magic from other characters who know the practice. It costs four Improvement Points to get access to the Magic discipline.</p>

    <h3 class="section-header-large" style="margin-top: 1.5rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem;">Learning Spells</h3>
    <p>Characters learn Folk Magic spells from other characters who know the appropriate spells. Learning spells costs one Improvement Point per Magnitude point. If a character knows a spell at a lower Magnitude, they only have to pay the difference in Improvement Points to gain the spell at a higher Magnitude.</p>
    <p>Folk Magic can be learnt from a number of sources. The most typical is from some kind of school of magic appropriate for the campaign or from remote hermits and otherworldly Shamans who commune with the Spirit World and learn its secrets. In some cases, it can be learnt from local priests who teach Folk Magic associated with their god's mythological exploits.</p>
    <p>In each case the player character must be in good standing with the teacher before they will teach them the spell. If the teacher is indifferent to the player character to start with then they will first need to undertake some kind of service, which can be the focus of an adventure.</p>

    <h3 class="section-header-large" style="margin-top: 1.5rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem;">Limits to Folk Magic</h3>
    <p>A character has a limit of their INTx2 in magnitude in spells. So a character with an INT of 10 can learn 20 worth of Magnitude spells.</p>
    <p>In addition, some Folk Magic spells are variable, which means that they can have a magnitude of anywhere from one to a maximum value of six.</p>

    <h3 class="section-header-large" style="margin-top: 1.5rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem;">Casting Spells</h3>
    <p>A character must be able to move his hands to make gestures, be able to chant and be able to see his target in order to cast a spell.</p>
    <p>When the character is casting a spell under duress, such as in the midst of combat, they must pass a Folk Magic Casting test to successfully cast the spell. In this regard Folk Magic is like any other skill. If the character is relaxed and has all the time in the world then no casting test is needed, the spell is automatically cast.</p>
    
    <p>The result of the Folk Magic casting test depends on its success:</p>
    <ul style="padding-left: 1.5rem; margin-bottom: 1.5rem;">
      <li><strong>Success:</strong> A number of Power Points are deducted from the spellcaster’s total, equal to the Magnitude of the spell. The spell then takes effect.</li>
      <li><strong>Failure:</strong> The spell does not take effect and the character loses one Power Point.</li>
      <li><strong>Critical:</strong> The caster has been able to control the flow of the magic particularly effectively. The character loses one Power Point instead of the normal cost of the spell or Gamemaster discretion.</li>
      <li><strong>Fumble:</strong> The caster has been unable to control the flow of the Folk Magic. Rather than losing a single Power Point for failing to cast the spell, the caster loses a number of Power Points equal to its Magnitude or Gamemaster discretion.</li>
    </ul>

    <h4 style="margin-top: 1rem; color: var(--gold);">Casting Time</h4>
    <p>No other action may be taken whilst casting a spell, though the character may slowly walk up to half their Movement while spell casting.</p>
    <p>Casting begins at the start of the combat round and a spell’s effect happens on the caster’s Combat Order.</p>
    <p>Distractions, or attacks on the caster as he casts, will automatically ruin the spell, unless the caster successfully passes a Persistence test, thereby maintaining concentration on the spell. Examples of distraction include blinding, disarming, or wounding the caster.</p>

    <h4 style="margin-top: 1rem; color: var(--gold);">Dismissing Spells</h4>
    <p>In a single Combat Round, a caster can dismiss any Permanent spell(s) he has cast, as a free action. Ceasing to cast a Concentration spell is immediate and not an action.</p>

    <h3 class="section-header-large" style="margin-top: 1.5rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem;">Spell Traits</h3>
    <p>Unless otherwise stated all Folk Magic spells have the following traits.</p>
    <ul style="padding-left: 1.5rem; margin-bottom: 1.5rem;">
      <li>They have Variable Magnitude. This means that the Magnitude of the spell starts from the stated Magnitude and then can be cast at a higher Magnitude, if the caster knows it, giving an increase in the effect of the spell.</li>
      <li>The Base Magnitude is one.</li>
      <li>Range is equal to the caster’s POWx3 in metres.</li>
      <li>They have a Duration of ten minutes.</li>
    </ul>

    <p>Other traits used by spells are detailed below.</p>
    <ul style="padding-left: 1.5rem; margin-bottom: 1.5rem;">
      <li><strong>Area (X):</strong> The spell affects all targets within a radius specified in metres.</li>
      <li><strong>Concentration:</strong> The spell’s effects will remain in place so long as the character continues to concentrate on it. Concentrating on a spell is functionally identical to casting the spell, requiring the caster to continue to chant and ignore distractions.</li>
      <li><strong>Instant:</strong> The spell’s effects take place instantly. The spell itself then disappears.</li>
      <li><strong>Magnitude (X):</strong> The strength and power of the spell. Also the minimum number of Power Points required to cast it.</li>
      <li><strong>Non-Variable:</strong> The spell may only be cast at the stated Magnitude.</li>
      <li><strong>Permanent:</strong> The spell’s effects remain in place until they are dispelled or dismissed.</li>
      <li><strong>Resist (Dodge/Persistence/Resilience):</strong> The spell’s intended effects do not succeed automatically. The target may make a Dodge, Persistence or Resilience test (as specified by the spell) in order to avoid the effect of the spell entirely. Note that Resist (Dodge) spells require the target to be able to use Reactions in order to Dodge. In the case of Area spells, the Resist (Dodge) trait requires the target to dive in order to mitigate the spell’s effect.</li>
      <li><strong>Touch:</strong> Touch spells require the character to actually touch his target for the spell to take effect, using a Unarmed skill test to make contact.</li>
      <li><strong>Trigger:</strong> The spell will lie dormant until an event stated in the description takes place. The spell then takes effect and is expended.</li>
    </ul>
  `,
  "Arcane Magic": `
    <h3 class="section-header-large" style="margin-top: 1.5rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem;">Arcane Magic Ranks</h3>
    <p>Some schools may have ranks but that will depend on the specific campaign. Regardless, the skill increase bestows certain benefits.</p>
    <ul style="padding-left: 1.5rem; margin-bottom: 1.5rem;">
      <li><strong>Apprentices:</strong> Students of Arcane Magic who will only know a couple of spells at an Arcane Magic Casting skill of 26% to 50%. Apprentices can spend two Improvement Points to create Arcane Crystals. An Arcane Crystal focuses up to one spell that the character knows per ten points of Arcane Magic Casting. These spells can be changed in the downtime between adventures, and have a star placed against the spell name on the character sheet to show they are focused. Spells that are focused by the Arcane Crystal increase the character’s Arcane Magic Casting (Bonus die (+1B) when used to all casting tests). The character is aware of where the Crystal is at all times and the enchantments placed upon it make it indestructible to non-magical means.</li>
      <li><strong>Mages:</strong> Graduates of the schools of wizardry or equivalent. They will know between five and ten spells, and will have an Arcane Magic Casting skill ranging from 51% to 90%. Mages can choose to spend two Improvements Points to create an Arcane Power Store item that allows storing up to POW additional Power Points. It can be any item, like a staff, medallion, ring, sword, etc. The character is aware of where this item is at all times and the enchantments placed upon the Arcane Power Store makes it indestructible to non-magical means.</li>
      <li><strong>Archmages:</strong> Acknowledged masters of Arcane Magic. They will have at least ten spells and an Arcane Magic Casting skill of 90%+. Archmages can choose to spend two additional Improvement Points to improve their Arcane Power Store item to store a maximum of POWx2 Power Points. An Archmage with Arcane Magic mastery can spend two Improvement Points to Transcend.</li>
    </ul>

    <h4 style="margin-top: 1rem; color: var(--gold);">Transcendence</h4>
    <p>The Archmage has such high knowledge of the laws of Arcane Magic that they are no longer part of the Real World. Their body changes from a physical one, based upon CON and SIZ with hit points, to one based on pure magical energy, based upon POW and power points.</p>
    <p><strong>Requirements:</strong> Arcane Magic Casting at 101%, POW at maximum (21 for humans), and Must know 10 different Arcane Magic spells.</p>
    <p><strong>Benefits:</strong></p>
    <ul style="padding-left: 1.5rem; margin-bottom: 1.5rem;">
      <li>They are immune to disease and poison, unless they specifically target POW or power points, and instead of taking damage to hit points, they take them to power points.</li>
      <li>Spells which heal a physical body, such as Heal, Treat Wounds, and Divine Heal, do not work on the Archmage’s new magical form. Instead, an Archmage will transfer stored power points, such as those held in their Arcane Power Store, back into their magical body. This takes one combat round and is an action that requires full concentration to complete.</li>
      <li>Defensive spells that protect against physical harm, such as Damage Resistance, still do so. As does physical armour, although an Archmage is more likely to use magical means to protect themselves.</li>
      <li>The character no longer ages physically and is considered immortal.</li>
    </ul>

    <h3 class="section-header-large" style="margin-top: 1.5rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem;">Learning Arcane Magic</h3>
    <p>Arcane Magic is governed by the Arcane Magic Casting skill. The base chance for Arcane Magic Casting is INT. Spells are learnt separately, but the Arcane Magic Casting skill determines the success for casting all Arcane Magic spells. Characters learn Arcane Magic from other characters who know the practice. It costs eight Improvement Points to get access to the Arcane Magic discipline. The character gains the Mystic Vision spell for free.</p>

    <h3 class="section-header-large" style="margin-top: 1.5rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem;">Learning Spells</h3>
    <p>Before a spell can be cast using Arcane Magic, the following process must be followed: The character must first learn the spell through research. In order to learn a particular Arcane Magic spell, the caster must possess the spell in written form or be taught by a teacher. In game terms this means having access to a teacher who knows the spell or a book or scroll where it is written down. The player then spends two Improvement Points and writes the spell down on their character sheet. Once the Arcane Magic spell has been learned, the character will be ready to try casting it.</p>

    <h3 class="section-header-large" style="margin-top: 1.5rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem;">Casting Spells</h3>
    <p>A character must be able to gesture with his hands, and be able to chant, in order to cast a spell. Whenever a spell is cast using Arcane Magic, there will always be a sight and sound that nearby creatures can detect, be it a flash of light, a crack of thunder, or a shimmering in the air. The exact effects are up to the Gamemaster and Player to decide, but will automatically be detected by any creatures within 10 metres per Magnitude of the spell.</p>
    <p>Casting an Arcane Magic spell requires a successful skill test using the Arcane Magic Casting skill. If successful, the spell takes effect. If the casting test fails, the spell does not take effect.</p>

    <h4 style="margin-top: 1rem; color: var(--gold);">Power Points</h4>
    <p>All Arcane Magic spells cost a base of one Power Point to cast. Arcane Magic spells can be modifying as the caster wishes (if he has the appropriate Power Points). If a Manipulation effect is applied to a spell, each effect costs one Power Point to apply.</p>
    <p>The result of the Arcane Magic casting test depends on its success:</p>
    <ul style="padding-left: 1.5rem; margin-bottom: 1.5rem;">
      <li><strong>Success:</strong> A number of Power Points are deducted from the spellcaster’s total, equal to the Manipulation effects Power Points plus one of the spell. The spell then takes effect.</li>
      <li><strong>Failure:</strong> The spell does not take effect and the character loses one Power Point for the base spell cost.</li>
      <li><strong>Critical:</strong> Any attempt to resist or counter the spell suffers a Penalty die (-1P). Moreover, only the base cost of one Power Point is lost (not for any Manipulations).</li>
      <li><strong>Fumble:</strong> The spell fails and the Arcane Magic user loses 1D6 Power Points in addition to normal Power Point loss.</li>
    </ul>

    <h4 style="margin-top: 1rem; color: var(--gold);">Casting Time</h4>
    <p>No other Combat Action may be taken while casting a spell, though the character may slowly walk up to half their Movement.</p>
    <p>A spell takes effect at the end of its casting, which starts at the beginning of the Combat Round and ends on the caster's Combat Order. Note that while spellcasting, a character will draw possible attacks from enemies they are adjacent to during a Combat Round.</p>
    <p>Distractions or attacks on the spellcaster as he casts will either automatically ruin the spell (if the spellcaster is blinded or suffers a Major Wound) or require Persistence tests for them to maintain concentration on the spell.</p>

    <h4 style="margin-top: 1rem; color: var(--gold);">Spell Manipulations</h4>
    <p>Arcane Magic spells have three basic effects which can be manipulated by the caster: Magnitude, Duration, and Range.</p>
    <p>Each effect has a default value which the spell can be cast at, costing one Power Point. The default value for the spell effects are: Magnitude 1, Duration 5 minutes, Range 10m.</p>
    <p>The tens value of the caster’s Arcane Magic Casting skill determines the max number of additional Power Points that can be spent on each of the manipulation types.</p>
    <p><em>Example: Lura casts Damage Boosting on Rurik’s sword, and wants it to be at a magnitude of 4 for an hour. She has an Arcane Magic Casting skill of 60%, which means she can spend an additional six Power Points on manipulating any spell’s effects. Lura can comfortably manage a Magnitude of 4, for three additional Power Points, and can manage a duration of an hour with another three points.</em></p>

    <h4 style="margin-top: 1rem; color: var(--gold);">Dismissing Spells</h4>
    <p>In a single Combat Round, a caster can dismiss any Permanent spell(s) he has cast, as a free action. Ceasing to cast a Concentration spell is immediate and not an action.</p>

    <h3 class="section-header-large" style="margin-top: 1.5rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem;">Spell Traits</h3>
    <p>All Arcane Magic spells share the same basic qualities:</p>
    <ul style="padding-left: 1.5rem; margin-bottom: 1.5rem;">
      <li>Base Magnitude of one</li>
      <li>Duration of 5 minutes, and</li>
      <li>Range of 10 metres.</li>
    </ul>
    <p>Other traits used by spells are detailed below.</p>
    <ul style="padding-left: 1.5rem; margin-bottom: 1.5rem;">
      <li><strong>Concentration:</strong> The spell’s effects will remain in place as long as the character concentrates on it. Concentrating on a spell is functionally identical to casting the spell, requiring the spell caster to continue to gesture with both arms, chant and ignore distractions. This trait overrides the normal Arcane Magic spell default Duration.</li>
      <li><strong>Instant:</strong> The spell’s effects take place instantly. The spell itself then disappears. This trait overrides the normal Arcane Magic spell default Duration.</li>
      <li><strong>Permanent:</strong> The spell’s effects remain in place until they are dispelled or dismissed. This trait overrides the normal Arcane Magic spell default Duration.</li>
      <li><strong>Resist (Dodge/Persistence/Resilience):</strong> The spell’s intended effects do not succeed automatically. The target may make a Dodge, Persistence or Resilience test (as specified by the spell) in order to avoid the effect of the spell entirely. Note that Resist (Dodge) spells require the target to be able to use Reactions in order to Dodge. In the case of Area spells, the Resist (Dodge) trait requires the target to dive in order to mitigate the spell’s effect.</li>
      <li><strong>Touch:</strong> Touch spells require the character to actually touch his target for the spell to take effect, using an Unarmed skill test to make contact.</li>
    </ul>
  `,
  "Divine Magic": `
    <h3 class="section-header-large" style="margin-top: 1.5rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem;">Religions</h3>
    <p>Religions range in size from a handful of worshippers, meeting in secret to honour a dead hero of the revolution, to the millions of devotees of a world spanning sun god. There are temples where worshippers can learn Divine Magic directly from their Deity. They have rules and expectations of their worshippers and anyone found wanting is expelled from the comfort and support of the religion.</p>

    <h4 style="margin-top: 1rem; color: var(--gold);">Religion Template</h4>
    <p>Each religion is described using the following Religion format.</p>
    <ul style="padding-left: 1.5rem; margin-bottom: 1.5rem;">
      <li><strong>Name of God or Religion</strong></li>
      <li><strong>Short description:</strong> This short description briefly covers the religion’s mythology and its current place in the world.</li>
      <li><strong>Type of Religion:</strong> This is the type and size of religion. Great Deities are worshipped by millions and are at least acknowledged across the entire world. Major Deities are important in a specific region and have hundreds of thousands of worshipers. Minor Deities are usually the minor members of a religious pantheon appealing to a small group of specialist worshipers. Hero Religions worship dead heroes whose deeds and magic powers live on after their death.</li>
      <li><strong>Worshippers:</strong> The type of people who typically make up the religion membership.</li>
      <li><strong>Worshipper Duties:</strong> This is what the god and religion expect of its members. Break these rules and expect expulsion. On the other hand, follow these rules and promote them to others and the character will advance in the religion’s hierarchy.</li>
      <li><strong>Religion skills:</strong> These are skills favoured by the religion’s patron Deity and taught to its worshippers by its Priests.</li>
      <li><strong>Religion spells:</strong> Divine Magic that the god teaches.</li>
      <li><strong>Special benefits:</strong> Any bonuses to skill use or other special abilities or advantages that a worshipper gains by being a member of the religion.</li>
    </ul>

    <h4 style="margin-top: 1rem; color: var(--gold);">Worshipper Duties</h4>
    <p>Each religion has a set of Worshipper Duties which represent the religion’s objectives in the world. When a character does an action that fulfils one of the Worshipper Duties they gain one Improvement Point for a minor act and up to three points for a major act. When a character does an action that goes against one of the Worshipper Duties they lose between one and three Improvement Points, depending on the grievousness of their transgression. If they have no Improvement Points left, then they start to lose Divine Magic spells learnt from the religion as a penance, on a one to one basis.</p>

    <h3 class="section-header-large" style="margin-top: 1.5rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem;">Religion Ranks</h3>
    <p>There are four ranks of membership: Lay members, Initiates, Priests and Holy Warriors.</p>
    <ul style="padding-left: 1.5rem; margin-bottom: 1.5rem;">
      <li><strong>Lay members:</strong> Lay members are normal worshippers of the religion. They regularly attend the temple on holy days and do their best to uphold the strictures of the religion. To become a lay member of a religion a character must have Lore (Religion) of at least 20%.</li>
      <li><strong>Initiates:</strong> Initiates are worshippers who have dedicated their lives to the tenents of the religion. They always attend the temple on holy days and always uphold the strictures of the religion. Initiates can learn up to 2 Magnitude of any Divine Magic spell available to the religion. To become an Initiate a member of a religion needs a Lore (Religion) of at least 40% and must spend two Improvement Points.</li>
      <li><strong>Priests:</strong> Priests are the living embodiment of their faith, instructed by their Deity to be its living representative in the mortal world. They lead the services for their temple on holy days. To become a Priest a character must have a Lore (Religion) and two of the cult skills at least 75%, there must be a vacancy in the temple hierarchy, or the Priest be willing to become a missionary and establish a new temple. In addition the Player must pay five Improvement Points. Upon becoming a Priest the character gains an Allied Spirit.</li>
      <li><strong>Holy Warriors:</strong> These are Holy Warriors who protect the temples and worshipers of their Deity. These warriors ceaselessly crusade to protect the faithful and punish the Religion’s enemies. The minimum requirement is to have Lore (Religion) of at least 50% and a Weapon Skill of 75% in the Religion’s holy weapon. The Player must pay five Improvement Points. They are gifted a specially consecrated weapon (+1B, double damage vs enemies), and magically blessed armour with double the normal AP.</li>
    </ul>

    <h3 class="section-header-large" style="margin-top: 1.5rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem;">Deity Examples</h3>
    <ul style="padding-left: 1.5rem; margin-bottom: 1.5rem;">
      <li><strong>The Night Mistress:</strong> Monsters of the Underdark, Thieves, Outcasts from society.</li>
      <li><strong>The Sun King:</strong> Emperors, Charismatic Leaders.</li>
      <li><strong>The Sky Lord:</strong> Barbarians.</li>
      <li><strong>The Earth Mother:</strong> People and creatures who live off the land (Peasants, Woodsmen, Elves, Satyrs, Fey).</li>
      <li><strong>The Death Goddess:</strong> The morbidly insane, Mercenaries, Graveyard attendants, Assassins.</li>
      <li><strong>The Lord of Knowledge:</strong> Explorers, Librarians, Scholars, Detectives.</li>
      <li><strong>The Trickster:</strong> Thieves, Village idiots, non-conformists.</li>
      <li><strong>The Merchant:</strong> Merchants, Heralds, Traders, Shopkeepers.</li>
      <li><strong>The Hearth Goddess:</strong> House keepers and owners.</li>
      <li><strong>The Lord of War:</strong> Generals, soldiers.</li>
      <li><strong>The Healer Goddess:</strong> Healers, Doctors.</li>
      <li><strong>The Sea Goddess:</strong> Sailors, fishermen, mermen, creatures of the sea.</li>
      <li><strong>Chaos:</strong> The insane, its foul monstrous spawn.</li>
      <li><strong>The Moon Hag:</strong> Magicians, Astronomers.</li>
      <li><strong>The Huntress:</strong> Hunters, Big Game Hunters.</li>
    </ul>

    <h3 class="section-header-large" style="margin-top: 1.5rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem;">Learning Divine Magic</h3>
    <p>Divine Magic can be taught only to members of a religion with an appropriate Lore (Religion) skill and be of Initiate, Priest or Holy Warrior status (each rank requiring Improvement Points).</p>

    <h3 class="section-header-large" style="margin-top: 1.5rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem;">Learning Spells</h3>
    <p>A character with access to the Divine Magic discipline can learn new spells by paying a cost in Improvement Points, equal to twice the Magnitude of the spell, to the Deity. This may be done in an incremental fashion, i.e. the player buys Shield 1 for two Improvement Points and then later increases this to Shield 3, by spending an additional four points. These points are not regained, even when the character leaves the religion.</p>

    <h3 class="section-header-large" style="margin-top: 1.5rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem;">Casting Spells</h3>
    <p>A character must be able to gesture with his hands and be able to chant in order to cast a spell. Whenever a spell is cast using Divine Magic, there will always be a sight and sound that nearby creatures can detect, be it a flash of light, a crack of thunder or a shimmering in the air. The exact effects, are up to the Gamemaster and Player to decide but will automatically be detected by any creatures within ten times the Magnitude of the spell, in metres.</p>
    <p>Casting Divine Magic is automatically successful. No dice need be rolled, no chances of a fumble or critical either.</p>

    <h4 style="margin-top: 1rem; color: var(--gold);">Power Points</h4>
    <p>Divine Magic does not cost any Power Points when it is cast.</p>

    <h4 style="margin-top: 1rem; color: var(--gold);">Casting Time</h4>
    <p>Divine Magic spells always take only a single combat Action to cast and takes place on the Combat Order of the character casting the spell. Distractions or attacks on the spellcaster as he casts will either automatically ruin the spell (if the spellcaster is blinded or disarmed, or suffers a Major Wound) or require Persistence tests for them to maintain concentration on the spell.</p>

    <h4 style="margin-top: 1rem; color: var(--gold);">Regaining Cast Divine Magic</h4>
    <p>Each Divine Magic spell may be cast only once, after which the character must return to a temple and pray or take part in a worshiping ceremony on the religion’s holy day to regain use of the spell. Thus, normally, Divine Magic is regained during the downtime between adventures. In-game characters may regain Divine Magic by one of two ways: Each time the character successfully performs a worshipper duty, the character regains the choice of one of their spent spells. They may also call on their deity and spend a Hero Point to regain a spent spell of their choosing.</p>

    <h4 style="margin-top: 1rem; color: var(--gold);">Limitations & Details</h4>
    <ul style="padding-left: 1.5rem; margin-bottom: 1.5rem;">
      <li><strong>Limitations:</strong> Divine Magic spells do not stack, i.e. Shield 1 plus Shield 2 does not give the protection of a Shield 3 spell.</li>
      <li><strong>Dismissing Spells:</strong> A caster can dismiss any Permanent or Duration Divine Magic spell(s) he has cast as a single combat action. Ceasing to cast a Concentration spell is immediate and not a Combat Action.</li>
      <li><strong>Splitting Magnitude:</strong> Divine Magic allows the caster to ‘split’ a spell’s Magnitude into multiple spells.</li>
      <li><strong>The Power of Divine Magic:</strong> When in a direct contest with other forms of magic, Divine Magic is considered to have double its normal Magnitude.</li>
    </ul>

    <h3 class="section-header-large" style="margin-top: 1.5rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem;">Divine Intervention</h3>
    <p>A character who is an Initiate, or higher, can call upon his Deity for Divine Intervention whenever he faces a desperate situation. He may even do so if dead or unconscious, as long as it is called for in the instant that consciousness fades or death occurs. When Divine Intervention is requested, roll 1D100. If this roll is equal to or less than the character’s POW, the call for aid is answered. However, the gods demand a heavy price for their help and the character will suffer a permanent loss of POW equal to the 1D100 roll, if they are successful. If the character’s POW is reduced to 0 by this, their soul is taken to serve the god directly, effectively killing the character permanently (though their request will still be granted).</p>
    <p>A character can only call for Divine Intervention once per month, whether he is successful or not.</p>

    <h3 class="section-header-large" style="margin-top: 1.5rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem;">Spell Traits</h3>
    <p>The traits used by Divine Magic spells are detailed below.</p>
    <ul style="padding-left: 1.5rem; margin-bottom: 1.5rem;">
      <li><strong>Area (X):</strong> The spell affects all targets within a radius specified in metres.</li>
      <li><strong>Concentration:</strong> The spell’s effects will remain in place so long as the character concentrates on it.</li>
      <li><strong>Duration (X):</strong> The spell’s effects will stay in place for the number of minutes indicated. Unless otherwise specified this will be 15 minutes.</li>
      <li><strong>Instant:</strong> The spell’s effects take place instantly. The spell itself then disappears.</li>
      <li><strong>Magnitude (X):</strong> The strength and power of the spell.</li>
      <li><strong>Permanent:</strong> The spell’s effects remain in place until they are dispelled or dismissed.</li>
      <li><strong>Progressive:</strong> This indicates that the spell can be learnt and cast at greater levels of Magnitude than the minimum.</li>
      <li><strong>Ranged:</strong> Ranged spells may be cast upon targets up to a maximum distance of the character’s POW x 5 in metres.</li>
      <li><strong>Resist (Dodge/Persistence/Resilience):</strong> The spell’s effects do not take effect automatically.</li>
      <li><strong>Touch:</strong> Touch spells require the character to actually touch his target for the spell to take effect.</li>
      <li><strong>Religion:</strong> The type of religion that offers this spell to its worshippers.</li>
    </ul>
  `
};
