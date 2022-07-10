import {useState, useEffect} from "react";
import getPokemons from "services/getPokemons";

export default function usePokemons(){
    const [pokemons, setPokemons] = useState([])
    const [isLoading, setLoading] = useState(false)
  
    useEffect(() => {
      setLoading(true)
      getPokemons({}).then(pokemonsAPI => {
        setPokemons(pokemonsAPI)
        setLoading(false)
      })
    }, [])

    return {pokemons, setPokemons, isLoading, setLoading}
}