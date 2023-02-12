import { useEffect, useState } from "react";
import requestPokemon from "./utils/requestPokemon";

interface Pokemon{
    name: string;
    url: string;
}

const  RenderPokemon =  () => {

    const [result, setResult] = useState<Pokemon[]>([]);
    const maxPokemon = 9;

    useEffect(() => {
        const pokemonData = async () =>{
            const result = await requestPokemon(maxPokemon);
            setResult(result?.results ?? []);
        } 
        pokemonData();
  
    }, []);

    //

    return (
        <div>
            {result.map((pokemon, index) => {
                return (
                    <div key={index}>
                        <h1>{pokemon.name}</h1>
                        pokemon.,
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`} />
                    </div>
                )
            })}
        </div>
  )
}

export default RenderPokemon;
