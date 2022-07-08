import React, { useState } from "react";

const Context = React.createContext({})

export  function PokemonFocusProvider ({children}) {
    const [pokemonFocus, setPokemonFocus] = useState([])

    return <Context.Provider value={{ pokemonFocus, setPokemonFocus }}>
              {children}
            </Context.Provider>

}

export	default Context;