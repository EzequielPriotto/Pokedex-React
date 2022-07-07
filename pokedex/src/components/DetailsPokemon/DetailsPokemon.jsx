import React, { useEffect, useState } from 'react';
import PokemonCard from "../PokemonCard/PokemonCard";
import getPokemon from '../../services/getPokemon';
import Loader from "../Loader/Loader"

export default function PokemonStats({ pokemonName }) {

    // const { pokemonName } = pokemonName
    const [pokemon, setPokemon] = useState({})
    const [isLoading, setLoading] = useState(false)
   
    useEffect(() => {
        setLoading(true)
        getPokemon(pokemonName).then(pokemonAPI => {
            setPokemon(pokemonAPI)
            setLoading(false)
        })
    }, [pokemonName])

    if(isLoading)
        return <Loader loading={isLoading}/>

    if (pokemon.id != null)
        return (
            <div>
                <Loader loading={isLoading}/>
                <PokemonCard pokemon={pokemon} />
            </div>
        )
    
    else
        return (
            <div>
                <h2>Pokemon not found</h2>
            </div>
        )
}