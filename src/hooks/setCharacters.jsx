import { useState, useEffect } from 'react';
import { fetchCharacters, fetchCharacterById } from '../services/CharacterFetch';

export const setCharacters = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchCharacters(page)
      .then(setCharacters)
      .finally(() => setLoading(false));
  }, [page]);
  return { loading, characters };
};