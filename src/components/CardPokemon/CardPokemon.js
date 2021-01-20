import React from "react";
import { useHistory } from "react-router-dom";
import { goToProfile } from "../../routes/coordinator";
import { DivCard, DivImg, ButtonCard1, PokeImg, ButtonCard2  } from "./styled";
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
              <ButtonCard1>Adicionar ao Pokedex </ButtonCard1>
              <br>
              </br>
              <ButtonCard2 onClick={() => { goToProfile(history, value.name)}}>Ver detalhes</ButtonCard2>
            </DivCard>         
        )
      })}   
    </>
  )
}

export default CardPokemon;