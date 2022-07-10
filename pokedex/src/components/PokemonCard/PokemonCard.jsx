import React from "react";
import { useLocation } from 'wouter';
export default function PokemonCard({ pokemon }) {

    const [path, pushLocation] = useLocation();

    const focus = () => {
        pushLocation(`/pokemon/${pokemon.name}`)
    }

    return (
        <div key={pokemon.id} onClick={focus}>
            {pokemon.sprites.front_default != null ? <img src={pokemon.sprites.front_default} alt={pokemon.name} /> : <p>Image Not Found</p>}
            <h4>{pokemon.name}</h4>
        </div>
    )

  

}