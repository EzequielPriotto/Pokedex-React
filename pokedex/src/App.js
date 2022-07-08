import React from 'react';

import './styles/App.css';

import Home from './pages/Home/Home';
import PokemonFocus from './pages/PokemonFocus/PokemonFocus';
import DetailsPokemon from './pages/DetailsPokemon/DetailsPokemon';
import AboutMe from './pages/AboutMe/AboutMe';

import { Route } from 'wouter';

import { PokemonFocusProvider } from './contexts/PokemonFocusContext';
import Missigno from './pages/Missigno/Missigno';



export default function App() {

  return (

    <div className="App">
      <section className="App-content">
        <PokemonFocusProvider>
          <Route component={Home} path="/" />
          <Route component={PokemonFocus} path="/pokemon" />
        </PokemonFocusProvider>
        <Route component={DetailsPokemon} path="/pokemon/:pokemonName" />
        <Route component={AboutMe} path="/AboutMe" />
      </section>
    </div>

  );
}
