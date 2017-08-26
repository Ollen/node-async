const axios = require('axios');
const _ = require('lodash');
const baseUrl = 'http://pokeapi.co/api/v2';


const getPokemon = async (name) => {
    name = name.toString().toLowerCase();
    let apiURL = `${baseUrl}/pokemon/${name}`; 

    try {
        let res = await axios(apiURL, {responseType: 'json'});
        res = _.pick(res.data, ['name', 'id', 'height', 'weight']);
        return res;
    } catch (err) {
        if (err.response.status == 404) {
            return Promise.reject('Pokemon not Found') // Alternatively, you can throw an Error e.g.(return throw new Error('...'));
        } else {
            return Promise.reject(`${err.response.status} ${err.response.statusText}`);  // Alternatively, you can throw an Error e.g.(return throw new Error('...'));
        }
    }
}

const getPokemonShape = async (id) => {
    let apiURL = `${baseUrl}/pokemon-species/${id}`; 
    
    try {
        let res = await axios.get(apiURL, {responseType: 'json'});
        return `Pokemon shape: ${res.data.shape.name}`;
    } catch (err) {
        if (err.response.status == 404) {
            return Promise.reject('Pokemon not Found')  // Alternatively, you can throw an Error e.g.(return throw new Error('...'));
        } else {
            return Promise.reject(`${err.response.status} ${err.response.statusText}`);  // Alternatively, you can throw an Error e.g.(return throw new Error('...'));
        }
    }

};

module.exports = {
    getPokemon,
    getPokemonShape
}