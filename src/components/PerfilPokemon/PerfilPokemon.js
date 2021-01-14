import React from "react";
import { MeioPagina, ImagemPoke, CardPoderes, CardAtaques} from "./styled";


const PerfilPokemon = () => {
    return (
        <body>
        <MeioPagina>
          <ImagemPoke>
            <img src={pokefrente}/>
            <img src={pokecostas}/>
          </ImagemPoke>
          <CardPoderes>
            <h2>Poderes 🔥</h2>
            <p>hp: 78</p>
            <p>attack: 84</p>
            <p>defense: 78</p>
            <p>special-attack: 109</p>
            <p>special-defense: 85</p>
            <p>speed: 100</p>
          </CardPoderes>
          <CardAtaques><h2>Ataques ⚔️</h2>
          <p>mega-punch</p>
          <p>fire-punch</p>
          <p>thunder-punch</p>
          <p>scratch</p>
          <p>fire</p>
          <p>swords-dance</p>
          </CardAtaques>
        </MeioPagina>
        </body>
          );
    };
    
  export default PerfilPokemon;

