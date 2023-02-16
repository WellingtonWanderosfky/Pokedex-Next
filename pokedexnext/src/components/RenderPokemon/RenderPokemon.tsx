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
    const [offset, setOffset] = useState(0);
    const maxPokemon = 9;

    const handleLoadMore = async () => {
        setOffset(offset + 9);
        const resultRequest = await requestPokemon(maxPokemon, offset + 9);
        setResult([...result, ...(resultRequest?.results ?? [])]);
    }

    useEffect(() => {
        const pokemonData = async () =>{
            const resultRequest = await requestPokemon(maxPokemon, offset);
            setResult(resultRequest?.results ?? [])
        } 
        pokemonData();
    }, []);

    //

    return (
        <>
            <div className={styles.containerRenderPokemons}>
                {result.map((pokemon, index) => {
                    return (
                        <CardPokemon url={pokemon.url} name={pokemon.name} key={index}></CardPokemon> 
                    )
                })}
            </div>
            <div className={styles.buttonContainerLoading}>
                <button className={styles.buttonLoading} onClick={handleLoadMore}>Carregar mais...</button>
            </div>
        </>
  )
}

export default RenderPokemon;