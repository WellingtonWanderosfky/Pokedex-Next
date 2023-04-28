
import typesPokemonsArray from "@/utils/varsTypes";
import styles from "./ButtonDetalhes.module.css";
interface TypesPokemonsProps {
    typePokemon: string;
}

const ButtonDetalhes = ({typePokemon} : TypesPokemonsProps) => {
    console.log("typePokemon:",typePokemon);
    
      
      const currentType = typesPokemonsArray.find(({ type }) => type === typePokemon)

      if(!currentType) return <></>
      
      const { color } = currentType;
      
      return <button style={{backgroundColor : color}} className={styles.buttonMaisDetalhes}>
        <img src="icon-bolt-white.svg" width="24px" height="24px" />
        <p>Mais detalhes</p>
    </button>
}

export default ButtonDetalhes;

