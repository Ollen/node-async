const pokemon = require('./api/pokemon-callback');
const _ = require('lodash');

function callback (err, res) {
    if (err) {
        console.log(err);
    } else {
        let data = _.pick(res, ['name', 'id', 'height', 'weight']);
        let stringify = JSON.stringify(data, null, 4);
        console.log(stringify);
    }
}

pokemon.getPokemon(26 , callback);