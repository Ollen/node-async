const axios = require('axios');

const getExhangeRate = (from, to) => {
    let apiURL = `http://api.fixer.io/latest?base=${from}`;
    return axios.get(apiURL, {responseType: 'json'})
        .then(res => {
            return res.data.rates[to.toUpperCase()];
        });
};

const getCountries = currencyCode => {
    let apiURL = `https://restcountries.eu/rest/v2/currency/${currencyCode}`;
    return axios.get(apiURL, {responseType: 'json'})
        .then(res => {
            return res.data.map(country => {
                return country.name;
            });
        });
};

const convertCurrency_promiseChain = (from, to, amount) => {
    let countries;
    return getCountries(to)
        .then(countriesRes => {
            countries = countriesRes;
            return getExhangeRate(from, to);
        })
        .then(rate => {
            let exchangedAmount = amount * rate;
            return `${amount} ${from} is worth ${exchangedAmount} ${to}.\n${to} can be used in the following countries ${countries.join(', ')}`;
        });
     
};

const convertCurrency_await = async (from, to, amount) => {
    let countries = await getCountries(to);
    let rate = await getExhangeRate(from, to);

    let exchangedAmount = amount * rate;
    return (`${amount} ${from} is worth ${exchangedAmount} ${to}.\n${to} can be used in the following countries ${countries.join(', ')}`);
};

convertCurrency_await('usd', 'php', 100).then(res=> {
    console.log(res);
});