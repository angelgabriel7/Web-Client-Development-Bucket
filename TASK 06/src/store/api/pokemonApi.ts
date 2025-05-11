// src/store/api/pokemonApi.ts
transformResponse: (response: any) => {
  return response.results.map((pokemon: any, index: number) => {
    const id = index + 1;
    return {
      id: id.toString().padStart(3, '0'),
      name: pokemon.name,
      url: pokemon.url,
      // Gunakan URL official artwork dari PokeAPI
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
    };
  });
}