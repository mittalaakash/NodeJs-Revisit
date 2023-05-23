#!/usr/bin/env Node
const yargs = require('yargs');
const { argv } = yargs(process.argv);

const printMoves = async pokemonName => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName}`,
  );

  const pokemon = await response.json();
  const moves = pokemon.moves.map(({ move }) => move.name);
  console.log(moves);
};

printMoves('ditto');
