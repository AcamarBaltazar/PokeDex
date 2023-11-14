// src/PokemonCard.js
import React from 'react';
import './Pokemon.css';

const PokemonCard = ({ pokemon }) => {
  const imgURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`
  return (
    <div className="pokemon-card">
      <img src={imgURL} alt={pokemon.name} />
      <h2>{pokemon.name}</h2>
      <p>Type: {pokemon.type}</p>
      <p>Health: {pokemon.health}</p>
      <p>Attack: {pokemon.attack}</p>
      <p>Sp.Atk: {pokemon.spAtk}</p>
      <p>Sp.Def: {pokemon.spDef}</p>
      <p>Speed: {pokemon.speed}</p>
    </div>
  );
};

export default PokemonCard;