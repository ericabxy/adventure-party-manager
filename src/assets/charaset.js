import warrior1 from './warrior_a_face_update.png';
import magician1 from './magician_a_face_update.png';
import healer1 from './healer_a_face_update.png';
import ninja1 from './ninja_a_face_update.png';
import ranger1 from './ranger_a_face_update.png';
import monk1 from './monk_a_face_update.png';

const warrior = {
    portrait: warrior1,
    stats: {
        'Str': 5,
        'End': 3,
        'Mag': 1,
        'Ref': 2,
    }
}

const magician = {
    portrait: magician1,
    stats: {
        'Str': 1,
        'End': 1,
        'Mag': 5,
        'Ref': 3,
    }
}

const healer = {
    portrait: healer1,
    stats: {
        'Str': 2,
        'End': 3,
        'Mag': 4,
        'Ref': 2,
    }
}

const ninja = {
    portrait: ninja1,
    stats: {
        'Str': 2,
        'End': 2,
        'Mag': 2,
        'Ref': 3,
    }
}

const ranger = {
    portrait: ranger1,
    stats: {
        'Str': 2,
        'End': 3,
        'Mag': 4,
        'Ref': 2,
    }
}

const monk = {
    portrait: monk1,
    stats: {
        'Str': 2,
        'End': 5,
        'Mag': 2,
        'Ref': 2,
    }
}

export default {
  'warrior': warrior,
  'magician': magician,
  'healer': healer,
  'ninja': ninja,
  'ranger': ranger,
  'monk': monk
}
