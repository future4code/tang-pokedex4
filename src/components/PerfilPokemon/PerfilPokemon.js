import React from "react";
import { MeioPagina, ImagemPoke, ImagemPoke2, CardPoderes, CardAtaques} from "./styled";
import imagemPikachuFrente from "../img/PikachuFrente.png";
import imagemPikachuCostas from "../img/PikachuCostas.png";

const PerfilPokemon = () => {
    return (
      <MeioPagina>
        
          <ImagemPoke>
          <img src={imagemPikachuFrente} alt="Pikachu" width="150px" height="150px" />
          </ImagemPoke>
          <ImagemPoke2>
          <img src={imagemPikachuCostas} alt="Pikachu" width="150px" height="150px" />
          </ImagemPoke2>
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
          );
    };
    
  export default PerfilPokemon;

