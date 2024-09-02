import { useState } from 'react'
import { reqPoke } from '../services/pokemons'

export const usePokemon = () =>{
    const [sprite,setSprite] = useState([])
    const[PokemonName,setPokemonName] = useState('')

    const handleGetPoke = (e, name) =>{
        //evita la recarga completa del navegador
        e.preventDefault()

        reqPoke(sprite).then((sprites) => {
            setSprite(sprites)
        })
        
        setPokemonName(name)
    }

    return{
        sprites,
        PokemonName,
        handleGetPoke
    }
}