import React, { Suspense } from 'react';
import PokemonStats from 'components/DetailsPokemon/DetailsPokemon'
import Loader from 'components/Loader/Loader';

const Missigno = React.lazy(
  () => import('pages/Missigno/Missigno.js')
  )

export default function DetailsPokemon({ params }) {
  const { pokemonName } = params

  if (pokemonName.toLowerCase() == "missigno")
    return (
       <Suspense fallback={<Loader loading={true}></Loader>}>
         <Missigno></Missigno>
       </Suspense>
    )

  return (
    <React.Fragment>
      <h1>POKEDEX TEST REACT</h1>

      <PokemonStats pokemonName={pokemonName.toLowerCase()}></PokemonStats>

    </React.Fragment>
  );
}
