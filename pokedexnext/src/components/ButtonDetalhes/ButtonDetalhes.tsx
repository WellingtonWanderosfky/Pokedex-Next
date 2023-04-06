
import styles from "./ButtonDetalhes.module.css";
interface TypesPokemonsProps {
    typePokemon: string;
}

const ButtonDetalhes = ({typePokemon} : TypesPokemonsProps) => {
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
        {
          type: "ground",
          title: "Ground",
          imageUrl: "/PokemonsTypes/ground.svg",
          color: "#ba9288"
        },
        {
          type: "fairy",
          title: "fairy",
          imageUrl: "/PokemonsTypes/fairy.svg",
          color: "#ffb6c1"
        },
        {
          type: "rock",
          title: "rock",
          imageUrl: "/PokemonsTypes/rock.svg",
          color: "#2A1600"
        },
        {
          type: "fighting",
          title: "fighting",
          imageUrl: "/PokemonsTypes/fighting.svg",
          color: "#7600D2"
        },
        {
          type: "ghost",
          title: "ghost",
          imageUrl: "/PokemonsTypes/ghost.svg",
          color: "#202429"
        },
        {
          type: "psychic",
          title: "psychic",
          imageUrl: "/PokemonsTypes/psychic.svg",
          color: "#00A0D2"
        },
        {
          type: "psychic",
          title: "psychic",
          imageUrl: "/PokemonsTypes/psychic.svg",
          color: "#00A0D2"
        }
      ]
      
      const currentType = types.find(({ type }) => type === typePokemon)

      if(!currentType) return <></>
      
      const { color } = currentType;
      
      return <button style={{backgroundColor : color}} className={styles.buttonMaisDetalhes}>
        <img src="icon-bolt-white.svg" width="24px" height="24px" />
        <p>Mais detalhes</p>
    </button>
}

export default ButtonDetalhes;

