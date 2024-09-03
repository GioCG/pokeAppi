const api_url = 'https://pokeapi.co/api/v2/pokemon/'

export const reqPoke = async(pokemonName) => {
    try {
        const resp = await fetch(`${api_url}${pokemonName}`)
        if (!resp.ok) {
            throw new Error(`Error: ${resp.status}`)
        }

        const data = await resp.json()
        const pokemon = {
            id: data.id,
            name: data.name,
            height: data.height,
            weight: data.weight,
            sprite: data.sprites.other.home.front_default,
            abilities: data.abilities.map(ability => ability.ability.name),
            types: data.types.map(typeInfo => typeInfo.type.name),
            stats:data.stats.map(statInfo =>({
                name:statInfo.stat.name,
                value:statInfo.base_stat
            }))
        }

        return pokemon;
    } catch (err) {
        console.error('Error fetching Pokémon:', err)
        return null;
    }
};