import React, { useEffect, useState } from 'react';
import PokemonCard from "../PokemonCard/PokemonCard";
import getPokemons from '../../services/getPokemons';
import Loader from '../Loader/Loader';

import './ListOfPokemons.css'


export default function ListOfPokemons() {

  const [pokemons, setPokemons] = useState([])
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getPokemons().then(pokemonsAPI => {
      setPokemons(pokemonsAPI)
      setLoading(false)
    })
  }, [])

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