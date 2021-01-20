import React from "react";
import { useHistory } from "react-router-dom";
import { goToProfile } from "../../routes/coordinator";
import { DivCard, DivImg, ButtonCard1, PokeImg, ButtonCard2  } from "./styled";
import useRequest from '../../context/GlobalContextData';

const CardPokemon = () => {
  const history = useHistory();
  const { pokemon, pokedex, setPokedex } = useRequest();    

  const addPokemon = (pokemon) => {
    const position = pokedex.findIndex((item) => item.id === pokemon.id);
    let novaPokedex = [...pokedex];
    if (position === -1) {
      novaPokedex.push(pokemon);
      setPokedex(novaPokedex);
      alert(`${pokemon.name} foi adicionado à Pokedex com sucesso!`);
    } else {
      alert('Pokemon já está na pokedex')
    }
  };

  return (
    <>
      {pokemon.map((value) => {
        return (          
            <DivCard key={value.id}>
              <h3>{value.name.toUpperCase()}</h3>
              <DivImg>
                  <PokeImg src={value.sprites.front_default} alt="Pokemon"/>
              </DivImg>
              <ButtonCard1 onClick={() => { addPokemon(value)}}>Adicionar ao Pokedex </ButtonCard1>
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