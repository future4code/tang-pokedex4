import React from "react";
import Header from "../../components/Header/Header";
import CardPokemon from "../../components/CardPokemon/CardPokemon";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/urls";

const Pokedex = (props) => {

  console.log(props)

  return (
    <div>
      <Header />
      {/* <CardPokemon /> */}
      
    </div>
  );
};

export default Pokedex;