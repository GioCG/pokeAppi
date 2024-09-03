import { usePoke } from "../hooks/usePoke"
import { ContainerPoke } from "./ContainerPoke"
import { SearchPoke } from "./SearchPoke"

// Functional component
export const PokeApp = () => {
    const { pokemon, handleGetPokemon, pokemonName, error } = usePoke()
    
    return (
        // Fragment
        <>
            { /* props: una propiedad que viaja entre componentes */}
            <SearchPoke handleGetPokemon={handleGetPokemon} />
            {error && <p>{error}</p>}
            {pokemon && <ContainerPoke pokemon={pokemon} pokemonName={pokemonName} />}     
        </>
    )
}