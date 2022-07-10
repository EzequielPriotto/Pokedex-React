import React from 'react';
import PokemonCard from "components/PokemonCard/PokemonCard";
import Loader from 'components/Loader/Loader';

import './ListOfPokemons.css'

import usePokemons from 'hooks/usePokemons';


export default function ListOfPokemons() {

  const {pokemons, isLoading} = usePokemons();

  return (
    <div className='listPokemons'>
      <Loader loading={isLoading} />
      {
        pokemons.map(pokemon => {
          return <PokemonCard key={pokemon.id} pokemon={pokemon}></PokemonCard>
        })
      }
    </div>
  )
}