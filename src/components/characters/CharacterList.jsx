import React from 'react';
import { Link } from 'react-router-dom';
import Character from './Character';
import { useCharacters } from './hooks/useCharacters';

const CharacterList = ({ characters }) => {
  const [page, setPage] = useState(1)
  const { characters, loading } = useCharacters(page);
  if (loading) return <h1>Loading...</h1>;

  const characterElements = characters.map(character => (
    <li key={character._id}>
      <Link to={`/${character.id}`}>
        <Character {...character} />
      </Link>
    </li>
  ));

  return (
    <>
      <button
        disabled={page <= 1}
        oncClick={() => setPage((prevPage) => prevPage - 1)}
      >
        &lt;
      </button>
      <button onClick={() => setPage((prevPage) => prevPage + 1)}>&gt;</button>
      <ul>{characterElements}</ul>;
    </>
  );
};

export default CharacterList;