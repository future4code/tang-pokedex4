import React from "react";
import styled from 'styled-components';
import pokefrente from "./img/pokefrente.png";
import pokecostas from "./img/pokecostas.png";

const MenuBotão = styled.header`
height: 8vh;
background: rgb(48, 167, 215);
display: flex;
-webkit-box-align: center;
align-items: center;
-webkit-box-pack: center;
justify-content: center;
color: white;
position: relative;
`;

const ButtonVoltar = styled.button`
border:2px solid gray;
border-radius:5px;
font-family:Verdana;
font-weight:bold;
font-size:13px;
padding:5px 30px;
top:5px;
`;

const ButtonIr = styled.button`
border:2px solid gray;
border-radius:5px;
font-family:Verdana;
font-weight:bold;
font-size:13px;
padding:5px 30px;
top:5px;
`;
 const MeioPagina = styled.main`
 height: 80vh;
    margin: 20px 10vw;
    margin-top: 20px;
    margin-right: 10vw;
    margin-bottom: 20px;
    margin-left: 10vw;
    display: flex;
    justify-content: space-evenly;
    background-color: gray;
    `;
 const ImagemPoke = styled.div`
 align-self: center;
    height: 60%;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: justify;
    justify-content: space-between;
    `;
  
  const CardPoderes = styled.div`
  background: rgb(241, 241, 241);
    align-self: center;
    height: 75%;
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-left: 20px;
    font-size: 16px;
    color: black;
    `;

const CardAtaques = styled.div`
background: rgb(241, 241, 241);
  align-self: center;
  height: 75%;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 20px;
  `;

function App() {
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
}

export default App;
