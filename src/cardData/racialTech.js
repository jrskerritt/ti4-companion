
const mirrorComputing = {
    name: 'Mirror Computing',
    value: 'When you spend trade goods, each trade good is worth 2 resources or influence instead of 1.',
    req: 'YYY'
}

const salvageOperations = {
    name: 'Salvage Operation',
    value: 'After you win or lose a space combat, gain 1 trade good; if you won the combat, you may also produce 1 ship in that system of any ship type that was destroyed during the combat.',
    req: 'YY'
}

const mageonImplants = {
    name: 'Mageon Implants',
    value: 'ACTION: Exhaust this card to look at another player’s hand of action cards. Choose 1 of those cards and add it to your hand.',
    req: 'GGG'
}

const transparasteelPlating = {
    name: 'Transparasteel Plating',
    value: 'During your turn of the action phase, players that have passed cannot play action cards.',
    req: 'G'
}

const quantumDatahubNode = {
    name: 'Quantum Datahub Node',
    value: 'At the end of the strategy phase, you may spend 1 token from your strategy pool and give another player 3 of your trade goods. If you do, give 1 of your strategy cards to that player, and take 1 of his strategy cards.',
    req: 'YYY'
}

const productionBiomes = {
    name: 'Production Biomes',
    value: 'ACTION: Exhaust this card and spend 1 token from your strategy pool to gain 4 trade goods and choose 1 other player; that player gains 2 trade goods.',
    req: 'GG'
}

const yinSpinner = {
    name: 'Yin Spinner',
    value: 'After 1 or more of your units use PRODUCTION, place 1 infantry from your reinforcements on a planet you control in that system.',
    req: 'GG'
}

const impulseCore = {
    name: 'Impulse Core',
    value: 'At the start of a space combat, you may destroy 1 of your cruisers or destroyers in the active system to produce 1 hit against your opponent’s ships; that hit must be assigned by your opponent to 1 of his non-fighter ships if able.',
    req: 'YY'
}

const lazaxGateFolding = {
    name: 'Lazax Gate Folding',
    value: 'During your tactical actions, if you do not control Mecatol Rex, treat its system as if it contains both an alpha and beta wormhole. ACTION: If you control Mecatol Rex, exhaust this card to place 1 infantry from your reinforcements on Mecatol Rex.',
    req: 'BB'
}

const hegemonicTradePolicy = {
    name: 'Hegemonic Trade Policy',
    value: 'Exhaust this card when 1 or more of your units uses PRODUCTION; swap the resource and influence values of 1 planet you control until the end of your turn.',
    req: 'YY'
}

const valefarAssimilatorYandX = {
    name: 'Valefar Assimilator Y and X',
    value: 'When you would gain another player’s technology using one of your faction abilities, you may place the (Y or X) assimilator token on a faction technology owned by that player instead. While that token is on a technology, this card gains that technology’s text. You cannot place an assimilator token on technology that already has an assimilator token.',
    req: null
}

const l4Disruptors = {
    name: 'L4 Disruptors',
    value: 'During an invasion, units cannot use SPACE CANNON against your units.',
    req: 'Y'
}

const nonEuclideanShielding = {
    name: 'Non-Euclidean Shielding',
    value: 'When 1 of your units uses SUSTAIN DAMAGE, cancel 2 hits instead of 1.',
    req: 'RR'
}

const spacialConduitCylinder = {
    name: 'Spacial Conduit Cylinder',
    value: 'You may exhaust this card after you activate a system that contains 1 or more of your units; that system is adjacent to all other systems that contain 1 or more of your units during this activation.',
    req: 'BB'
}

const eResSiphons = {
    name: 'E-Res Siphons',
    value: 'After another player activates a system that contains 1 or more of your ships, gain 4 trade goods.',
    req: 'YY'
}

const specOps2 = {
    name: 'Spec Ops 2',
    value: 'After this unit is destroyed, roll 1 die. If the result is 5 or greater, place the unit on this card. At the start of your next turn, place each unit that is on this card on a planet you control in your home system. Cost: 1 / 2 Combat: 6',
    req: 'GG'
}

const advancedCarrier2 = {
    name: 'Advanced Carrier 2', 
    value: 'Can now Sustain Damage, Cost: 3 Combat: 9, Move: 2, Cap: 8',
    req: 'BB'
}

const hybridCrystalFighter2 = {
    name: 'Hybrid Crystal Fighter 2',
    value: 'This unit may move without being transported. Each fighter in excess of your ships’ capacity counts as ½ of a ship against your fleet pool. Cost: 1 / 2 Combat: 7 Move: 2',
    req: 'GB'
}

const neuroglaive = {
    name: 'Neuroglaive',
    value: 'After another player activates a system that contains 1 or more of your ships, that player removes 1 token from his fleet pool and returns it to his reinforcements.',
    req: 'GGG'
}

const superDreadnuaght2 = {
    name: 'Super Dreadnuaght 2',
    value: 'This unit cannot be destroyed by “Direct Hit” action cards. Can now Sustain Damage -Bombardment 4, Cost: 4 Combat: 4 Move:2 Cap: 2',
    req: 'BBY'
}

