const pokemon = require('./api/pokemon-await');

// pokemon.getPokemon('spoink')
//     .then(res => {
//         console.log(JSON.stringify(res, null, 4));
//         return pokemon.getPokemonShape(res.id);
//     }).then(res => {
//         console.log(res);
//     }).catch(err => {
//         console.log(err);
//     });

async function getPokemonAwait(name) {
    try {
        let res = await pokemon.getPokemon(name);
        let shape = await pokemon.getPokemonShape(res.id);
        console.log(JSON.stringify(res, null, 4));
        console.log(shape);
    } catch (err) {
        console.log(err);
    }

};

getPokemonAwait('mudkip');