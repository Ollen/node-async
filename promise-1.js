const pokemon = require('./api/pokemon-promise');

pokemon.getPokemon('Nosepass')
    .then(res => {
        console.log(JSON.stringify(res, null, 4));            
        return pokemon.getPokemonShape(res.id);
    }).then(res => {
        console.log(JSON.stringify(res, null, 4));
    }).catch(err => {
        console.log(err);
    });