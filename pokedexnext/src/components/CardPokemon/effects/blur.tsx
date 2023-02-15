
import styles from "../CardPokemon.module.css";

interface blurProps {
    typesPokemon: string;
}

const Blur = ({typesPokemon} : blurProps) => {
    const types = [
        {
          type: "grass",
          color: "#1CD80E"
        }, {
          type: "fire",
          color: "#FF9900"
        }, {
          type: "water",
          color: "#14A8FF"
        }, {
          type: "electric",
          color: "#FFDE00"
        },
        {
            type: "bug",
            color: "#7BCF00"
        },
        {
          type: "normal",
          color: "#7BCF00"
        },
        {
          type: "poison",
          color: "#F149FF"
        },
        {
          type: "dragon",
          color: "#0076FF"
        },
        {
          type: "dark",
          color: "#5A566A"
        },
      ]

      const filterTypes = types.find((item) => item.type === typesPokemon);
      if(!filterTypes) return <></>;
      const { color } = filterTypes;

  return (
    <div style={{background : color}}className={styles.containerEffect}>
      
    </div>
  )
}

export default Blur
