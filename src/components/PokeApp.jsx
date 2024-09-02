

import { usePoke } from "../hooks/usePoke"
import { ContainerPoke } from "./ContainerPoke"
import { SearchPokemon } from "./SearchPokemon"

//functional component
export const GifApp = () => {
    const{gifs,handleGetGif,catName} = usePoke()
    
    return (
    //fragment
    <>
    { /*props: una propiedad que viaja entre componenetes*/}
        <SearchPokemon handleGetPoke={handleGetGif}/>
        <ContainerPoke gifs={gifs} catName={catName}/>     
          
        
    </>
    
  )
}
