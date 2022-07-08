import React, { useContext } from 'react';
import DetailsPokemon from '../../components/DetailsPokemon/DetailsPokemon';
import PokemonFocusContext from '../../contexts/PokemonFocusContext';

export default function PokemonFocus() {
    const {pokemonFocus} = useContext(PokemonFocusContext)
    console.log(pokemonFocus)

  return (
    <React.Fragment>
      <h1>POKEDEX TEST REACT</h1>
    
      {/* <DetailsPokemon pokemonName={}></DetailsPokemon> */}
    
    </React.Fragment>
  );
}
