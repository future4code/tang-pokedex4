import React from "react";
import { useHistory } from "react-router-dom";
import { goToProfile } from "../../routes/coordinator";
import { DivCard, DivImg, ButtonCard1, ButtonCard2 } from "./styled";
import useRequest from '../../context/GlobalContextData';

const CardPokedex = () => {
  const history = useHistory();
  const { pokedex, setPokedex } = useRequest();
  const removeFromPokedex = (removido) => {
    const posicao = pokedex.findIndex((pokemon) => pokemon.id === removido.id);
    let novaPokedex = [...pokedex];
    novaPokedex.splice(posicao, 1);
    setPokedex(novaPokedex);
  }
  return (
    <>
      {pokedex && pokedex.map((pokemon) => {
        return (
          <DivCard key={pokemon.id}>
            <h3>{pokemon.name.toUpperCase()}</h3>
            <DivImg>
              <img src={pokemon.sprites && pokemon.sprites.front_default} alt="Pokemon" />
            </DivImg>
            <ButtonCard1 onClick={() => removeFromPokedex(pokemon)}>Remover do Pokedex </ButtonCard1>
            <ButtonCard2 onClick={() => { goToProfile(history, pokemon.name) }}>Ver detalhes</ButtonCard2>
          </DivCard>
        )

      })
      }
    </>

  )
};

export default CardPokedex;
