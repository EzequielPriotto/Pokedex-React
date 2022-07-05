import React from 'react';
import './App.css';
import ListOfPokemons from './components/ListOfPokemons';

export default function App() {
  
  return (
    <div className="App">
      <section className="App-content">
        <h1>POKEDEX TEST REACT</h1>
        {
          <ListOfPokemons></ListOfPokemons>
        }
      </section>
    </div>
  );
}
