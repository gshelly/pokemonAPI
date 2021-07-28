import React, { useState, useEffect } from 'react'
import axios from 'axios'

const PokemonAPI = (props) => {
  const [names, setNames] = useState([])

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
      .then(response => setNames(response.data.results))
      .catch(error => console.log(error))
  }, []);

  return (
    <ul>
      {names.map((pokemonName, index) => {
        return (<li key={index}> {pokemonName.name} </li>)
      })}
    </ul>
  );
}

export default PokemonAPI;