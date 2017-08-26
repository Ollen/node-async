const pokemon = require('./api/pokemon-promise');

pokemon.getPokemon('Raichu')
    .then(res => {
        console.log(res);            
    }, err => {
        console.log(err);
    });