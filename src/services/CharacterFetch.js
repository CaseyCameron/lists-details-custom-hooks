export const fetchCharacters = async (page) => {
  const res = await fetch(
    `https://last-airbender-api.herokuapp.com/api/v1/characters?perPage=10&page=5`
  );
  const characters = await res.json();

  return characters.slice((page - 1) * 20, page * 20);
};

export const fetchCharacterById = async (id) => {
  const res = await fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters/${id}`);

  return res.json();
};