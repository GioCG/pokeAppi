export const reqPoke = async(pokemon) =>{
    try {
        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
        const {data} = await resp.json()
        const pokes = data.map(Pokemon =>({
            sprites: Pokemon.sprites.other.official-artwork.front_default,
            types: Pokemon.name,
        }))

        return pokes
    } catch (err) {
        console.error(err)
    }
    
}