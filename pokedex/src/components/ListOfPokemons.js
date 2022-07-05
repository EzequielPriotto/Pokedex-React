import React, { useEffect, useState } from 'react';
import PokemonCard from "./PokemonCard";
import getPokemons from '../services/getPokemons';

export default function ListOfPokemons(){
    
    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
      getPokemons().then(pokemonsAPI=> {
        setPokemons(pokemonsAPI)
      })
    }, [])

    return(
        <div>
        {
          pokemons.map(pokemon => {
            return <PokemonCard key={pokemon.id} pokemon={pokemon}></PokemonCard>
          })
        }
      </div>
    )
}