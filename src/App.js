import React, { useEffect, useState } from 'react';
import './App.css';
import getPokemons from './services/getPokemons';

function App() {
  const [pokemons, setPokemons] = useState([])

  useEffect(function () {
    getPokemons().then(pokemonsAPI => setPokemons(pokemonsAPI))
  }, [])
  
  console.log(pokemons);

  return (
    <div className="App">
      <section className="App-content">
        <h1>POKEDEX TEST REACT</h1>
        {
          pokemons.map(pokemon =><img key={pokemon.id} src={pokemon.sprites.front_default} />)
        }
      </section>
    </div>
  );
}

export default App;
