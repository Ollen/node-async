const request = require('request');
const baseUrl = 'http://pokeapi.co/api/v2';


const getPokemon = (name, callback) => {
    name = name.toString().toLowerCase();
    let apiURL = `${baseUrl}/pokemon/${name}`;
    request.get({
        url: apiURL,
        json: true
    }, (err, res, body) => {
        if (err) {
            callback('Error Connecting to API');
        } else if (res.statusCode == '404') {
            callback('Pokemon not found');
        } else {
            callback(undefined, body);
        }
    });
};

module.exports = {
    getPokemon
};