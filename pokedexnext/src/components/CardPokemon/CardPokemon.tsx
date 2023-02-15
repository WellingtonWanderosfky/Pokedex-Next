import axios from "axios";
import { useEffect, useState } from "react";
import ButtonDetalhes from "../ButtonDetalhes/ButtonDetalhes";
import TypesPokemons from "../TypesPokemons/TypesPokemons";
import styles from "./CardPokemon.module.css";
import Blur from "./effects/blur";
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
    const result = await axios
      .get(url)
      .then((response) => {
        const dataRespost: Pokemonrequest = response.data;
        setResult(response.data);
        console.log("response.data", response.data);
        setSrcImg(dataRespost.sprites.other.home.front_default);
        setId(dataRespost.id);
        setType(dataRespost.types[0].type.name);
      })
      .finally(() => {
        setLoading(false);
      });
    return result;
  };

  useEffect(() => {
    resultPokemon();
  }, []);

  console.log("result:", result);

  return (
    <div className={styles.containerCard}>
      <img
          className={styles.containerImg}
          src={srcImg}
          alt="pokemon"
          width="100px"
          height="100px"
        />
      <div className={styles.containerPokemon}>
        <div className={styles.containerText}>
          <span className={styles.spanId}>#{id}</span>
          <h2 className={styles.titlePokemon}>{name}</h2>
          <span>{type}</span>
          {loading ? (
            <p>Carregando...</p>
          ) : (
            <TypesPokemons typePokemon={type} />
          )}
        </div>
        {loading ? <p>Carregando...</p> : <ButtonDetalhes typePokemon={type}></ButtonDetalhes>}
        {loading ? <p>Carregando...</p> : <Blur typesPokemon={type}></Blur>}
      </div>
    </div>
  );
};

export default CardPokemon;
