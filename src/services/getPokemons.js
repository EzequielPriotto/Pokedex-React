const URL = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0";

export default function getPokemons() {

    return fetch(URL)
        .then(res => res.json())
        .then(response => {
            let aux = [];
            response.results.forEach(pokemon => {
                fetch(pokemon.url)
                    .then(res => res.json())
                    .then(response => {
                        aux.push(response)
                    })
            });
            return aux;
        })

}