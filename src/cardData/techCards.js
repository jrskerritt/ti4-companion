
const antiMassDeflectors = {
    name: 'Antimass Deflectors',
    value: 'Your ships can move into and through asteroid fields. When other players’ units use SPACE CANNON against your units, apply -1 to the result of each die roll'
}

const gravityDrive = {
    name: 'Gravity Drive',
    value: 'After you activate a system, apply +1 to the move value of 1 of your ships during this tactical action'
}

const fleetLogistics = {
    name: 'Fleet Logistics',
    value: 'During each of your turns of the action phase, you may perform 2 actions instead of 1'
}

const lightWaveDeflector = {
    name: 'Light / Wave Deflector',
    value: 'Your ships can move through systems that contain other player’s ships'
}

const sarweenTools = {
    name: 'Sarween Tools',
    value: 'When 1 or more of your units use PRODUCTION, reduce the combined cost of the produced units by 1.'
}

const gravitonLaserSystem = {
    name: 'Graviton Laser System',
    value: 'You may exhaust this card before 1 or more of your units uses SPACE CANNON; hits produced by those units must be assigned to non-fighter ships if able.'
}

const transitDiodes = {
    name: 'Transit Diodes',
    value: 'You may exhaust this card at the start of your turn during the action phase; remove up to 4 of your ground forces from the game board and place them on 1 or more planets you control.'
}

const integratedEconomy = {
    name: 'Integrated Economy',
    value: 'After you gain control of a planet, you may produce any number of units on that planet that have a combined cost equal to or less than that planet’s resource value.'
}

const plasmaScoring = {
    name: 'Plasma Scoring',
    value: 'When 1 or more of your units use BOMBARDMENT or SPACE CANNON, 1 of those rolls may roll 1 additional die'
}

const magenDefenseGrid = {
    name: 'Magen Defense Grid',
    value: 'You may exhaust this card at the start of a round of ground units that have PLANETARY SHIELD; your opponent cannot make combat rolls this combat round.'
}

const duraniumArmor = {
    name: 'Duranium Armor',
    value: 'During each combat round, after you assign hits to your units, repair 1 of your damaged units that did not use SUSTAIN DAMAGE during this combat round. '
}

const assaultCannon = {
    name: 'Assault Cannon',
    value: 'At the start of a space combat in a system that contains 3 or more of your non-fighter ships, your opponent must destroy 1 of his non-fighter ships.'
}

const neuralMotivator = {
    name: 'Neural Motivator',
    value: 'During the status phase, draw 2 action cards instead of 1.'
}

const dacxiveAnimators = {
    name: 'Dacxive Animators',
    value: 'After you win a ground combat, you may place 1 infantry from your reinforcements on that planet.'
}

const hyperMetabolism = {
    name: 'Hyper Metabolism',
    value: 'During the status phase, gain 3 command tokens instead of 2.'
}

const x89BacterialWeapon = {
    name: 'X-89 Bacterial Weapon',
    value: 'ACTION: Exhaust this card and choose 1 planet in a system that contains 1 or more of your ships that have BOMBARDMENT; destroy all infantry on that planet.'
}

export const greenCards = {
    0: neuralMotivator,
    1: dacxiveAnimators,
    2: hyperMetabolism,
    3: x89BacterialWeapon
}

export const redCards = {
    0: plasmaScoring,
    1: magenDefenseGrid,
    2: duraniumArmor,
    3: assaultCannon
}

export const yellowCards = {
    0: sarweenTools,
    1: gravitonLaserSystem,
    2: transitDiodes,
    3: integratedEconomy
}

export const blueCards = {
    0: antiMassDeflectors,
    1: gravityDrive,
    2: fleetLogistics,
    3: lightWaveDeflector
}