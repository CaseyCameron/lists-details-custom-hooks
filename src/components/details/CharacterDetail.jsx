import React from 'react';
import { useParams } from 'react-router-dom';
import { useCharacter } from '../../hooks/character';

const CharacterDetail = () => {
  const { id } = useParams();
  const character = useCharacter(id);
  if (!character) return <h1>Loading...</h1>;
  return (
    <section>
      <h2>Character Details</h2>
      <dl>
        <dt>Name:</dt>
        <dd>{character.name}</dd>
        <dt>Affiliation:</dt>
        <dd>{affiliation}</dd>
        <dt>Allies:</dt>
        <dd>{allies}</dd>
        <dt>Enemies:</dt>
        <dd>{enemies}</dd>
        <dt>Image</dt>
        <dd><img src={photoUrl} alt={character.name} /></dd>
      </dl>
    </section>
  )
};

export default CharacterDetail;