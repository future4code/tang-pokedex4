import React from "react";
import { MainCard, DivCard, ButtonCard} from "./styled";
const { pokemon } = useRequest();   


const Pokedex = () => {

  const { pokemon, pokedex } = useRequest();
  
  
    
  return (
    <>
    {
      pokedex && pokedex.map((list) => {
        return (<MainCard>
        <DivCard key={list.name}>
          <DivImg>
            <img src={list.sprites && list.sprites.front_default} alt="Pokemon"/>
          </DivImg>
          <ButtonCard onClick={() => removeFromPokedex()}>Remover do Pokedex </ButtonCard>
          <ButtonCard>Ver detalhes</ButtonCard>
        </DivCard>
      </MainCard>)

      })
    }
    </>
        
      )
};
    
  export default PerfilPokemon;
