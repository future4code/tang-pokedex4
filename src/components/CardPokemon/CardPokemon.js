import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { goToProfile } from "../../routes/coordinator";
import { MainCard, DivCard, DivImg, ButtonCard  } from "./styled";
import useRequest from '../../context/GlobalContextData';

const CardPokemon = () => {
  const history = useHistory();
  const {data, getData, pokemonId, setpokemonId} = useRequest()

  useEffect(() => {
    getData()    
  },[]);
  

  console.log(data)

  // const pokemonList = data.map((value) => {
  //   return (
  //     <MainCard>
  //       <DivCard>
  //         <DivImg>
  //             <img src={value.name} alt="Pokemon" width="100px" height="150px" />
  //         </DivImg>
  //         <ButtonCard>Adicionar ao Pokedex </ButtonCard>
  //         <ButtonCard onClick={() => { goToProfile(history)}}>Ver detalhes</ButtonCard>
  //       </DivCard>
  //     </MainCard>
  //   )
  // })

  return (
    <div>
      {/* {pokemonList} */}
    </div>      
  )
}

export default CardPokemon;