import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./SliderSwiperFilter.module.css";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import typesPokemonsArray from "@/utils/varsTypes";
import { Keyboard, Mousewheel, Navigation } from "swiper";
import { Pokemon } from "../RenderPokemon/RenderPokemon";
import requestPokemonType from "./requestPokemonType";



interface TypeSwiperDispach {
  setResult : (state: Pokemon[]) => void
}

export default function SliderSwiperFilter({setResult} : TypeSwiperDispach) {
  

  const requestTypePokemonAsync = async (typePokemon: string) => {
    const response = await requestPokemonType(9,0,typePokemon);
    console.log("ResponseAwait",response);
    const typeTratado = response?.map((type) => {
      return {
        name: type.pokemon.name,
        url: type.pokemon.url
      }
      })
    console.log("typeTratado",typeTratado);
    typeTratado && setResult(typeTratado);
  }
  
  return (
    <div className={styles.CarroselSwiperFilter}>
      <Swiper
        cssMode={true}
        slidesPerView={4}
        navigation={true}
        loop={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {typesPokemonsArray.map((type) => (
          <SwiperSlide 
          onClick={() => requestTypePokemonAsync(type.type)}
          key={type.type}>
            <button style={{backgroundColor : type.color}} className={styles.buttonContainer}>
            <img src={type.imageUrl} alt={type.title}></img>
            {type.title}
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
