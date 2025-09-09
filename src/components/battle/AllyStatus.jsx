import React from 'react';
import CharaSprite from '../CharaSprite';

function AllyStatus ({ chars }) {
  return (
    <div>
      {chars.map((char, x) => (
        <>
          <CharaSprite chara={char} dir="west" step="1" />
          <div>{char.firstname == '' ? '...' : char.firstname}</div>
          <div>HP: 20</div>
        </>
      ))}
    </div>
  )
}

export default AllyStatus;
