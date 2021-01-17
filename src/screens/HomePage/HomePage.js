import React from "react";
import Header from "../../components/Header/Header";
import CardPokemon from "../../components/CardPokemon/CardPokemon";
import { MainCard } from "./styled";

const HomePage = () => {
  

  return (
    <MainCard>
      <Header />
      <CardPokemon />
    </MainCard>
  );
};

export default HomePage;