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
position: fixed;
height: 250px;
width: 250px;
display: flex;
left: 10%;
position: fixed;
top: 5vh;
`
export  const ImagemPoke2 = styled.div`
align-self: center;
height: 250px;
width: 250px;
display: flex;
margin-left: 85%;
position: fixed;
top: 5vh;
`

export const CardPoderes = styled.div`
height: 400px;
width: 200px;
display: flex;
flex-direction: column;
padding-left: 50px;
font-size: 16px;
color: whitesmoke;
margin-inline-start: 69px;
margin-top: 300px;
background-color: black;
`
export const CardAtaques = styled.div`
height: 400px;
width: 200px;
display: flex;
flex-direction: column;
padding-left: 50px;
font-size: 16px;
color: whitesmoke;
margin-inline-start: 69px;
margin-top: 300px;
background-color: black;
margin-left: 50%;
margin-right: 50px;
`