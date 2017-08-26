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
            return 'Pokemon not found.';
        } else {
            return `${err.response.status} ${err.response.statusText}`;
        }
    }
}

module.exports = {
    getPokemon
}