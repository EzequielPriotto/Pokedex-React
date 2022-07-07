import React from 'react';
import PokemonStats from '../../components/DetailsPokemon/DetailsPokemon'

export default function DetailsPokemon({params}) {
const {pokemonName} = params

  return (
    <React.Fragment>
      <h1>POKEDEX TEST REACT</h1>
    
      <PokemonStats pokemonName={pokemonName}></PokemonStats>
    
    </React.Fragment>
  );
}
