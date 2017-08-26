const axios = require('axios');

const getExhangeRate = async (from, to) => {
    try {
        let apiURL = `http://api.fixer.io/latest?base=${from}`;
        const res = await axios.get(apiURL, {responseType: 'json'});
        let rate = res.data.rates[to.toUpperCase()];
        if (rate) {
            return rate;
        } else {
            throw new Error()
        }
    } catch (e) {
        throw new Error(`Unable to get exchange rate from ${from} to ${to}`);
    }
};

const getCountries = async (currencyCode) => {
    try {
        let apiURL = `https://restcountries.eu/rest/v2/currency/${currencyCode}`;
        const res = await axios.get(apiURL, {responseType: 'json'})
        return res.data.map(country => country.name);
    } catch (err) {
        throw new Error(`Unable to get countries that use ${currencyCode}`);
    }
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

convertCurrency_await('PPP', 'PHP', 100).then(res=> {
    console.log(res);
}).catch(err => {
    console.log(err.message);
});