import React from "react";
import { MainCard, DivCard, ButtonCard} from "./styled";


const Pokedex = () => {
    return (
        <MainCard>
        <DivCard>
          <DivImg></DivImg>
          <ButtonCard>Remover do Pokedex </ButtonCard>
          <ButtonCard>Ver detalhes</ButtonCard>
        </DivCard>
      </MainCard>
      );
    };
    
  export default PerfilPokemon;
