import React from 'react';
import { useParams } from 'react-router-dom';
import { useCharacter } from '../../hooks/character';

const CharacterDetail = () => {
  let { _id } = useParams();
  const character = useCharacter(_id);
  console.log(_id);
  if (!character) return <h1>Loading...</h1>;
  const stringyAllies = JSON.stringify(character.allies);
  const stringyEnemies = JSON.stringify(character.enemies);

  return (
    <section>
      <h2>Character Details</h2>
      <dl>
        <dt>Name:</dt>
        <dd>{character.name}</dd>

        <dt>Affiliation:</dt>
        {character.affiliation && <dd>{character.affiliation}</dd>}

        <dt>Allies:</dt>
        <dd>{stringyAllies}</dd>

        <dt>Enemies:</dt>
        <dd>{stringyEnemies}</dd>

        <dt>Image</dt>
        <dd><img src={character.photoUrl} alt={character.name} /></dd>
      </dl>
    </section>
  )
};

export default CharacterDetail;