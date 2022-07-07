import React from "react";

export default function PokemonCard({pokemon}) {
    return (
    <div key={pokemon.id}>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <h4>{pokemon.name}</h4>
    </div>
    )
}