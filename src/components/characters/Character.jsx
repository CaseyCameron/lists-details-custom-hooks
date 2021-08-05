import React from 'react';

const Character = ({ name, photoUrl }) => {
  return (
    <div aria-label='character'>
      <figure>
        <figcaption>
          <p>{name}</p>
        </figcaption>
        <img src={photoUrl} alt={name} />
      </figure>
    </div>
  )
};

export default Character;