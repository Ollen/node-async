const pokemon = require('./api/pokemon-await');

pokemon.getPokemon('spoink')
    .then(res => {
        console.log(JSON.stringify(res, null, 4));
        return pokemon.getPokemonShape(res.id);
    }).then(res => {
        console.log(res);
    }).catch(err => {
        console.log(err);
    });