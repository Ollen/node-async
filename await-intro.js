/**
 * IMPORTANT: Specify the function as an async to utilize await-async
 * 
 * Put the keyword 'async' at the before the argument of a function.
 */



// Variation 1
async function var1(name) {
    return name;
}

// Variation 2 
const var2 = async (name) => {
    return name;
}

/**
 * IMPORTANT: async-await always returns a promise.
 * If a return occurs, it will automatically return it as a 'resolve'
 * To reject in async, simply throw an Error.
 */

console.log(var1('Allendale')); // Outputs `Promise {'Allendale'}`
console.log(var2('Allendale')); // Outputs `Promise {'Allendale'}`

const asyncReject = async() => {
    throw new Error('This is an Error'); 
};

console.log(asyncReject());