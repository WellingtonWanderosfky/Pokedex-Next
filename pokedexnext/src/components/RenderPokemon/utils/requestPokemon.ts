interface requestPokemonInterface {
    count: number;
    next: string;
    previous?: any;
    results: resultPokemonRequest[];
  }
  
  interface resultPokemonRequest {
    name: string;
    url: string;
  }

const requestPokemon = async (maxPokemons : number) => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${maxPokemons}`);
      
        if (response.ok) {
          const result : requestPokemonInterface = await response.json();
          console.log(result);
          return result;
        }
      } catch (err) {
        console.error(err);
      }
}

export default requestPokemon



