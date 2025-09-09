import warrior1 from './warrior_a_face_update.png';
import magician1 from './magician_a_face_update.png';
import healer1 from './healer_a_face_update.png';
import ninja1 from './ninja_a_face_update.png';
import ranger1 from './ranger_a_face_update.png';
import monk1 from './monk_a_face_update.png';

const warrior = {
    portrait: warrior1,
    stats: {
        'Acc': 2,
        'Vig': 3,
        'Eva': 2,
        'Str': 5,
        'Mag': 1
    }
}

const magician = {
    portrait: magician1,
    stats: {
        'Acc': 3,
        'Vig': 1,
        'Eva': 3,
        'Str': 1,
        'Mag': 5
    }
}

const healer = {
    portrait: healer1,
    stats: {
        'Acc': 2,
        'Vig': 3,
        'Eva': 2,
        'Str': 2,
        'Mag': 4
    }
}

const ninja = {
    portrait: ninja1,
    stats: {
        'Acc': 4,
        'Vig': 2,
        'Eva': 3,
        'Str': 2,
        'Mag': 2
    }
}

const ranger = {
    portrait: ranger1,
    stats: {
        'Acc': 2,
        'Vig': 3,
        'Eva': 2,
        'Str': 2,
        'Mag': 4
    }
}

const monk = {
    portrait: monk1,
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
