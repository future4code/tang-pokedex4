import styled from 'styled-components';
import imagemFundo from '../img/fundo.png';



export  const MeioPagina = styled.main`
display: flex;
background-attachment: fixed;
background-position: center;
background-size: 100%;
background-position: 20% 40%;
background-image: url(${imagemFundo});
`
export  const ImagemPoke = styled.div`
align-self: center;
height: 270px;
display: flex;
margin-left: 30%;
position: fixed;
`
export  const ImagemPoke2 = styled.div`
align-self: center;
height: 250px;
display: flex;
margin-left: 60%;
position: fixed;
`

export const CardPoderes = styled.div`
height: 400px;
width: 200px;
display: flex;
flex-direction: column;
padding-left: 80px;
font-size: 16px;
color: whitesmoke;
margin-inline-start: 69px;
margin-top: 100px;
background-color: black;
`
export const CardAtaques = styled.div`
height: 400px;
width: 200px;
display: flex;
flex-direction: column;
padding-left: 80px;
font-size: 16px;
color: whitesmoke;
margin-inline-start: 69px;
margin-top: 100px;
background-color: black;
margin-left: 50%;
`