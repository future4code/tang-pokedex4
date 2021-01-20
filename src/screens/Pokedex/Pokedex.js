import React from "react";
import Header from "../../components/Header/Header";
import CardPokedex from "../../components/CardPokedex/CardPokedex";
import { MainCard } from "./styled";

const Pokedex = () => {
  
  return (
    <MainCard>
      <Header />  
      <CardPokedex />    
    </MainCard>
  );
};

export default Pokedex;