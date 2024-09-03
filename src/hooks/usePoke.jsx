import { useState } from 'react'
import { reqPoke } from '../services/pokemons'
export const usePoke = () => {
    const [pokemon, setPokemon] = useState(null)
    const [pokemonName, setPokemonName] = useState('')
    const [error, setError] = useState(null)

    const handleGetPokemon = (e, name) => {
    
        e.preventDefault();

        setError(null);

        reqPoke(name)
            .then((data) => {
                if (data) {
                    setPokemon(data)
                } else {
                    setError('Pokémon no encontrado');
                }
            })
            .catch((err) => {
                console.error('Error fetching Pokémon:', err)
                setError('Ocurrió un error al buscar el Pokémon')
            })
    }

    return {
        pokemon,
        error,
        handleGetPokemon
    }
}