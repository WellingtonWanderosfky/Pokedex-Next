
import axios from "axios";
import { useEffect } from "react";
import styles from "./CardPokemon.module.css";

interface CardPokemonProps {
    name: string;
    url: string;
}

const CardPokemon = ({name, url} : CardPokemonProps) => {
    const resultPokemon =  () => {
        const result = axios.get(url).then((response) => console.log(response.data));
        return result;
    } 

    useEffect(() => {
        const CardPokemonRequest = () =>{
            const test =  resultPokemon();
            console.log(test);
        }
        CardPokemonRequest();
        
    }, []);


    return (
        <div className={styles.containerPokemon}>
        <span></span>
        <h2>{name}</h2>
        <button>
            <img src="icon-bolt-white.svg" width="24px" height="24px"/>
        </button>
        </div>
    )
}

export default CardPokemon
