import { useEffect, useState } from "react";
import CardPokemon from "../CardPokemon/CardPokemon";
import styles from "./RenderPokemon.module.css";
import requestPokemon from "./utils/requestPokemon";

interface Pokemon{
    name: string;
    url: string;
}

const  RenderPokemon =  () => {

    const [result, setResult] = useState<Pokemon[]>([]);
    const maxPokemon = 50;

    useEffect(() => {
        const pokemonData = async () =>{
            const result = await requestPokemon(maxPokemon);
            setResult(result?.results ?? []);
        } 
        pokemonData();
    }, []);

    //

    return (
        <div className={styles.containerRenderPokemons}>
            {result.map((pokemon, index) => {
                return (
                    <CardPokemon url={pokemon.url} name={pokemon.name} key={index}></CardPokemon> 
                )
            })}
        </div>
  )
}

export default RenderPokemon;
