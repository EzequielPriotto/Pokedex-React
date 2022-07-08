const URL = "https://pokeapi.co/api/v2/type"

export default async function getTypes(){

    const res = await fetch(URL);
    const response = await res.json();
    const types = await response.results.map(type=> type.name)
    
    return types
}