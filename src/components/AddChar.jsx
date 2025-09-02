import React from 'react';
import Card from 'react-bootstrap/Card';

import warriorM from '../assets/warrior_m.png';
import warriorF from '../assets/warrior_f.png';
import magicianM from '../assets/magician_m.png';
import magicianF from '../assets/magician_f.png';
import healerM from '../assets/healer_m.png';
import healerF from '../assets/healer_f.png';
import ninjaM from '../assets/ninja_m.png';
import ninjaF from '../assets/ninja_f.png';
import rangerM from '../assets/ranger_m.png';
import rangerF from '../assets/ranger_f.png';
import monkM from '../assets/monk_m.png';
import monkF from '../assets/monk_f.png';

const portraits = [
  [ warriorM, warriorF ],
  [ magicianM, magicianF ],
  [ healerM, healerF ],
  [ ninjaM, ninjaF ],
  [ rangerM, rangerF ],
  [ monkM, monkF ],
];

function AddChar ({ char, onDelete, onEdit }) {
  const renameChar = char => {
    const name = prompt('Enter a name');
    onEdit({ ...char, named: name });
  };

  return (
    <>
      <div>
        <select
          style={{width: '100%'}}
          value={char.class}
          onChange={evt => onEdit({...char, class: evt.target.value})}
        >
          <option value="0">Warrior</option>
          <option value="1">Magician</option>
          <option value="2">Healer</option>
          <option value="3">Ninja</option>
          <option value="4">Ranger</option>
          <option value="5">Monk</option>
        </select>
        <select
          style={{width: '100%'}}
          value={char.gender}
          onChange={evt => onEdit({...char, gender: evt.target.value})}
        >
          <option value="0">M</option>
          <option value="1">F</option>
        </select>
      <Card.Img src={portraits[char.class][char.gender]} />
      <input
        style={{width: '100%', margin: '.25em 0'}}
        type="button"
        value="Rename"
        className="editButton"
        onClick={() => renameChar(char)}
      />
      <input
        style={{width: '100%'}}
        type="button"
        value="Delete"
        className="delButton"
        onClick={() => onDelete(char.id)}
      />
      </div>
    </>
  )
}

export default AddChar;