const inheritanceSystems = {
    name: 'Inheritance Systems',
    value: 'You may exhaust this card and spend 2 resources when you research a technology; ignore all of that technology’s prerequisites.',
    req: 'YY'
}

const letaniWarrior2 = {
    name: 'Letani Warrior 2',
    value: 'After this unit is destroyed, roll 1 die. If the result is 6 or greater, place the unit on this card. At the start of your next turn, place each unit that is on this card on a planet you control in your home system. -PRODUCTION 2, Cost: 1 / 2 Combat: 7',
    req: 'GG'
}

const bioplasmosis = {
    name: 'Bioplasmosis',
    value: 'At the end of the status phase, you may remove any number of infantry from the planets you control and place them on 1 or more planets you control in the same or adjacent systems.',
    req: 'GG'
}

const exotrireme2 = {
    name: 'Exotrireme 2',
    value: 'This unit cannot be destroyed by “Direct Hit” action cards. After a round of space combat, you may destroy this unit to destroy up to 2 ships in this system. -Sustain Damage -Bombardment 4 (x2) Cost: 4 Combat: 5 Move: 2 Cap: 1',
    req: 'BBY'
}

const valkyrieParticleWeave = {
    name: 'Valkyrie Particle Weave',
    value: 'After making combat rolls during a ground combat, if your opponent produced 1 or more hits, you produce 1 additional hit.',
    req: 'RR'
}

const prototypeWarSun2 = {
    name: 'Prototype War Sun 2',
    value: 'Other players’ units in this system lose PLANETARY SHIELD. -Sustain Damage -Bombardment 3 (x3) Cost: 10 Combat: 3 (x3) Move: 3 Capacity: 6',
    req: 'YRRR'
}

const magmusReactor = {
    name: 'Magmus Reactor',
    value: 'Your ships can move into supernovas. After 1 or more of your units use PRODUCTION in a system that either contains a war sun or is adjacent to a supernova, gain 1 trade good.',
    req: 'RR'
}

const chaosMapping = {
    name: 'Chaos Mapping',
    value: 'Other players cannot activate asteroid fields that contain 1 or more of your ships. At the start of your turn during the action phase, you may produce 1 unit in a system that contains at least 1 of your units that has PRODUCTION.',
    req: 'B'
}

const floatingFactory = {
    name: 'Floating Factory',
    value: 'This unit is placed in a space area instead of on a planet. This unit can move and retreat as if it were a ship. If this unit is blockaded, it is destroyed. -Production 7 Move: 2 Capacity: 5',
    req: 'YY'
}

const wormholeGenerator = {
    name: 'Wormhole Generator',
    value: 'At the start of the status phase, place or move a Creuss wormhole token into either a system that contains a planet you control or a non-home planet that does not contain another player’s ships.',
    req: 'BB'
}

const dimensionalSplicer = {
    name: 'Dimensional Splicer',
    value: 'At the start of a space combat in a system that contains a wormhole and 1 or more of your ships, you may produce 1 hit and assign it to one of your opponents ships.',
    req: 'R'
}

const instinctTraining = {
    name: 'Instinct Training',
    value: 'You may exhaust this card and spend 1 token from your strategy pool when another player plays an action card; cancel that action card.',
    req: 'G'
}

const nullificationField = {
    name: 'Nullification Field',
    value: 'After another player activates a system that contains 1 or more of your ships, you may exhaust this card and spend 1 token from your strategy pool; immediately end that player’s turn.',
    req: 'YY'
}

export const xxchaKingdom = {
    0: instinctTraining,
    1: nullificationField
}

export const ghostsOfCreuss = {
    0: dimensionalSplicer,
    1: wormholeGenerator
}

export const clanOfSaar = {
    0: chaosMapping,
    1: floatingFactory
}

export const embersOfMuaat = {
    0: magmusReactor,
    1: prototypeWarSun2
}

export const sardakkNorr = {
    0: valkyrieParticleWeave,
    1: exotrireme2
}

export const arborec = {
    0: letaniWarrior2,
    1: bioplasmosis
}

export const lizixMindset = {
    0: inheritanceSystems,
    1: superDreadnuaght2
}

export const naalu = {
    0: hybridCrystalFighter2,
    1: neuroglaive
}

export const federationOfSol = {
    0: specOps2,
    1: advancedCarrier2
}

export const universitiesOfJolNar = {
    0: spacialConduitCylinder,
    1: eResSiphons
}

export const baronyOfLetnev = {
    0: l4Disruptors,
    1: nonEuclideanShielding
}

export const nekroVirus = {
    0: valefarAssimilatorYandX
}

export const winnu = {
    0: hegemonicTradePolicy,
    1: lazaxGateFolding
}

export const yinBrotherhood = {
    0: impulseCore,
    1: yinSpinner
}

export const emiratesOfHacan = {
    0: productionBiomes,
    1: quantumDatahubNode
}

export const yssarilTribes = {
    0: transparasteelPlating,
    1: mageonImplants
}

export const mentakCoalition = {
    0: salvageOperations,
    1: mirrorComputing
}