import React from 'react';

import './styles/App.css';

import Home from './pages/Home/Home';
import DetailsPokemon from './pages/DetailsPokemon/DetailsPokemon';
import AboutMe from './pages/AboutMe/AboutMe';

import { Route } from 'wouter';

import Missigno from './pages/Missigno/Missigno';



export default function App() {

  return (

    <div className="App">
      <section className="App-content">
        <Route component={Home} path="/" />
        <Route component={DetailsPokemon} path="/pokemon/:pokemonName" />
        <Route component={AboutMe} path="/AboutMe" />
      </section>
    </div>

  );
}
