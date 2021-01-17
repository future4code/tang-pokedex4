import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { goToProfile } from "../../routes/coordinator";
import { MainCard, DivCard, DivImg, ButtonCard } from "./styled";
import useRequest from '../../context/GlobalContextData';

const CardPokemon = () => {
  const history = useHistory();
  const { data, getData, pokemonId, setpokemonId } = useRequest()

  useEffect(() => {
    getData();
  }, []);

  console.log("data:", data)
  console.log("pokemonId:", pokemonId)

  let textoBotão = history.location.pathname === "/pokedex" ? "Remover da" : "Adicionar a";

  const pokemonList = data && data.map((value) => {
    return (
      <DivCard>
        <h3>{value.name} </h3>
        <DivImg>
          <img src="" alt="Pokemon" width="100px" height="150px" />
        </DivImg>
        <ButtonCard>{textoBotão} Pokedex </ButtonCard>
        <ButtonCard onClick={() => { goToProfile(history) }}>Ver detalhes</ButtonCard>
      </DivCard>
    )
  })



  return (
    <div>
      <MainCard>
        {pokemonList}</MainCard>
    </div>
  )
}

export default CardPokemon;