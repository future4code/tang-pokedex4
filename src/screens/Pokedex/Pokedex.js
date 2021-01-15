import React from "react";
import Header from "../../components/Header/Header";
import CardPokemon from "../../components/CardPokemon/CardPokemon";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/urls";

const Pokedex = () => {
  const pokemonsData = useRequestData([], BASE_URL)
  console.log(pokemonsData)

  return (
    <div>
      <h3>Pokedex</h3>
      <Header />
      <CardPokemon />
      
    </div>
  );
};

export default Pokedex;