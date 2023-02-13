import axios from "axios";
import { useEffect, useState } from "react";
import TypesPokemons from "../TypesPokemons/TypesPokemons";
import styles from "./CardPokemon.module.css";
import { Pokemonrequest } from "./typings/RequestPokemon";

interface CardPokemonProps {
  name: string;
  url: string;
}

const CardPokemon = ({ name, url }: CardPokemonProps) => {
  const [result, setResult] = useState<Pokemonrequest[]>([]);
  const [srcImg, setSrcImg] = useState<string>("");
  const [id, setId] = useState<number>(0);
  const [type, setType] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  const resultPokemon = async () => {
    const result = await axios.get(url).then((response) => {
      const dataRespost : Pokemonrequest = response.data;
      setResult(response.data);
      console.log("response.data",response.data);
      setSrcImg(dataRespost.sprites.other["official-artwork"].front_default)
      setId(dataRespost.id);
      setType(dataRespost.types[0].type.name);
    }).finally(() => {
        setLoading(false);
    });
    return result;
  };

  useEffect(() => {
    resultPokemon();
  }, []);

  console.log("result:",result)


  return (
    <div className={styles.containerPokemon}>
      {/* Aqui colocar a imagem do pokemon: */}
      <img src={srcImg} alt="pokemon" width="100px" height="100px" />
      <div className={styles.containerText}>
        <span>#{id}</span>
        <h2 className={styles.titlePokemon}>{name}</h2>
        <span>{type}</span>
        {loading ? <p>Carregando...</p> : <TypesPokemons typePokemon={type} />}
        
      </div>

      <button className={styles.buttonMaisDetalhes}>
        <img src="icon-bolt-white.svg" width="24px" height="24px" />
        <p>Mais detalhes</p>
      </button>
    </div>
  );
};

export default CardPokemon;
