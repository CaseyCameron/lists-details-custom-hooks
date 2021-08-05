import { useState, useEffect } from 'react';
import { fetchCharacters, fetchCharacterById } from '../services/CharacterFetch';

export const useCharacters = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchCharacters(page)
      .then(setCharacters)
      .finally(() => setLoading(false));
  }, [page]);
  return { loading, characters };
};

export const useCharacter = (id) => {
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetchCharacterById(id).then(setCharacter);
  }, []);
  return character;
};