import React, { useState, useEffect } from 'react'

const PokemonAPI = (props) => {
  const [names, setNames] = useState([])

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
      .then(response => response.json())
      .then(response => setNames(response.results))
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