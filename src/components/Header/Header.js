import React from "react";
import { DivHeader, DivTitle, ButtonPokedex, Title } from "./styled";


const Header = () => {
  return (
    <DivHeader>        
        <ButtonPokedex>Ir para Pokedex</ButtonPokedex>
        <DivTitle>            
            <Title>Lista de Pokemons</Title>
        </DivTitle>
    </DivHeader>
    
  );
};

export default Header;