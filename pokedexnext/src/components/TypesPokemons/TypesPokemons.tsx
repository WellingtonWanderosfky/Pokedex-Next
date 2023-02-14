
import styles from "./TypesPokemons.module.css";
interface TypesPokemonsProps {
    typePokemon: string;
}

const TypesPokemons = ({typePokemon} : TypesPokemonsProps) => {
    console.log("typePokemon:",typePokemon);
    const types = [
        {
          type: "grass",
          title: "Grass",
          imageUrl: "/PokemonsTypes/grass.svg",
          color: "#1CD80E"
        }, {
          type: "fire",
          title: "Fire",
          imageUrl: "/PokemonsTypes/fire.svg",
          color: "#FF9900"
        }, {
          type: "water",
          title: "Water",
          imageUrl: "/PokemonsTypes/water.svg",
          color: "#14A8FF"
        }, {
          type: "electric",
          title: "Electric",
          imageUrl: "/PokemonsTypes/electric.svg",
          color: "#FFDE00"
        },
        {
            type: "bug",
            title: "Bug",
            imageUrl: "/PokemonsTypes/bug.svg",
            color: "#7BCF00"
        },
        {
          type: "normal",
          title: "Normal",
          imageUrl: "/PokemonsTypes/normal.svg",
          color: "#7BCF00"
        },
        {
          type: "poison",
          title: "Poison",
          imageUrl: "/PokemonsTypes/poison.svg",
          color: "#F149FF"
        },
        {
          type: "dragon",
          title: "Dragon",
          imageUrl: "/PokemonsTypes/dragon.svg",
          color: "#0076FF"
        },
        {
          type: "dark",
          title: "Dark",
          imageUrl: "/PokemonsTypes/dark.svg",
          color: "#5A566A"
        },
      ]
      
      const currentType = types.find(({ type }) => type === typePokemon)

      if(!currentType) return <></>
      
      const {title,imageUrl , color } = currentType;
      
      return <button style={{backgroundColor : color}} className={styles.buttonContainer}>
        <img src={imageUrl}></img>
        {title}
        </button>
}

export default TypesPokemons

