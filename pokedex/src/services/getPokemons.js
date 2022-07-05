const URL = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0";

export default async function getPokemons() {

    const res = await fetch(URL);
    const response = await res.json();
    const pokemons = await Promise.all(
        response.results.map(pokemon => 
            fetch(pokemon.url)
            .then(res => res.json())
            ))
    
    return pokemons;
}