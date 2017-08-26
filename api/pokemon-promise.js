const axios = require('axios');
const _ = require('lodash');
const baseUrl = 'http://pokeapi.co/api/v2';

const getPokemon = name => {
    name = name.toString().toLowerCase();
    let apiURL = `${baseUrl}/pokemon/${name}`;
    
    return new Promise((resolve, reject) => {
        axios.get(apiURL, {responseType: 'json'})
            .then(res => {
                let data = _.pick(res.data, ['name', 'id', 'height', 'weight']);
                let stringify = JSON.stringify(data, null, 4);
                resolve(stringify);            
            }, err => {
                if (err.response.status == 404) {
                    reject('Pokemon not found.');
                } else {
                    reject(`${err.response.status} ${err.response.statusText}`);
                }
            });

    });
};

module.exports = {
    getPokemon
};