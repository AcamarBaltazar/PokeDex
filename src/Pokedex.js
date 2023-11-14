// src/Pokedex.js
import React from 'react';
import PokemonCard from './PokemonCard';
import './Pokemon.css';

const Pokedex = ({ pokemons }) => {
  return (
    <div>
      <h1>Pokédex</h1>
      <div className="pokedex-container">
        {pokemons.map((pokemon, index) => (
          <PokemonCard key={index} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default Pokedex;