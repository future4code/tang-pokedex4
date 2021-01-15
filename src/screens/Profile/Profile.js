import React from "react";
import Header from "../../components/Header/Header";
import PerfilPokemon from "../../components/PerfilPokemon/PerfilPokemon";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/urls";

const Profile = () => {
  const pokemonsData = useRequestData([], BASE_URL)
  console.log(pokemonsData)

  return (
    <div>
      <Header />
      <PerfilPokemon />
      
    </div>
  );
};

export default Profile;