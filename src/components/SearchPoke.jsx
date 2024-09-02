import React, { useState } from 'react';

export const SearchPoke = ({handleGetPoke}) => {

    const [poke,setPoke] = useState('')

    return (   
        <>
            <div className='d-flex flex-row justify-content-center alig-items-center mt-3'>
                <form className='d-flex' onSubmit={(e)=>{handleGetPoke(e,poke)}}>
                    <input type='text' placeholder="Buscar Pokemon" className='form-control me-2'onChange={(e)=>{setPoke(e.target.value)}}/>
                    <input type='submit' value={'Buscar'} className='btn btn-outline-secondary' />
                </form>
            </div>
        </>
    )
}