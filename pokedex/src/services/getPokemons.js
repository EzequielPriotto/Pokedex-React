const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

export default async function getPokemons({limit = 24, page = 0} = {}) {

    const url = `${BASE_URL}?limit=${limit}&offset=${limit * page}`;
    const res = await fetch(url);
    const response = await res.json();
    const pokemons = await Promise.all(
        response.results.map(pokemon => 
            fetch(pokemon.url)
            .then(res => res.json())
            ))
    
    return pokemons;
}