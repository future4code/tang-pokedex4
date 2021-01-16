import React, { useState, createContext, useContext } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/urls";

const RequestContext = createContext()

export const RequestProvider = ({children}) =>{

    const [data, setData] = useState({});
    const [pokemonId, setPokemonId] = useState("");

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
          getData,
          pokemonId,
          setPokemonId          
          }}>
            {children}
        </RequestContext.Provider>
    )
}

export default function useRequest(){
  const request = useContext(RequestContext)
  const { data, setData, getData, pokemonId, setPokemonId} = request
  return {data, setData, getData, pokemonId, setPokemonId}
}