import warrior1 from './warrior_b.png';
import warrior2 from './warrior_r.png';
import magician1 from './magician_b.png';
import magician2 from './magician_r.png';
import healer1 from './healer_b.png';
import healer2 from './healer_r.png';
import ninja1 from './ninja_b.png';
import ninja2 from './ninja_r.png';
import ranger1 from './ranger_b.png';
import ranger2 from './ranger_r.png';
import monk1 from './monk_b.png';
import monk2 from './monk_r.png';

const warrior = {
    sprite: [ warrior1, warrior2 ],
    stats: {
        'Acc': 2,
        'Vigor': 3,
        'Evade': 2,
        'Str': 5,
        'Magic': 1
    }
}

const magician = {
    sprite: [ magician1, magician2 ],
    stats: {
        'Acc': 3,
        'Vigor': 1,
        'Evade': 3,
        'Str': 1,
        'Magic': 5
    }
}

const healer = {
    sprite: [ healer1, healer2 ],
    stats: {
        'Acc': 2,
        'Vigor': 3,
        'Evade': 2,
        'Str': 2,
        'Magic': 4
    }
}

const ninja = {
    sprite: [ ninja1, ninja2 ],
    stats: {
        'Acc': 4,
        'Vigor': 2,
        'Evade': 3,
        'Str': 2,
        'Magic': 2
    }
}

const ranger = {
    sprite: [ ranger1, ranger2 ],
    stats: {
        'Acc': 2,
        'Vigor': 3,
        'Evade': 2,
        'Str': 2,
        'Magic': 4
    }
}

const monk = {
    sprite: [ monk1, monk2 ],
    stats: {
        'Acc': 2,
        'Vigor': 5,
        'Evade': 2,
        'Str': 2,
        'Magic': 2
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
