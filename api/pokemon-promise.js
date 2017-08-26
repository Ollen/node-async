const axios = require('axios');
const baseUrl = 'http://pokeapi.co/api/v2';

const getPokemon = name => {
    name = name.toString().toLowerCase();
    let apiURL = `${baseUrl}/pokemon/${name}`;
    
    return axios.get(apiURL, {responseType: 'json'});
};

module.exports = {
    getPokemon
};