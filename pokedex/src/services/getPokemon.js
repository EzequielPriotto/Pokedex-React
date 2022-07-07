
export default async function getPokemon(pokemonName) {
    const URL = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
    const res = await fetch(URL);
    const response = await res.json();
    return response;
}
