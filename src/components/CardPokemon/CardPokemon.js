import React from "react";
import { useHistory } from "react-router-dom";
import { goToProfile } from "../../routes/coordinator";
import { MainCard, DivCard, DivImg, ButtonCard  } from "./styled";
import imagemPikachu from "../img/pikachu.png";
import imagemPokezinho from "../img/pokezinho.png";

const CardPokemon = () => {
  const history = useHistory();

  return (
    <MainCard>
    <DivCard>
      <DivImg>
          <img src={imagemPikachu} alt="Pikachu" width="100px" height="150px" />
      </DivImg>
        <ButtonCard>Adicionar ao Pokedex </ButtonCard>
        <ButtonCard onClick={() => { goToProfile(history)}}>Ver detalhes</ButtonCard>
    </DivCard>
    
    <DivCard>
      <DivImg>
          <img src={imagemPokezinho} alt="Pokemon" width="100px" height="150px" />
      </DivImg>
        <ButtonCard>Adicionar ao Pokedex </ButtonCard>
        <ButtonCard onClick={() => { goToProfile(history)}}>Ver detalhes</ButtonCard>
    </DivCard>
    </MainCard>
  );
};

export default CardPokemon;