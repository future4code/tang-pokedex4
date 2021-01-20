import React, { useState, createContext, useContext, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/urls";

const RequestContext = createContext()

export const RequestProvider = ({children}) =>{

    const [data, setData] = useState([]);
    const [pokemon, setPokemon] = useState([]);
    const [pokedex, setPokedex] = useState([]);

    useEffect (() => {
      getData()
    },[])

    useEffect(() => {
      const pokemonList = []
      data.forEach((value) => {
        axios
          .get(value.url)
          .then((response) => {
            pokemonList.push(response.data)
            if(pokemonList.length === 20) {
              const orderedList = pokemonList.sort((a, b) => {
                return a.id - b.id
              })
              setPokemon(orderedList)
            }
          })            
          .catch((error) => console.log(error.message));
      })
    },[data])

    const getData  = () => {
      axios
        .get(BASE_URL)
        .then((response) => setData(response.data.results))
        .catch((error) => console.log(error.message));      
    };   
    
    return(
        <RequestContext.Provider value={{ 
          data,
          setData,          
          pokemon,
          setPokemon,
          pokedex,
          setPokedex         
          }}>
            {children}
        </RequestContext.Provider>
    )
}

export default function useRequest(){
  const request = useContext(RequestContext)
  const { data, setData, pokemon, setPokemon, pokedex, setPokedex} = request
  return {data, setData, pokemon, setPokemon, pokedex, setPokedex}
}