import React from "react";
import { useHistory } from "react-router-dom";
import { goToProfile } from "../../routes/coordinator";
import { DivCard, DivImg, ButtonCard, PokeImg  } from "./styled";
import useRequest from '../../context/GlobalContextData';

const CardPokemon = () => {
  const history = useHistory();
  const { pokemon } = useRequest();    
  
  return (
    <>
      {pokemon.map((value) => {
        return (          
            <DivCard key={value.name}>
              <DivImg>
                  <PokeImg src={value.sprites.front_default} alt="Pokemon"/>
              </DivImg>
              <ButtonCard>Adicionar ao Pokedex </ButtonCard>
              <ButtonCard onClick={() => { goToProfile(history, value.name)}}>Ver detalhes</ButtonCard>
            </DivCard>         
        )
      })}   
    </>
  )
}

export default CardPokemon;