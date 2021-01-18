import React, { useEffect, useState } from "react";
import { MeioPagina, ImagemPoke, ImagemPoke2, CardPoderes, CardAtaques} from "./styled";
import { useParams } from "react-router-dom";
import useRequest from '../../context/GlobalContextData';


const PerfilPokemon = () => {
    const {name} = useParams()
    const { pokemon } = useRequest();
    const [selectedPokemon, setSelectedPokemon] = useState({});  

    useEffect(() => {
      const dataPokemon = pokemon.find((item) => {
        return item.name === name        
      })
      setSelectedPokemon(dataPokemon)
    },[])

    return (
      <MeioPagina>          
          <ImagemPoke>
          <img src={selectedPokemon && selectedPokemon.sprites && selectedPokemon.sprites.front_default} alt="Pikachu" width="150px" height="150px" />
          </ImagemPoke>
          <ImagemPoke2>
          <img src={selectedPokemon && selectedPokemon.sprites && selectedPokemon.sprites.back_default} alt="Pikachu" width="150px" height="150px" />
          </ImagemPoke2>
          <CardPoderes>
            <h2>Poderes</h2>
            { selectedPokemon && selectedPokemon.stats &&
              selectedPokemon.stats.map((value) => {
                return (
                  <p key={value.stat.name}>
                    <strong>{value.stat.name}:</strong>{value.base_stat}
                  </p>
                )

              })
            }           
          </CardPoderes>
          <div>
              { selectedPokemon && selectedPokemon.types &&
                selectedPokemon.types.map((type) => {
                  return <p key={type.type.name}>{type.type.name}{type.type.name}</p>
                })
              }      
          </div>
          <CardAtaques>
            <h2>Principais ataques</h2>
            {selectedPokemon && selectedPokemon.moves &&
              selectedPokemon.moves.map((moves, index) => {
                return (
                  index < 5 && <p key={moves.move.name}>{moves.move.name}</p>
                )
              })
          }
          </CardAtaques>
          
        </MeioPagina>
          );
    };
    
  export default PerfilPokemon;

