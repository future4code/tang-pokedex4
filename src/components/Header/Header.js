import React from "react";
import { useHistory } from "react-router-dom"
import { goToPokedex, goToHome } from "../../routes/coordinator"
import { DivHeader, DivTitle, ButtonPokedex, Title } from "./styled";


const Header = () => {
  const history = useHistory();

  let destino = {};
  switch (history.location.pathname) {
    case "/":
      destino = {
        texto: "Ir para Pokedex",
        titulo: "Lista de Pokemóns",
        função: () => { goToPokedex(history) }
      }
      break;
    case "/pokedex":
      destino = {
        texto: "Ir para Home",
        titulo: "Pokedéx",
        função: () => { goToHome(history) }
      }
      break;

    default:
      destino = {
        texto: "Voltar",
        titulo: "",
        função: () => { history.goBack() }
      }
      break;
  }
  return (
    <DivHeader>
      <ButtonPokedex
        onClick={destino.função}>
        {destino.texto}
      </ButtonPokedex>
      <DivTitle>
        <Title>{destino.titulo}</Title>
      </DivTitle>
    </DivHeader>

  );
};

export default Header;