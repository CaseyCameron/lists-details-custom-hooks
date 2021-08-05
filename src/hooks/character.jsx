import { useState, useEffect } from 'react';
import { fetchCharacters, fetchCharacterById } from '../services/CharacterFetch';

export const useCharacters = (page) => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchCharacters(page)
      .then(setCharacters)
      .finally(() => setLoading(false));
  }, [page]);
  return { loading, characters };
};

export const useCharacter = (_id) => {
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetchCharacterById(_id)
      .then(setCharacter)
  });
  return character;
};