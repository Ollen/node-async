const pokemon = require('./api/pokemon-await');

pokemon.getPokemon('foasdw')
    .then(res => {
        console.log(res);
    });