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
    <div>
      {names.map((pokemonName, index) => {
        return (<div key={index}> {pokemonName.name} </div>)
      })}
    </div>
  );
}

export default PokemonAPI;