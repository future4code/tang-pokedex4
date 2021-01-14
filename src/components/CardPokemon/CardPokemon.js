import React from "react";
import { MainCard, DivCard, DivImg, ButtonCard  } from "./styled";
import imagemPikachu from "../img/pikachu.png";
import imagemPokezinho from "../img/pokezinho.png";

const Header = () => {
  return (
    <MainCard>
    <DivCard>
      <DivImg>
          <img src={imagemPikachu} alt="Pikachu" width="100px" height="150px" />
      </DivImg>
        <ButtonCard>Adicionar ao Pokedex </ButtonCard>
        <ButtonCard>Ver detalhes</ButtonCard>
    </DivCard>
    <DivCard>
      <DivImg>
          <img src={imagemPokezinho} alt="Pokemon" width="100px" height="150px" />
      </DivImg>
        <ButtonCard>Adicionar ao Pokedex </ButtonCard>
        <ButtonCard>Ver detalhes</ButtonCard>
    </DivCard>
    </MainCard>
  );
};

export default Header;