import warrior1 from './warrior_a.png';
import warrior2 from './warrior_b.png';
import magician1 from './magician_a.png';
import magician2 from './magician_b.png';
import healer1 from './healer_a.png';
import healer2 from './healer_b.png';
import ninja1 from './ninja_a.png';
import ninja2 from './ninja_b.png';
import ranger1 from './ranger_a.png';
import ranger2 from './ranger_b.png';
import monk1 from './monk_a.png';
import monk2 from './monk_b.png';

const warrior = {
    sprite: [ warrior1, warrior2 ],
    stats: {
        'Acc': 2,
        'Vig': 3,
        'Eva': 2,
        'Str': 5,
        'Mag': 1
    }
}

const magician = {
    sprite: [ magician1, magician2 ],
    stats: {
        'Acc': 3,
        'Vig': 1,
        'Eva': 3,
        'Str': 1,
        'Mag': 5
    }
}

const healer = {
    sprite: [ healer1, healer2 ],
    stats: {
        'Acc': 2,
        'Vig': 3,
        'Eva': 2,
        'Str': 2,
        'Mag': 4
    }
}

const ninja = {
    sprite: [ ninja1, ninja2 ],
    stats: {
        'Acc': 4,
        'Vig': 2,
        'Eva': 3,
        'Str': 2,
        'Mag': 2
    }
}

const ranger = {
    sprite: [ ranger1, ranger2 ],
    stats: {
        'Acc': 2,
        'Vig': 3,
        'Eva': 2,
        'Str': 2,
        'Mag': 4
    }
}

const monk = {
    sprite: [ monk1, monk2 ],
    stats: {
        'Acc': 2,
        'Vig': 5,
        'Eva': 2,
        'Str': 2,
        'Mag': 2
    }
}

export default {
  'Warrior': warrior,
  'Magician': magician,
  'Healer': healer,
  'Ninja': ninja,
  'Ranger': ranger,
  'Monk': monk
}
