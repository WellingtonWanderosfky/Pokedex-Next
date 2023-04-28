
import typesPokemonsArray from "@/utils/varsTypes";
import styles from "../CardPokemon.module.css";

interface blurProps {
    typesPokemon: string;
}

const Blur = ({typesPokemon} : blurProps) => {
  
      const filterTypes = typesPokemonsArray.find((item) => item.type === typesPokemon);
      if(!filterTypes) return <></>;
      const { color } = filterTypes;

  return (
    <div style={{background : color}}className={styles.containerEffect}>
      
    </div>
  )
}

export default Blur
