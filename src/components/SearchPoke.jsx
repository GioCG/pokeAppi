import React, { useState } from 'react'

export const SearchPoke = ({ handleGetPokemon }) => {
    const [pokemonName, setPokemonName] = useState('')

    return (
        <>
            <div className='d-flex flex-row justify-content-center align-items-center mt-3'>
                <img src="https://fontmeme.com/permalink/240903/747e3ebe89961a8430a74495bc78c926.png" alt="fuente-de-pokemon-go" border="0"/>
            </div>
            <div className='d-flex flex-row justify-content-center align-items-center mt-3'>
                <form className='d-flex' onSubmit={(e) => { handleGetPokemon(e, pokemonName) }}>
                    <input
                        type='text'
                        placeholder="Buscar Pokémon"
                        className='form-control me-2'
                        onChange={(e) => { setPokemonName(e.target.value.toLowerCase()) }}
                    />
                    <input type='submit' value={'Buscar'} className='btn btn-outline-secondary' />
                </form>
            </div>
        </>
    );
}