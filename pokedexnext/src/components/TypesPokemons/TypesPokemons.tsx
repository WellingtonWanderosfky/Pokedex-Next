
import typesPokemonsArray from "@/utils/varsTypes";
import styles from "./TypesPokemons.module.css";
interface TypesPokemonsProps {
    typePokemon: string;
}

const TypesPokemons = ({typePokemon} : TypesPokemonsProps) => {
    console.log("typePokemon:",typePokemon);
    
      
      const currentType = typesPokemonsArray.find(({ type }) => type === typePokemon)

      if(!currentType) return <></>
      
      const {title,imageUrl , color } = currentType;
      
      return <button style={{backgroundColor : color}} className={styles.buttonContainer}>
        <img src={imageUrl}></img>
        {title}
        </button>
}

export default TypesPokemons

