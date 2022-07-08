import React from 'react';
import PokemonStats from '../../components/DetailsPokemon/DetailsPokemon'
import Missigno from '../Missigno/Missigno';

export default function DetailsPokemon({ params }) {
  const { pokemonName } = params

  if (pokemonName.toLowerCase() == "missigno")
    return (
      <div>
        <Missigno></Missigno>
      </div>
    )

  return (
    <React.Fragment>
      <h1>POKEDEX TEST REACT</h1>

      <PokemonStats pokemonName={pokemonName.toLowerCase()}></PokemonStats>

    </React.Fragment>
  );
}
