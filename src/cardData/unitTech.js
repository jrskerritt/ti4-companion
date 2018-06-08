export const unitUpgrades = {
    0: warSun,
    1: cruiserTwo,
    2: dreadnought2,
    3: destroyer2,
    4: pds2,
    5: carrier2,
    6: fighter2,
    7: infantry2,
    8: spaceDock2
}

const warSun = {
    name: 'War Sun',
    value: 'Other players units in this system lose planetary shield. Cost: 12 Combat: 3 (x3) Move: 2 Capacity: 6',
    req: 'YRRR'
}

const cruiserTwo = {
    name: 'Cruiser II',
    value: 'Cost: 2 Combat: 6 Move: 3 Capacity: 1',
    req: 'GYR'
}

const dreadnought2 = {
    name: 'Dreadnought II',
    value: 'This unit cannot be destroyed by "Direct Hit" action cards. Cost: 4 Combat: 5 Move: 2 Capacity: 1',
    req: 'BBY'
}

const destroyer2 = {
    name: 'Destroyer II',
    value: 'Anti-fighter barrage 6 (x3) Cost: 1 Combat: 8 Move: 2',
    req: 'RR'
}

const pds2 = {
    name: 'PDS II',
    value: 'You may use this units cannon against ships that are adjacent to this units system. Planetary Shield. Space Cannon 5',
    req: 'YR'
}

const carrier2 = {
    name: 'Carrier II',
    value: 'Cost: 3 Combat: 9 Move: 2 Capacity: 6',
    req: 'BB'
}

const fighter2 = {
    name: 'Fighter II',
    value: 'This unit may move without being transported. Fighters in excess of your ships capacity count against your fleetpool. Cost: 1 (x2) Combat: 8 Move: 2',
    req: 'GB'
}

const infantry2 = {
    name: 'Infantry II',
    value: 'After this unit is destroyed, roll 1 die. If the result s 6 or greater, place the unit on this card. At the start of your next turn, place each unit that is on this card on a planet you control in your home system. Cost: 1 (x2) Combat: 7',
    req: 'GG'
}

const spaceDock2 = {
    name: 'Space Dock II',
    value: 'This units PRODUCTION value is equal to 4 re than the resource value of this planet. Up to 3 fighters in this system do not count against your ships capacity.',
    req: 'YY'
}