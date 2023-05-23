#!/usr/bin/env Node
const yargs = require('yargs');
const inquirer = require('inquirer');

const { argv } = yargs(process.argv);

const printMoves = async pokemonName => {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`,
    );

    const pokemon = await response.json();
    const moves = pokemon.moves.map(({ move }) => move.name);
    console.log(moves.slice(0, 5));
  } catch (error) {
    console.log(`error in fetching pokemon  with name ${pokemonName}`);
  }
};

const prompt = inquirer.createPromptModule();
prompt([
  {
    type: 'input',
    name: 'pokemon',
    message: "Enter pokemon name to view it's moves: ",
  },
]).then(answer => {
  const pokemon = answer.pokemon;
  printMoves(pokemon);
});
