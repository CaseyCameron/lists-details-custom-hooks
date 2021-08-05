import React from 'react';

const Character = ({ name, photoUrl }) => {
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