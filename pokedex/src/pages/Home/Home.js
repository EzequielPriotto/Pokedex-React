import React, { useState } from 'react';
import { Link, useLocation } from 'wouter';
import ListOfPokemons from '../../components/ListOfPokemons/ListOfPokemons'

export default function Home() {
  const [pokeName, setPokeName] = useState();
  const [path, pushLocation] = useLocation();

  const shearch = event => {
    event.preventDefault();
    pushLocation(`/pokemon/${pokeName}`)
  }

  const handleInput = event => {
    setPokeName(event.target.value)
  }

  return (
    <React.Fragment>

      <h1>POKEDEX TEST REACT</h1>

      <form onSubmit={shearch}>
        <input placeholder='Search a pokemon...' onChange={handleInput} type="text" value={pokeName} />
      </form>

      <ListOfPokemons></ListOfPokemons>

    </React.Fragment>
  );
}
