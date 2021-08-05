import React from 'react';

const Character = ({ name, affiliation, photoUrl }) => {
  return (
    <figure>
      <figcaption>
        <p>{name}</p>
      </figcaption>
      <img src={photoUrl} alt={name} />
    </figure>
  )
};

export default Character;