

interface TypesPokemonsProps {
    typePokemon: string;
}

const TypesPokemons = ({typePokemon} : TypesPokemonsProps) => {
    console.log("typePokemon:",typePokemon);
  return (
    <>
        {(() => {
        switch (typePokemon) {
          case 'grass':
            return <img src="https://via.placeholder.com/50x30/00FF00/000000?text=Grass" alt="Grass flag" />;
          case 'fire':
            return <img src="https://via.placeholder.com/50x30/FF0000/000000?text=Fire" alt="Fire flag" />;
          case 'water':
            return <img src="https://via.placeholder.com/50x30/0000FF/000000?text=Water" alt="Water flag" />;
          case 'electric':
            return <img src="https://via.placeholder.com/50x30/FFFF00/000000?text=Electric" alt="Electric flag" />;
          case 'normal':
            return <img src="https://via.placeholder.com/50x30/A8A878/000000?text=Normal" alt="Normal flag" />;
          default:
            return <img src="https://via.placeholder.com/50x30/808080/000000?text=Other" alt="Other flag" />;
        }
      })()}
    </>
  )
}

export default TypesPokemons

