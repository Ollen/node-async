const pokemon = require('./api/pokemon-promise');
const _ = require('lodash');

pokemon.getPokemon('Snivyd')
    .then(res => {
        let data = _.pick(res.data, ['name', 'id', 'height', 'weight']);
        let stringify = JSON.stringify(data, null, 4);
        console.log(stringify);            
    }, err => {
        if (err.response.status == 404) {
            console.log('Pokemon not found.');
        } else {
            console.log(`${err.response.status} ${err.response.statusText}`);
        }
    });